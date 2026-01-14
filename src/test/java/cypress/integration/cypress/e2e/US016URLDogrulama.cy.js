it('URL Doğrulama ve Terminal Logu', () => {
    cy.visit('https://demoqa.com/')

    cy.url().should('eq', 'https://demoqa.com/').then(() => {

            cy.task('log', '*********Sistem Mesajı: URL başarıyla doğrulandı.*******');

        }) // then bloğunun kapanış parantezi eksikti

});