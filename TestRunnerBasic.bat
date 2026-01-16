@echo off
@echo off
cd /d "C:\Users\user\IdeaProjects\cypress99"
REM geri kalan script...
title CYPRESS TEST RUNNER - CHROME
color 0A

echo ================================
echo   CYPRESS TEST RUNNER (CHROME)
echo ================================
echo.

:menu
echo 1. US033 - Order Create/Delete
echo 2. US034 - Simple Command
echo 3. Both Tests (Sequential)
echo 4. Both Tests (Parallel)
echo 5. Headless Mode (No Browser)
echo 6. Exit
echo.
set /p choice="Select option [1-6]: "

if "%choice%"=="1" goto test1
if "%choice%"=="2" goto test2
if "%choice%"=="3" goto test3
if "%choice%"=="4" goto test4
if "%choice%"=="5" goto headless_menu
if "%choice%"=="6" exit

:test1
echo Running US033 with Chrome...
npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US033OrderCreateDelete.cy.js" --browser chrome --headed
pause
goto menu

:test2
echo Running US034 with Chrome...
npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US034SimpleCommand.cy.js" --browser chrome
pause
goto menu

:test3
echo Running both tests sequentially with Chrome...
npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US033OrderCreateDelete.cy.js" --browser chrome
npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US034SimpleCommand.cy.js" --browser chrome
pause
goto menu

:test4
echo Running both tests in parallel with Chrome...
start "US033 - Chrome" npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US033OrderCreateDelete.cy.js" --browser chrome
start "US034 - Chrome" npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US034SimpleCommand.cy.js" --browser chrome
pause
goto menu

:headless_menu
echo.
echo Headless Mode (Faster - No Browser Window):
echo 1. US033 Headless
echo 2. US034 Headless
echo 3. Both Headless
echo 4. Back to Main Menu
echo.
set /p headless_choice="Select [1-4]: "

if "%headless_choice%"=="1" (
    echo Running US033 Headless...
    npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US033OrderCreateDelete.cy.js" --headless
) else if "%headless_choice%"=="2" (
    echo Running US034 Headless...
    npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US034SimpleCommand.cy.js" --headless
) else if "%headless_choice%"=="3" (
    echo Running both tests Headless...
    npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US033OrderCreateDelete.cy.js" --headless
    npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US034SimpleCommand.cy.js" --headless
) else if "%headless_choice%"=="4" (
    goto menu
)
pause
goto menu