it('US031', function() {
  cy.visit('https://automationexercise.com/');
  cy.get('#header a[href="/login"]').click();
  cy.get('[data-qa="signup-name"]').click();

  const userName = 'lazKorsan';
  cy.get('[data-qa="signup-name"]').type(userName);

  // signUpSİGNMAİL (signup-email) elementinin görünürlüğünü ve tıklanabilirliğini kontrol et
  cy.get('[data-qa="signup-email"]')
      .should('be.visible')
      .and('be.enabled')
      .click();

  const randomEmail = `lazKorsan${Date.now()}@gmail.com`;
  cy.get('[data-qa="signup-email"]').type(randomEmail);
  cy.get('[data-qa="signup-button"]').click();
  cy.get('#id_gender1').check();
  cy.get('[data-qa="password"]').click();
  cy.get('[data-qa="password"]').type('Auto.120120260632');
  cy.get('[data-qa="days"]').select('5');
  cy.get('[data-qa="months"]').select('4');
  cy.get('[data-qa="years"]').select('1979');
  cy.get('[name="newsletter"]').check();
  cy.get('[name="optin"]').check();
  cy.get('[data-qa="first_name"]').click();
  cy.get('[data-qa="first_name"]').type('lazkoRSAN');
  cy.get('[data-qa="last_name"]').click();
  cy.get('[data-qa="last_name"]').type('Korsan');
  cy.get('[data-qa="company"]').click();
  cy.get('[data-qa="company"]').type('lazKorsanLtd');
  cy.get('[data-qa="address"]').click();
  cy.get('[data-qa="address"]').type('menekse sokakn');
  cy.get('[data-qa="address2"]').click();
  cy.get('[data-qa="address2"]').type('cd 101');
  cy.get('[data-qa="country"]').select('United States');
  cy.get('[data-qa="state"]').click();
  cy.get('[data-qa="state"]').type('virgina');
  cy.get('[data-qa="city"]').click();
  cy.get('[data-qa="city"]').type('oklahama');
  cy.get('[data-qa="zipcode"]').click();
  cy.get('[data-qa="zipcode"]').type('12345');
  cy.get('[data-qa="mobile_number"]').click();
  cy.get('[data-qa="mobile_number"]').type('506506323232');
  cy.get('[data-qa="create-account"]').click();
  cy.get('[data-qa="continue-button"]').click();

  // Kullanıcı adını doğrula
  // "Logged in as lazKorsan" metnini kontrol ediyoruz
  cy.get('#header b').should('contain.text', userName);
  // Alternatif olarak tam metin kontrolü:
  // cy.get('#header').should('contain.text', 'Logged in as ' + userName);

  cy.get('#header b').click();
  cy.get('#header a[href="/logout"]').click();
});