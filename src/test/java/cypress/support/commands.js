// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginMethodQueryCart', (mail, password) => {
    cy.log("Giriş işlemi başlıyor...");
    cy.visit('https://querycart.com/#/home');

    cy.get('#app i.lab-line-user').click();
    cy.get('#formEmail').type(mail);
    cy.get('#formPassword').type(password);
    cy.get('#formRemember').check();
    cy.get('#app button.w-full').click();
});
