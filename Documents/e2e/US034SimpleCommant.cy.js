it('ScrollMethod', function() {
    // Testin başlangıcını logla
    cy.log("Scroll to element view testi başlıyor");

    // Belirtilen URL'ye git
    cy.visit('https://practice.expandtesting.com');

    // URL kontrolü
    cy.url().should('eq', 'https://practice.expandtesting.com/').then((url) => {
        cy.log('Current URL: ' + url); // Mevcut URL'yi logla
    });

    // Sayfanın başlığını al ve konsola yazdır
    cy.title().then((title) => {
        console.log('Current Title:', title); // Konsola yazdır
        cy.log('Current Title: ' + title); // Cypress loguna da yazdır
    });

    // Başlıkta 'practice' kelimesinin geçip geçmediğini kontrol et
    cy.title().should('include', 'Automation Testing Practice Website for QA and Developers | UI and API');

    // Yanlış yazım control
    cy.title().should('not.include', 'paractice'); // Yanlış yazım kontrolü

    // Sayfanın yüklenmesini beklemek için bir süre bekleyelim (isteğe bağlı)
    cy.wait(1000); // 1 saniye bekle




});
