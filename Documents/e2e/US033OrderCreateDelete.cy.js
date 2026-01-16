describe('Manuel Kayıt testi ', () => {

// npm run test:US021
    let globalPhoneNumber; // Email'i saklamak için değişken


    it('ManuelMethod Kayıt Testi', function() {
        cy.log("Maneuel Kayıt Testi Baslıyor ");
        cy.visit('https://querycart.com/#/home');
        
        
        const randomPhoneNumber = `5435410915`;
        const password = 'Query.2026';
        const name = 'lazKorsan';
        globalPhoneNumber = randomPhoneNumber;
        
        // // Örnek: 1736925501 (10 haneli benzersiz bir sayı)
        //   const telNo = Date.now().toString().slice(-10);
        //   cy.get('#telefon-alani').type(telNo);
        
        
        
        
        cy.get('#app i.lab-line-user').click();
        cy.get('#app div.gap-1\\.5 a.capitalize.font-bold').click();
        cy.get('#app button.underline').click();
        cy.get('#formName').click();
        cy.get('#formName').type('lazBakkal');
        cy.get('#phone').click();
        cy.get('#phone').type(randomPhoneNumber);
        cy.get('#formPassword').click();
        cy.get('#formPassword').type('Query.2026');

        // Kayıt ol butonuna tıkla
        cy.get('#app button.w-full').click();

        // OTP ekranı veya bir sonraki adımda takılan butonu geçmek için
        // Tab tuşu ile odaklanıp Enter'a basmayı deniyoruz
        //cy.get('body').tab().tab().type('{enter}');

        // Eğer yukarıdaki çalışmazsa, class üzerinden bulmayı deneyebiliriz:
         cy.get('.font-bold.text-center.w-full.h-12.leading-12.rounded-full.bg-primary.text-white.capitalize.mb-6').click({force: true});

        cy.get('#mobile-profile-canvas a[href="#/account/address"] span').click();
        cy.get('#app span.font-semibold').click();
        cy.get('#address div:nth-child(1) > input.w-full').click();
        cy.get('#address div:nth-child(1) > input.w-full').type('lazBakkla');
        cy.get('#address input[type="email"]').click();
        cy.get('#address input[type="email"]').type('lazBakkal@gmail.com');
        cy.get('#phone').click();
        cy.get('#phone').type('5435400808');
        cy.get('#vs753-combobox input').click();
        cy.get('#vs753-option-59').click();
        cy.get('#vs753-combobox input').type('den');
        cy.get('#vs756-combobox input').click();
        cy.get('#vs756-option-2 span').click();
        cy.get('#vs759-combobox input').click();
        cy.get('#vs759-option-4 span').click();
        cy.get('#address div:nth-child(7) input.w-full').click();
        cy.get('#address div:nth-child(7) input.w-full').type('12345');
        cy.get('#address div:nth-child(8) input.w-full').click();
        cy.get('#address div:nth-child(8) input.w-full').type('321');
        cy.get('#address button.bg-primary').click();
        cy.get('#app i.lab-line-home').click();
        cy.get('#app div.mobile\\:\\!w-24.swiper-slide-next img.w-full').click();
        cy.get('#app div:nth-child(3) > div.isolate > a.overflow-hidden > img.w-full').click();
        cy.get('#app dd.flex-wrap button:nth-child(1)').click();
        cy.get('#app button.shadow-btn-primary span.font-bold').click();
        cy.get('#app i.bg-primary').click();
        cy.get('#cart-canvas a.text-white').click();
        cy.get('#app span:nth-child(3)').click();
        cy.get('#app div.flex-col-reverse button.normal-case').click();
        cy.get('#app div.grid-cols-2 div:nth-child(3)').click();
        cy.get('#app div.flex-col-reverse button.normal-case').click();
        cy.get('#confirmBtn').click();
        cy.get('#payment-modal button.normal-case').click();
        cy.get('#app button.border').click();
        cy.get('button.swal2-confirm').click();
        cy.get('#app i.lab-line-user').click();
        cy.get('#mobile-profile-canvas a[href="#/account/order-history"] span').click();
        cy.get('#app tr:nth-child(1) span.db-table-badge').should('have.text', 'Canceled');
        cy.get('#app i.lab-line-user').click();
        cy.get('#mobile-profile-canvas a[href="#/account/address"]').click();
        cy.get('#app nav.absolute button:nth-child(2)').click();
        cy.get('button.swal2-confirm').click();
        cy.get('#app i.lab-line-user').click();
        cy.get('#mobile-profile-canvas button.flex').click();
        cy.get('#app i.lab-line-user').click();
        cy.get('#app h3.text-2xl').should('have.text', 'Sign In');
    });

    after(() => {
        // Test bittiğinde terminale (Consola) yazdırır
        if (globalPhoneNumber) {
            cy.task('log', `\n--- TEST SONUCU ---\nOluşturulan Email: ${globalPhoneNumber}\n-------------------\n`);
        }
    });
});
