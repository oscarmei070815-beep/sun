@echo off
setlocal

set "PORT=4173"
set "FOUND=0"

netstat -ano | findstr /R /C:":%PORT% .*LISTENING" >nul
if errorlevel 1 (
  echo [INFO] No preview server found on port %PORT%.
  pause
  exit /b 0
)

for /f "tokens=5" %%P in ('netstat -ano ^| findstr /R /C:":%PORT% .*LISTENING"') do (
  set "FOUND=1"
  echo [INFO] Stopping PID %%P ...
  taskkill /PID %%P /F >nul 2>nul
)

if "%FOUND%"=="1" (
  echo [DONE] Preview server stopped.
) else (
  echo [INFO] Nothing to stop.
)
pause
