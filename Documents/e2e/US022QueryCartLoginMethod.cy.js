// Bu metod artık cypress/support/commands.js dosyasında tanımlanmıştır.
// Böylece tüm test dosyalarından erişilebilir.

describe('US022 Query Cart Login Method Test', () => {
    it('Login with Method', () => {
        const mail = 'lazKorsan1768440524756@gmail.com';
        const password = 'Query.2026';

        cy.loginMethodQueryCart(mail, password);
    });
});
