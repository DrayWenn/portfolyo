@echo off
chcp 65001 >nul
title GitHub Portfolyo Guncelleyici
echo ===================================================
echo   PORTFOLYO GITHUB GUNCELLEYICI (DrayWenn)
echo ===================================================
echo.
echo Değişiklikler GitHub'a yükleniyor, lütfen bekleyin...
echo.

git add .
git commit -m "Portfolyo Guncelleme: %date% %time%"
git push origin main

echo.
echo ===================================================
echo   ISLEM TAMAMLANDI! GitHub basariyla guncellendi.
echo ===================================================
echo.
pause
