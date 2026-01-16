describe('İlk Test', () => {
    it('Cypress ile ilk test', () => {
        cy.visit('https://qa.instulearn.com/');
        
        
        
        
        
        
        cy.get('#app a[href="/register"]').click();
        cy.get('#app label[for="role_user"]').click();
        cy.get('#role_user').check();
        cy.get('[name="email"]').click();
        cy.get('[name="email"]').type('lazKorsan2031@gmail.com');
        cy.get('#app [name="full_name"]').type('lazKorsan');
        cy.get('[name="password"]').type('Instu.2026');
        cy.get('[name="email"]').click();
        cy.get('[name="email"]').clear();
        cy.get('[name="email"]').type('lazKoırsan2031@gmail.com');
        cy.get('[name="password_confirmation"]').click();
        cy.get('[name="password_confirmation"]').type('Instu.2026');
        cy.get('#app label.custom-control-label').click();
        cy.get('[name="term"]').check();
        cy.get('#app button.btn-block').click();
        
        
        
        
        
        
    })
});
