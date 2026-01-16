describe('temel baseurl', () => {
    it('cy.visit komutu', () => {
        cy.visit('https://demoqa.com/automation-practice-form');

       // cy.get('div.show #item-0').click();
        cy.get('#firstName').click();
        cy.get('#firstName').type('lazKorsan');
        cy.get('#lastName').click();
        cy.get('#lastName').type('korsan');
        cy.get('#userEmail').click();
        cy.get('#userEmail').type('lazkorsan3291@gmail.com');
        cy.get('#genterWrapper label[for="gender-radio-1"]').click();
        cy.get('#gender-radio-1').check();
        cy.get('#userNumber').click();
        cy.get('#userNumber').type('5365363434');
        cy.get('#dateOfBirthInput').click();
        cy.get('#dateOfBirth select.react-datepicker__year-select').select('1970');
        cy.get('#dateOfBirth div.react-datepicker__day--011').click();
        cy.get('#uploadPicture').click();
        cy.get('#currentAddress').click();
        cy.get('#currentAddress').type('türküye');
        cy.get('#app div.container > div:nth-child(1) > div:nth-child(3)').click();
        cy.get('#state div.css-1wa3eu0-placeholder').click();
        cy.get('#react-select-3-option-1').click();
        cy.get('#city div.css-1wa3eu0-placeholder').click();
        cy.get('#react-select-4-option-1').click();
        cy.get('#submit').click();
        cy.get('#adplus-anchor').click();
    });
});
