@ECHO OFF
FOR /f "tokens=4-5 delims=. " %%i IN ('ver') DO SET VERSION=%%i.%%j

IF "%version%" == "10.0" echo Windows 10
GOTO :win10

IF "%version%" == "6.3" echo Windows 8.1
IF "%version%" == "6.2" echo Windows 8
IF "%version%" == "6.1" echo Windows 7
GOTO :win7

:win10
Powershell.exe -Command npm run start

:win7
npm run start

PAUSE