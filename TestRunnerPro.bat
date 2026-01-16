
@echo off
cd /d "C:\Users\user\IdeaProjects\cypress99"
REM geri kalan script...

chcp 65001 > nul
title CYPRESS TEST RUNNER
color 0A

echo ================================
echo      CYPRESS TEST RUNNER
echo ================================
echo.

:menu
echo 1. US033 - Order Create/Delete (Chrome)
echo 2. US034 - Simple Command (Chrome)
echo 3. US033 - Headless (No Browser)
echo 4. US034 - Headless (No Browser)
echo 5. Both Tests - Sequential (Chrome)
echo 6. Both Tests - Parallel (Chrome)
echo 7. Select Browser Manually
echo 8. Open Cypress Test Runner GUI
echo 9. Exit
echo.
set /p choice="Select option [1-9]: "

if "%choice%"=="1" goto test1_chrome
if "%choice%"=="2" goto test2_chrome
if "%choice%"=="3" goto test1_headless
if "%choice%"=="4" goto test2_headless
if "%choice%"=="5" goto both_sequential
if "%choice%"=="6" goto both_parallel
if "%choice%"=="7" goto select_browser
if "%choice%"=="8" goto cypress_gui
if "%choice%"=="9" exit
echo Invalid choice! Please try again.
goto menu

:test1_chrome
echo Running US033 with Chrome...
npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US033OrderCreateDelete.cy.js" --browser chrome --headed
pause
goto menu

:test2_chrome
echo Running US034 with Chrome...
npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US034SimpleCommand.cy.js" --browser chrome
pause
goto menu

:test1_headless
echo Running US033 Headless...
npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US033OrderCreateDelete.cy.js" --headless
pause
goto menu

:test2_headless
echo Running US034 Headless...
npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US034SimpleCommand.cy.js" --headless
pause
goto menu

:both_sequential
echo Running both tests sequentially with Chrome...
npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US033OrderCreateDelete.cy.js" --browser chrome
npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US034SimpleCommand.cy.js" --browser chrome
pause
goto menu

:both_parallel
echo Running both tests in parallel with Chrome...
start "Test US033 - Chrome" npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US033OrderCreateDelete.cy.js" --browser chrome
start "Test US034 - Chrome" npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US034SimpleCommand.cy.js" --browser chrome
pause
goto menu

:select_browser
echo.
echo Available Browsers:
echo 1. Chrome
echo 2. Edge
echo 3. Firefox
echo 4. Electron
echo.
set /p browser_choice="Select browser [1-4]: "

set browser=
if "%browser_choice%"=="1" set browser=chrome
if "%browser_choice%"=="2" set browser=edge
if "%browser_choice%"=="3" set browser=firefox
if "%browser_choice%"=="4" set browser=electron

if "%browser%"=="" (
    echo Invalid browser choice!
    pause
    goto menu
)

echo.
echo Which test to run?
echo 1. US033 - Order Create/Delete
echo 2. US034 - Simple Command
echo 3. Both Tests
echo.
set /p test_choice="Select test [1-3]: "

if "%test_choice%"=="1" (
    echo Running US033 with %browser%...
    npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US033OrderCreateDelete.cy.js" --browser %browser%
) else if "%test_choice%"=="2" (
    echo Running US034 with %browser%...
    npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US034SimpleCommand.cy.js" --browser %browser%
) else if "%test_choice%"=="3" (
    echo Running both tests with %browser%...
    npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US033OrderCreateDelete.cy.js" --browser %browser%
    npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US034SimpleCommand.cy.js" --browser %browser%
) else (
    echo Invalid test choice!
)
pause
goto menu

:cypress_gui
echo Opening Cypress Test Runner GUI...
start "Cypress GUI" npx cypress open
echo Cypress GUI opened in separate window.
pause
goto menu