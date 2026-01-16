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
        const randomEmail = `lazKorsan150120260702@gmail.com`;
        const password = 'Query.2026';
        globalEmail = randomEmail; // after bloğu için kopyalıyoruz
        
        
        
        
        cy.get('#app button.w-full').click();
        cy.get('#formEmail').click();
        cy.get('#formEmail').type(randomEmail);
        cy.get('#formPassword').click();
        cy.get('#formPassword').type('Query.2026');
        cy.get('#app button.w-full').click();
        cy.get('#app button:nth-child(5)').click();
        cy.get('#mobile-profile-canvas a[href="#/account/address"] span').click();
        cy.get('#app span.font-semibold').click();
        cy.get('#address div:nth-child(1) > input.w-full').click();
        cy.get('#address div:nth-child(1) > input.w-full').type('lazKorsan');
        cy.get('#address input[type="email"]').click();
        cy.get('#address input[type="email"]').type(randomEmail);
        cy.get('#phone').click();
        cy.get('#phone').type('5325323232');
        cy.get('#vs753-combobox input').click();
        cy.get('#vs753-option-59').click();
        cy.get('#vs753-combobox input').type('den');
        cy.get('#vs756-combobox input').click();
        cy.get('#vs756-option-2 span').click();
        cy.get('#vs759-combobox input').click();
        cy.get('#vs759-option-2 span').click();
        cy.get('#address div:nth-child(7) input.w-full').click();
        cy.get('#address div:nth-child(7) input.w-full').type('12345');
        cy.get('#address div:nth-child(8) input.w-full').click();
        cy.get('#address div:nth-child(8) input.w-full').type('321');
        cy.get('#address button.bg-primary').click();
        cy.get('#app i.lab-line-home').click();
        cy.get('#app div:nth-child(4) a.overflow-hidden img.w-full').click();
        cy.get('#app dd.flex-wrap button:nth-child(1)').click();
        cy.get('#app button.shadow-btn-primary span.font-bold').click();
        cy.get('#app i.bg-primary').click();
        cy.get('#cart-canvas a.text-white').click();
        cy.get('#app div:nth-child(2) > span:nth-child(3)').click();
        cy.get('#app div.flex-col-reverse button.normal-case').click();
        cy.get('#app div.grid-cols-2 div:nth-child(2)').click();
        cy.get('#app i.bg-primary').click();
        cy.get('#cart-canvas a.active').click();
        cy.get('#app div.border-primary\\/50 span:nth-child(4)').click();
        cy.get('#app div.flex-col-reverse button.normal-case').click();
        cy.get('#app div.flex-col-reverse button.normal-case').click();
        cy.get('#confirmBtn').click();
        cy.get('#payment-modal button.normal-case').should('have.text', 'See your order details');
        cy.get('#payment-modal button.normal-case').click();
        cy.get('#app i.lab-line-home').click();
        cy.get('#app button:nth-child(5) span.capitalize').click();
        cy.get('#mobile-profile-canvas a[href="#/account/order-history"] span').click();
        cy.get('#app i.lab-line-humburger').click();
        cy.get('#mobile-sidebar-canvas').click();
        cy.get('#mobile-sidebar-canvas i.text-danger').click();
        cy.get('#app tr:nth-child(1) i.text-white').click();
        cy.get('#app a[href="#/account/order-details/1734"]').click();
        cy.get('#app button.border').click();
        cy.get('button.swal2-confirm').click();
    });

    after(() => {
        // Test bittiğinde terminale (Consola) yazdırır
        if (globalEmail) {
            cy.task('log', `\n--- TEST SONUCU ---\nOluşturulan Email: ${globalEmail}\n-------------------\n`);
        }
    });
});
