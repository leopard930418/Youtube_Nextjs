@echo off
setlocal

cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is required to run this localhost server.
  echo Download it from https://nodejs.org/
  pause
  exit /b 1
)

set PORT=8000
if not "%~1"=="" set PORT=%~1

echo Starting site on http://localhost:%PORT%/
echo.
start "" "http://localhost:%PORT%/"
node "%~dp0localhost-server.js" --port=%PORT%

echo.
pause
