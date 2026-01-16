it('URL Doğrulama ve Loglama Senaryosu', () => {

    cy.visit('https://qa.loyalfriendcare.com/en')

    // URL'i al ve doğrulama başarılıysa (then) log at
    cy.url().should('eq', 'https://qa.loyalfriendcare.com/en').then((urlValue) => {

        // Bu blok sadece yukarıdaki .should() başarılı olursa çalışır
        cy.log('Onaylandı: Şu anki URL değeri (' + urlValue + ') beklenen sonuca eşittir.');

        // Eğer terminale (VS Code konsoluna) de yazdırmak isterseniz:
         cy.task('log', 'Sistem Mesajı: URL doğrulandı.');
    });

});
