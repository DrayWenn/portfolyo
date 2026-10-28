@echo off
chcp 65001 >nul
title Umut Yazici - GitHub Guncelleme

echo Degisiklikler GitHub'a gonderiliyor...
git add -A
git commit -m "guncelleme: %date% %time%"
git push -u origin main

echo.
echo Tamamlandi.
pause
