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
        cy.get('#app i.lab-line-user').click();
        cy.get('#mobile-profile-canvas a[href="#/account/address"] span').click();
        cy.get('#app button.justify-center').click();
        cy.get('#address div:nth-child(1) > input.w-full').click();
        cy.get('#address div:nth-child(1) > input.w-full').type('lazKorsan');
        cy.get('#address input[type="email"]').click();
        cy.get('#address input[type="email"]').type('lazKorsan123@gmail.com');
        cy.get('#phone').click();
        cy.get('#phone').type('532532000000');
        cy.get('#vs753-combobox input').click();
        cy.get('#vs753-combobox input').click();
        cy.get('#vs753-option-59').click();
        cy.get('#vs753-combobox input').type('Den');
        cy.get('#vs756-combobox input').click();
        cy.get('#vs756-option-1 span').click();
        cy.get('#vs759-combobox input').click();
        cy.get('#vs759-option-6').click();
        cy.get('#address div:nth-child(7) input.w-full').click();
        cy.get('#address div:nth-child(7) input.w-full').type('12345');
        cy.get('#address div:nth-child(8) input.w-full').click();
        cy.get('#address div:nth-child(8) input.w-full').type('12');
        cy.get('#address button.bg-primary').click();
        cy.get('#app i.lab-line-home').click();
    });

    after(() => {
        // Test bittiğinde terminale (Consola) yazdırır
        if (globalEmail) {
            cy.task('log', `\n--- TEST SONUCU ---\nOluşturulan Email: ${globalEmail}\n-------------------\n`);
        }
    });
});
