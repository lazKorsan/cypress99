Cypress.on('uncaught:exception', (err, runnable) => {
  // Uygulama hatalarını yoksayarak testin devam etmesini sağlar
  return false;
});

it('ScrollMethod',function(){

// npm run test:US018

cy.log("Scroll to element view testi başlıyor")

    cy.visit('https://qa.loyalfriendcare.com/en')

    // Element görünür olana kadar scroll yap ve sonra tıkla
    cy.get('#collapse_ft_2 a[href="https://qa.loyalfriendcare.com/Departments/wellness"]')
      .scrollIntoView()
      .should('be.visible')
      .click();

})


// // Buton tıklanabilir olana kadar (default 4sn) bekler ve doğrular
 // cy.get('.btn-submit')
   //  .should('be.visible')
   //  .and('be.enabled')
   //  .click();