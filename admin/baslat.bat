@echo off
chcp 65001 > nul
title Umut Yazici - Portfolyo Panel

cd /d "%~dp0"
echo Sunucu baslatiliyor...
node server.js

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Hata: Node.js bulunamadi ya da sunucu baslatilamadi.
    pause
)
