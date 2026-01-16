#!/bin/bash

echo "================================"
echo "CYPRESS TEST RUNNER"
echo "================================"
echo ""

PS3='Please select test to run: '
options=("US033 - Order Create/Delete" "US034 - Simple Command" "Both Tests (Sequential)" "Both Tests (Parallel)" "Exit")
select opt in "${options[@]}"
do
    case $opt in
        "US033 - Order Create/Delete")
            echo "Running US033..."
            npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US033OrderCreateDelete.cy.js"
            ;;
        "US034 - Simple Command")
            echo "Running US034..."
            npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US034SimpleCommand.cy.js"
            ;;
        "Both Tests (Sequential)")
            echo "Running both tests sequentially..."
            npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US033OrderCreateDelete.cy.js"
            npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US034SimpleCommand.cy.js"
            ;;
        "Both Tests (Parallel)")
            echo "Running both tests in parallel..."
            npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US033OrderCreateDelete.cy.js" &
            npx cypress run --spec "src/test/java/cypress/integration/cypress/e2e/US034SimpleCommand.cy.js" &
            wait
            ;;
        "Exit")
            break
            ;;
        *) echo "Invalid option $REPLY";;
    esac
done