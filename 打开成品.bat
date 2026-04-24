@echo off
setlocal

cd /d "%~dp0"
set "HOST=127.0.0.1"
set "PORT=4173"
set "URL=http://%HOST%:%PORT%/"
set "VITE_CMD=%~dp0node_modules\.bin\vite.cmd"

if not exist "%VITE_CMD%" (
  where npm >nul 2>nul
  if errorlevel 1 (
    echo [ERROR] Node.js / npm was not found.
    echo [HINT] Install Node.js first, then run this file again.
    pause
    exit /b 1
  )

  echo [INFO] Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo [ERROR] Failed to install dependencies.
    pause
    exit /b 1
  )
)

call :check_port
if "%RUNNING%"=="1" goto open_browser

echo [INFO] Starting preview server...
start "Solar System Preview" cmd /k "cd /d ""%~dp0"" && call ""%VITE_CMD%"" preview --host %HOST% --port %PORT%"

for /l %%I in (1,1,20) do (
  timeout /t 1 /nobreak >nul
  call :check_port
  if "%RUNNING%"=="1" goto open_browser
)

echo [ERROR] Preview server failed to start.
echo [HINT] Check the opened command window for the actual error message.
pause
exit /b 1

:open_browser
echo [INFO] Opening %URL%
start "" "%URL%"
exit /b 0

:check_port
set "RUNNING=0"
for /f "tokens=5" %%P in ('netstat -ano ^| findstr /R /C:":%PORT% .*LISTENING"') do (
  set "RUNNING=1"
  set "SERVER_PID=%%P"
  goto :eof
)
goto :eof
