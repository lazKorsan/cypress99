describe('US026 dd to Address Wihth Current Mail', () => {
    it('US023LoginWithMethod', function() {
    // npm run test:US026
        const mail = 'lazKorsan1768440524756@gmail.com';
        const password = 'Query.2026';
    
        cy.loginMethodQueryCart(mail, password);
    cy.get('#app button:nth-child(5)').click();
    cy.get('#mobile-profile-canvas a[href="#/account/address"] span').click();
    cy.get('#app span.font-semibold').click();
    cy.get('#address div:nth-child(1) > input.w-full').click();
    cy.get('#address div:nth-child(1) > input.w-full').type('lazKorsan');
    cy.get('#address input[type="email"]').click();
    cy.get('#address input[type="email"]').type('lazKorsan2026@gmail.com');
    cy.get('#phone').click();
    cy.get('#phone').type('5325403232');
    cy.get('#vs746-combobox input').click();
    cy.get('#vs746-combobox input').click();
    cy.get('#vs746-option-59').click();
    cy.get('#vs746-combobox input').type('DE');
    cy.get('#vs749-combobox input').click();
    cy.get('#vs749-option-2 span').click();
    cy.get('#vs752-combobox input').click();
    cy.get('#vs752-option-3 span').click();
    cy.get('#address div:nth-child(7) input.w-full').click();
    cy.get('#address div:nth-child(7) input.w-full').type('12345');
    cy.get('#address div:nth-child(8) input.w-full').click();
    cy.get('#address div:nth-child(8) input.w-full').type('321');
    cy.get('#address button.bg-primary').click();
    cy.get('#app nav.fixed a[href="#/home"]').click();
    });
});
