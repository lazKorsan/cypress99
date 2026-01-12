describe('İlk Test', () => {
it('Cypress ile ilk test', () => {
cy.visit('https://example.cypress.io');




cy.get('ul.home-list > li:nth-child(1) > a:nth-child(1)').click();
cy.get('#querying > div:nth-child(6)').click();
cy.get('#querying div:nth-child(4) > pre > code.javascript > span:nth-child(2)').should('have.text', '\'input:first\'');

cy.get('#get a').click();

})
})