it('US020RegisterTest',function(){
    
    cy.log("Scroll to eelement view testi başlıyor")
    
        cy.visit('https://querycart.com/#/home')
        // npm run test:US020
        const mail = 'lazKorsan1768440524756@gmail.com';
        const password = 'Query.2026';
    
    cy.get('#app i.lab-line-user').click();
    cy.get('#formEmail').click();
    cy.get('#formEmail').type(mail);
    cy.get('#formPassword').click();
    cy.get('#formPassword').type(password);
    cy.get('#formRemember').check();
    cy.get('#app button.w-full').click();

})







