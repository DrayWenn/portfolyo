@echo off
chcp 65001 > nul
title Portfolyo Yonetim Paneli
echo.
echo =======================================================
echo   UMUT YAZICI - PORTFOLYO YONETIM PANELI
echo =======================================================
echo.
echo   Sunucu baslatiliyor...
echo.

cd /d "%~dp0"
node server.js

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [HATA] Node.js bulunamadi veya sunucu baslatilamadi.
    echo Lutfen Node.js'in kurulu oldugundan emin olun.
    echo Indirmek icin: https://nodejs.org/
    echo.
    pause
)
