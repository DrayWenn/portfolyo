(function initHeroFlowField() {
  const container = document.getElementById('heroFlowCanvas');
  if (!container || typeof p5 === 'undefined') return;

  new p5((p) => {
    let isVisible = true;
    let zOff = 0;

    const CONFIG = {
      desktopCount: 72,
      mobileCount: 36,
      waveLines: 6,
      cellSize: 44,
      noiseScale: 0.085,
      zStep: 0.0035,
      baseSpeed: 1.35,
      trailLength: 10,
      mouseRadius: 155,
      mouseForce: 0.65
    };

    const PALETTE = {
      dark: ['rgba(56, 189, 248, 0.26)', 'rgba(59, 130, 246, 0.22)', 'rgba(125, 211, 252, 0.22)'],
      light: ['rgba(2, 132, 199, 0.18)', 'rgba(37, 99, 235, 0.16)', 'rgba(56, 189, 248, 0.16)'],
      ribbonDark: 'rgba(56, 189, 248, 0.08)',
      ribbonLight: 'rgba(2, 132, 199, 0.065)'
    };

    let cols = 0;
    let rows = 0;
    let flowGridCos = new Float32Array(0);
    let flowGridSin = new Float32Array(0);

    let count = 0;
    const T = CONFIG.trailLength;
    let posX, posY, velX, velY, spd, bucket, age, lifeSpan, headIdx, trailX, trailY;

    let smoothMouse = { x: -9999, y: -9999, vx: 0, vy: 0, active: false };
    let lastRawMouse = { x: -9999, y: -9999 };

    function buildGrid() {
      cols = Math.ceil(p.width / CONFIG.cellSize) + 1;
      rows = Math.ceil(p.height / CONFIG.cellSize) + 1;
      const total = cols * rows;
      if (flowGridCos.length < total) {
        flowGridCos = new Float32Array(total);
        flowGridSin = new Float32Array(total);
      }
    }

    function updateGrid() {
      const scale = CONFIG.noiseScale;
      let idx = 0;
      for (let r = 0; r < rows; r++) {
        const ny = r * scale;
        for (let c = 0; c < cols; c++) {
          const angle = p.noise(c * scale, ny, zOff) * p.TWO_PI * 2.0;
          flowGridCos[idx] = Math.cos(angle);
          flowGridSin[idx] = Math.sin(angle);
          idx++;
        }
      }
    }

    function resetParticle(i, randomAge) {
      const x = Math.random() * p.width;
      const y = Math.random() * p.height;
      posX[i] = x;
      posY[i] = y;
      velX[i] = 0;
      velY[i] = 0;
      spd[i] = CONFIG.baseSpeed * (0.75 + Math.random() * 0.55);
      bucket[i] = i % 3;
      lifeSpan[i] = 200 + ((Math.random() * 220) | 0);
      age[i] = randomAge ? ((Math.random() * lifeSpan[i]) | 0) : 0;
      headIdx[i] = 0;

      const offset = i * T;
      for (let k = 0; k < T; k++) {
        trailX[offset + k] = x;
        trailY[offset + k] = y;
      }
    }

    function initParticles() {
      count = window.innerWidth < 768 ? CONFIG.mobileCount : CONFIG.desktopCount;
      posX = new Float32Array(count);
      posY = new Float32Array(count);
      velX = new Float32Array(count);
      velY = new Float32Array(count);
      spd = new Float32Array(count);
      bucket = new Uint8Array(count);
      age = new Uint16Array(count);
      lifeSpan = new Uint16Array(count);
      headIdx = new Uint8Array(count);
      trailX = new Float32Array(count * T);
      trailY = new Float32Array(count * T);

      for (let i = 0; i < count; i++) {
        resetParticle(i, true);
      }
    }

    p.setup = () => {
      const rect = container.getBoundingClientRect();
      const cnv = p.createCanvas(rect.width || window.innerWidth, rect.height || window.innerHeight);
      cnv.parent(container);
      p.pixelDensity(1);
      p.frameRate(50);
      buildGrid();
      updateGrid();
      initParticles();
    };

    let frameTick = 0;

    p.draw = () => {
      if (!isVisible || document.hidden) return;

      const ctx = p.drawingContext;
      ctx.clearRect(0, 0, p.width, p.height);

      frameTick++;
      if ((frameTick & 1) === 0) {
        zOff += CONFIG.zStep;
        updateGrid();
      }

      if (
        p.mouseX > 0 &&
        p.mouseX < p.width &&
        p.mouseY > 0 &&
        p.mouseY < p.height
      ) {
        smoothMouse.active = true;
        if (lastRawMouse.x === -9999) {
          smoothMouse.x = p.mouseX;
          smoothMouse.y = p.mouseY;
        } else {
          smoothMouse.vx += (p.mouseX - lastRawMouse.x - smoothMouse.vx) * 0.25;
          smoothMouse.vy += (p.mouseY - lastRawMouse.y - smoothMouse.vy) * 0.25;
          smoothMouse.x += (p.mouseX - smoothMouse.x) * 0.2;
          smoothMouse.y += (p.mouseY - smoothMouse.y) * 0.2;
        }
        lastRawMouse.x = p.mouseX;
        lastRawMouse.y = p.mouseY;
      } else {
        smoothMouse.active = false;
      }

      const isLightMode = document.body.classList.contains('light-mode');
      const w = p.width;
      const h = p.height;
      const invCell = 1 / CONFIG.cellSize;
      const maxR = CONFIG.mouseRadius;
      const maxRSq = maxR * maxR;
      const mActive = smoothMouse.active;
      const mx = smoothMouse.x;
      const my = smoothMouse.y;
      const mvx = smoothMouse.vx;
      const mvy = smoothMouse.vy;

      ctx.lineWidth = 1.1;
      ctx.strokeStyle = isLightMode ? PALETTE.ribbonLight : PALETTE.ribbonDark;
      ctx.beginPath();
      const waveCount = CONFIG.waveLines;
      const stepX = 48;
      for (let i = 0; i < waveCount; i++) {
        const baseY = h * (0.16 + (i / (waveCount - 1)) * 0.68);
        const rIdx = Math.min(rows - 1, Math.max(0, (baseY * invCell) | 0)) * cols;
        for (let x = 0; x <= w; x += stepX) {
          const cIdx = Math.min(cols - 1, (x * invCell) | 0);
          let y = baseY + flowGridSin[rIdx + cIdx] * 38;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      for (let i = 0; i < count; i++) {
        let x = posX[i];
        let y = posY[i];

        const c = Math.min(cols - 1, Math.max(0, (x * invCell) | 0));
        const r = Math.min(rows - 1, Math.max(0, (y * invCell) | 0));
        const gIdx = r * cols + c;

        const s = spd[i];
        let tvx = flowGridCos[gIdx] * s;
        let tvy = flowGridSin[gIdx] * s;

        if (mActive) {
          const dx = x - mx;
          const dy = y - my;
          const dSq = dx * dx + dy * dy;
          if (dSq < maxRSq && dSq > 1) {
            const d = Math.sqrt(dSq);
            const falloff = (1 - d / maxR) * (1 - d / maxR) * CONFIG.mouseForce;
            const invD = 1 / d;
            tvx += (dx * invD * 1.2 - dy * invD * 0.4 + mvx * 0.08) * falloff;
            tvy += (dy * invD * 1.2 + dx * invD * 0.4 + mvy * 0.08) * falloff;
          }
        }

        const vx = velX[i] + (tvx - velX[i]) * 0.16;
        const vy = velY[i] + (tvy - velY[i]) * 0.16;
        velX[i] = vx;
        velY[i] = vy;

        x += vx;
        y += vy;
        posX[i] = x;
        posY[i] = y;

        const nextAge = age[i] + 1;
        age[i] = nextAge;

        const hPtr = (headIdx[i] + 1) % T;
        headIdx[i] = hPtr;
        const baseOffset = i * T;
        trailX[baseOffset + hPtr] = x;
        trailY[baseOffset + hPtr] = y;

        if (nextAge >= lifeSpan[i] || x < -20 || x > w + 20 || y < -20 || y > h + 20) {
          resetParticle(i, false);
        }
      }

      const colors = isLightMode ? PALETTE.light : PALETTE.dark;
      ctx.lineWidth = 1.5;
      ctx.lineCap = 'round';

      for (let b = 0; b < 3; b++) {
        ctx.strokeStyle = colors[b];
        ctx.beginPath();
        for (let i = 0; i < count; i++) {
          if (bucket[i] !== b) continue;
          const baseOffset = i * T;
          let ptr = headIdx[i];
          ctx.moveTo(trailX[baseOffset + ptr], trailY[baseOffset + ptr]);
          for (let k = 1; k < T; k++) {
            ptr = (ptr === 0 ? T - 1 : ptr - 1);
            ctx.lineTo(trailX[baseOffset + ptr], trailY[baseOffset + ptr]);
          }
        }
        ctx.stroke();
      }
    };

    p.windowResized = () => {
      const rect = container.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        p.resizeCanvas(rect.width, rect.height);
        buildGrid();
        updateGrid();
      }
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isVisible = entry.isIntersecting;
            if (isVisible) p.loop();
            else p.noLoop();
          });
        },
        { threshold: 0.05 }
      );
      observer.observe(container);
    }
  }, container);
})();
