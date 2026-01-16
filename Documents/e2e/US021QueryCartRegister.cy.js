describe('Kayıt Testi', () => {

// npm run test:US021
    let globalEmail; // Email'i saklamak için değişken

    it('ScrollMethod', function() {
        cy.log("Scroll to element view testi başlıyor");
        cy.visit('https://querycart.com/#/home');

        cy.get('#app nav.fixed a[href="#/login"]').click();
        cy.get('#app div.gap-1\\.5 a.capitalize.font-bold').click();
        cy.get('#formName').click().type('lazKorsan');

        // Random mail oluştur ve değişkene ata
        const randomEmail = `lazKorsan${Date.now()}@gmail.com`;
        globalEmail = randomEmail; // after bloğu için kopyalıyoruz

        cy.log("Oluşturulan Mail: " + randomEmail);

        cy.get('#formEmail').click().type(randomEmail);
        cy.get('#formPassword').click().type('Query.2026');
        cy.get('#app button.w-full').click();
    });

    after(() => {
        // Test bittiğinde terminale (Consola) yazdırır
        if (globalEmail) {
            cy.task('log', `\n--- TEST SONUCU ---\nOluşturulan Email: ${globalEmail}\n-------------------\n`);
        }
    });
});
