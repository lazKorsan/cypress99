describe('US003 Login Test', () => {
  it('should login successfully', () => {
    cy.visit('https://qa.loyalfriendcare.com/en/login')


    cy.get('[id="email"]').click();
    cy.get('[id="email"]').type('lazKorsan1767391364330@gmail.com')
    cy.get('[name="email"]').type('lazKorsan1767391364330@gmail.com');
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').type('Loyal!1767391364331');
    cy.get('label[for="checkbox1"]').click();
    cy.get('[name="remember"]').check();
    cy.get('button.btn').click();
  })
});

it('USOOO11', function() {
   cy.visit('https://qa.loyalfriendcare.com/en/login')
   
   cy.get('[id="email"]').click();
       cy.get('[id="email"]').type('lazKorsan1767391364330@gmail.com')
       cy.get('[name="email"]').type('lazKorsan1767391364330@gmail.com');
       cy.get('[name="password"]').click();
       cy.get('[name="password"]').type('Loyal!1767391364331');
       cy.get('label[for="checkbox1"]').click();
       cy.get('[name="remember"]').check();
       cy.get('button.btn').click();
});

it('US012', function() {
  cy.get('[id="email"]').click();
      cy.get('[id="email"]').type('lazKorsan1767391364330@gmail.com')
      cy.get('[name="email"]').type('lazKorsan1767391364330@gmail.com');
      cy.get('[name="password"]').click();
      cy.get('[name="password"]').type('Loyal!1767391364331');
      cy.get('label[for="checkbox1"]').click();
      cy.get('[name="remember"]').check();
      cy.get('button.btn').click();
});

it('US013', function() {});

it('US014InstuLearn', function() {
  https://qa.instulearn.com/
});