describe('US023 Login With Method Test', () => {
    it('US023LoginWithMethod', function() {
    // npm run test:US023
        const mail = 'lazKorsan1768440524756@gmail.com';
        const password = 'Query.2026';

        cy.loginMethodQueryCart(mail, password);
    });
});
