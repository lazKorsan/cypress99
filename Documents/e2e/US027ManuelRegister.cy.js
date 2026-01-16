describe('Manuel Kayıt testi ', () => {

// npm run test:US021
    let globalEmail; // Email'i saklamak için değişken

    it('ManuelMethod Kayıt Testi', function() {
        cy.log("Maneuel Kayıt Testi Baslıyor ");
        cy.visit('https://querycart.com/#/home');
        
        cy.get('#app nav.fixed a[href="#/login"]').click();
        cy.get('#app div.gap-1\\.5 a.capitalize.font-bold').click();
        cy.get('#formName').click().type('lazKorsan');
        
        // Random mail oluştur ve değişkene ata
        const randomEmail = `lazKorsan150120260649@gmail.com`;
        globalEmail = randomEmail; // after bloğu için kopyalıyoruz
        
        cy.log("Oluşturulan Mail: " + randomEmail);
        
        cy.get('#formEmail').click().type(randomEmail);
        cy.get('#formPassword').click().type('Query.2026');
        cy.get('#app button.w-full').click();
        cy.get('#app nav.fixed a[href="#/login"]').click();
        cy.get('#formEmail').click();
        cy.get('#formEmail').type('`lazKorsan150120260649@gmail.com');
        cy.get('#formPassword').click();
        cy.get('#formPassword').type('Query.2026');
        cy.get('#formRemember').check();
        cy.get('#app button.w-full').click();
        cy.get('#app div.mx-auto').click();
        cy.get('#formEmail').clear();
        cy.get('#formEmail').type(').type(\'`lazKorsan150120260649@gmail.com');
        cy.get('#app div.mx-auto').click();
        cy.get('#app button.w-full').click();
        cy.get('#app div.mx-auto').click();
        cy.get('#formEmail').clear();
        cy.get('#formEmail').type('lazKorsan150120260641@gmail.com');
        cy.get('#app button.w-full').click();
        cy.get('#app i.lab-line-user').click();
        cy.get('#mobile-profile-canvas a[href="#/account/address"]').click();
        cy.get('#app span.font-semibold').click();
        cy.get('#address div:nth-child(1) > input.w-full').click();
        cy.get('#address div:nth-child(1) > input.w-full').type('lazKorsan');
        cy.get('#address input[type="email"]').click();
        cy.get('#address input[type="email"]').type('LazKorsan123@gmail.com');
        cy.get('#phone').click();
        cy.get('#phone').type('543543323232');
        cy.get('#vs761-combobox input').click();
        cy.get('#vs761-option-59 span').click();
        cy.get('#vs761-combobox input').type('den');
        cy.get('#vs764-combobox input').click();
        cy.get('#vs764-option-3 span').click();
        cy.get('#vs767-combobox input').click();
        cy.get('#vs767-option-6 span').click();
        cy.get('#address div:nth-child(7) input.w-full').click();
        cy.get('#address div:nth-child(7) input.w-full').type('12345');
        cy.get('#address div:nth-child(8) input.w-full').click();
        cy.get('#address div:nth-child(8) input.w-full').type('332');
        cy.get('#address button.bg-primary').click();
        cy.get('#app nav.fixed a[href="#/home"]').click();
        cy.get('#app div:nth-child(4) a.overflow-hidden img.w-full').click();
        cy.get('#app dd.flex-wrap button:nth-child(1)').click();
        cy.get('#app button.shadow-btn-primary span.font-bold').click();
        cy.get('#app i.bg-primary').click();
        cy.get('#cart-canvas a.text-white').click();
        cy.get('#app div.grid-cols-1 div.cursor-pointer.border').click();
        cy.get('#app div.flex-col-reverse button.normal-case').click();
        cy.get('#app div:nth-child(2) > img.h-6').click();
        cy.get('#app div.flex-col-reverse button.normal-case').click();
        cy.get('#confirmBtn').click();
        cy.get('#payment-modal button.normal-case').should('have.text', 'See your order details');
        cy.get('#payment-modal button.normal-case').click();
        cy.get('#app button.border').click();
        cy.get('button.swal2-confirm').click();
        cy.get('#app i.lab-line-user').click();
        cy.get('#mobile-profile-canvas a[href="#/account/order-history"] span').click();
        cy.get('#app span.db-table-badge').should('have.text', 'Canceled');
        cy.get('#app button:nth-child(5)').click();
        cy.get('#mobile-profile-canvas button.flex span').click();
    });

    after(() => {
        // Test bittiğinde terminale (Consola) yazdırır
        if (globalEmail) {
            cy.task('log', `\n--- TEST SONUCU ---\nOluşturulan Email: ${globalEmail}\n-------------------\n`);
        }
    });
});
