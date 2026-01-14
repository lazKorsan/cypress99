it(
'clickMethod',function()
{
    cy.visit('https://the-internet.herokuapp.com/')

    cy.get('#content a[href="/checkboxes"]').should('have.text', 'Checkboxes');
    cy.get('#content a[href="/checkboxes"]').click();
    cy.get('#checkboxes').should('have.text', '\n     checkbox 1\n     checkbox 2\n  ');
    cy.get('#checkboxes input[checked=""]').uncheck();
    cy.get('#checkboxes input:nth-child(1)').check();
    cy.get('#checkboxes').should('have.text', '\n     checkbox 1\n     checkbox 2\n  ');
    
    
    
}

)