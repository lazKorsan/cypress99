it(
'clickMethod',function()
                           {
    // yapılacak test içeriği - test gövdesi (callback)

    cy.visit('https://google.com')


  cy.get('[name="q"]').click();

    cy.get('[name="q"]').type('hello world{enter}');





                           }



)