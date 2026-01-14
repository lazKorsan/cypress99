// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'


// US004.cy.js test dosyasını çalıştırmak için özel komut
Cypress.Commands.add('runUS004', () => {
  cy.visit('https://example.com'); // Testin çalışacağı URL (gerekirse değiştirin)
  cy.exec('npx cypress run --spec "cypress/e2e/US004.cy.js"', { failOnNonZeroExit: false });
});

