describe('Manuel Kayıt testi ', () => {

// npm run test:US021
    let globalEmail; // Email'i saklamak için değişken

    it('ManuelMethod Kayıt Testi', function() {
        cy.log("Maneuel Kayıt Testi Baslıyor ");
        cy.visit('https://querycart.com/#/home');


        const randomEmail = `lazKorsan150120260714@gmail.com`;
        const password = 'Query.2026';
        const name = 'lazKorsan';
        globalEmail = randomEmail; // after bloğu için kopyalıyoruz






    });

    after(() => {
        // Test bittiğinde terminale (Consola) yazdırır
        if (globalEmail) {
            cy.task('log', `\n--- TEST SONUCU ---\nOluşturulan Email: ${globalEmail}\n-------------------\n`);
        }
    });
});
