it( // satır 1 satır 26





'clickMethod',function()  // kurucu (function)


{
    
    
    
    
    // yapılacak test içeriği - test gövdesi (callback)
    
    cy.visit('https://demoqa.com/')
    
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    
    
    
    cy.get('#app div:nth-child(2) > div:nth-child(1) > div.card-body > h5').click();
    cy.get('#app div:nth-child(2) > span.group-header > div.header-wrapper').click();
    cy.get('#app div:nth-child(2) > span.group-header > div.header-wrapper').click();
    cy.get('#app div:nth-child(3) div.header-text').click();
    cy.get('div.show #item-1').click();
}







)     // satır 1 satır 26