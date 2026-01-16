it('ScrollMethod',function(){
    
    cy.log("Scroll to eelement view testi başlıyor")
    
        cy.visit('https://querycart.com/#/home')
    
        // npm run test:US019
    
    
    
    
    cy.get('#app nav.fixed a[href="#/login"]').click();
    cy.get('#app div.gap-1\\.5 a.capitalize.font-bold').click();
    cy.get('#formName').click();
    cy.get('#formName').type('lazKorsan');

    const randomEmail = `lazKorsan${Date.now()}@gmail.com`;
    globalEmail = randomEmail;

    cy.log("Oluşturulan Mail: " + randomEmail);
    cy.get('#formEmail').click();
    cy.get('#formEmail').type(randomEmail);
    cy.get('#formPassword').click();
    cy.get('#formPassword').type('Query.2026');
    cy.get('#app button.w-full').click();

    after(() => {
            // Test bittiğinde terminale (Consola) yazdırır
            if (globalEmail) {
                cy.task('logToTerminal', `\n--- TEST SONUCU ---\nOluşturulan Email: ${globalEmail}\n-------------------\n`);
            }
})







