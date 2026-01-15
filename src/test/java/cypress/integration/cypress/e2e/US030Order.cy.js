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
        
        
        
        
        
        cy.get('#app a[href="#/login"] span.capitalize').click();
        cy.get('#formEmail').click();
        cy.get('#formEmail').type('lazKorsan150120260714@gmail.com');
        cy.get('#formPassword').click();
        cy.get('#formPassword').type('Query.2026');
        cy.get('#formRemember').check();
        cy.get('#app button.w-full').click();
        cy.get('#app div.mobile\\:\\!w-24.swiper-slide-active img.w-full').click();
        cy.get('#app div:nth-child(2) > div.isolate > a.overflow-hidden > img.w-full').click();
        cy.get('#app dd.flex-wrap button:nth-child(1)').click();
        cy.get('#app button.shadow-btn-primary span.font-bold').click();
        cy.get('#app i.bg-primary').click();
        cy.get('#cart-canvas a.text-white').click();
        cy.get('#app button.flex.text-primary span.capitalize').click();
        cy.get('#shipping-address-modal div:nth-child(1) > input.w-full').click();
        cy.get('#shipping-address-modal div:nth-child(1) > input.w-full').type('lazKorsan');
        cy.get('#shipping-address-modal input[type="email"]').click();
        cy.get('#shipping-address-modal input[type="email"]').type('lazBakkal321@gmail.com');
        cy.get('#shipping-address-modal #phone').click();
        cy.get('#shipping-address-modal #phone').type('5325323232');
        cy.get('#vs1059-combobox input').click();
        cy.get('#vs1059-option-59 span').click();
        cy.get('#vs1059-combobox input').type('den');
        cy.get('#vs1062-combobox input').click();
        cy.get('#vs1062-option-2').click();
        cy.get('#vs1065-combobox input').click();
        cy.get('#vs1065-option-5').click();
        cy.get('#shipping-address-modal div:nth-child(7) input.w-full').click();
        cy.get('#shipping-address-modal div:nth-child(7) input.w-full').type('12345');
        cy.get('#shipping-address-modal div:nth-child(8) input.w-full').click();
        cy.get('#shipping-address-modal div:nth-child(8) input.w-full').type('321');
        cy.get('#shipping-address-modal button.bg-primary').click();
        cy.get('#app div.cursor-pointer.border span:nth-child(2)').click();
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
        cy.get('#app i.lab-line-user').click();
        cy.get('#mobile-profile-canvas button.flex').click();
    });

    after(() => {
        // Test bittiğinde terminale (Consola) yazdırır
        if (globalEmail) {
            cy.task('log', `\n--- TEST SONUCU ---\nOluşturulan Email: ${globalEmail}\n-------------------\n`);
        }
    });
});
