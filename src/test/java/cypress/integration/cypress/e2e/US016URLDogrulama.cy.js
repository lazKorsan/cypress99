it('URL Doğrulama ve Terminal Logu', () => {
    cy.visit('qa.loyalfriendcare.com');

    cy.url().should('eq', 'https://qa.loyalfriendcare.com/en').then(() => {

        cy.task('log', '*********Sistem Mesajı: URL başarıyla doğrulandı.*******');

    });
});
