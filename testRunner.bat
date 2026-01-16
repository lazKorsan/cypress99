@echo off
echo ================================
echo CYPRESS TEST RUNNER
echo ================================
echo.

:menu
echo 1. US033 - Order Create/Delete
echo 2. US034 - Simple Command
echo 3. Both Tests (Sequential)
echo 4. Both Tests (Parallel)
echo 5. Exit
echo.
set /p choice="Select test [1-5]: "

if "%choice%"=="1" goto test1
if "%choice%"=="2" goto test2
if "%choice%"=="3" goto test3
if "%choice%"=="4" goto test4
if "%choice%"=="5" exit

:test1
echo Running US033...
npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US033OrderCreateDelete.cy.js"
pause
goto menu

:test2
echo Running US034...
npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US034SimpleCommand.cy.js"
pause
goto menu

:test3
echo Running both tests sequentially...
npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US033OrderCreateDelete.cy.js"
npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US034SimpleCommand.cy.js"
pause
goto menu

:test4
echo Running both tests in parallel...
start "Test US033" npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US033OrderCreateDelete.cy.js"
start "Test US034" npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US034SimpleCommand.cy.js"
pause
goto menu