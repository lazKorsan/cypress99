describe('US025 Register With Method Test', () => {

// npm run test:US025



    let globalEmail; // Email'i saklamak için değişken

    it('RegisterWithMethod', function() {
        const name = 'lazKorsan';
        const password = 'Query.2026';

        // Random mail oluştur
        const randomEmail = `lazKorsan${Date.now()}@gmail.com`;
        globalEmail = randomEmail; // after bloğu için kopyalıyoruz

        // commands.js içinde tanımladığımız metodu çağırıyoruz
        cy.registerMethodQueryCart(name, randomEmail, password);
    });

    after(() => {
        // Test bittiğinde terminale (Consola) yazdırır
        if (globalEmail) {
            cy.task('log', `\n--- TEST SONUCU ---\nOluşturulan Email: ${globalEmail}\n-------------------\n`);
        }
    });
});
