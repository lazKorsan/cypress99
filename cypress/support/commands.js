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

// Kayıt olma (Register) metodu
// Bu metod, verilen isim, email ve şifre ile siteye kayıt olur.
// Kullanımı: cy.registerMethodQueryCart('KullaniciAdi', 'email@test.com', 'Sifre123');
Cypress.Commands.add('registerMethodQueryCart', (name, email, password) => {
    cy.log("Kayıt işlemi başlıyor...");
    cy.visit('https://querycart.com/#/home');

    // Login sayfasına git
    cy.get('#app nav.fixed a[href="#/login"]').click();

    // Register sayfasına geçiş yap
    cy.get('#app div.gap-1\\.5 a.capitalize.font-bold').click();

    // Formu doldur
    cy.get('#formName').click().type(name);
    cy.get('#formEmail').click().type(email);
    cy.get('#formPassword').click().type(password);

    // Kayıt ol butonuna tıkla
    cy.get('#app button.w-full').click();
});
