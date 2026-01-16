Cypress.on('uncaught:exception', (err, runnable) => {
  // Hata mesajlarını konsolda görmeye devam etmek ama testi durdurmamak için false döneriz
  return false;
});

// npm run test:US017
it('clickMethod',function() {

    cy.visit('https://demoqa.com/')

    cy.url().should('eq', 'https://demoqa.com/').then(() => {

            cy.task('log', '*********Sistem Mesajı: URL başarıyla doğrulandı.*******');

    });

    // cy.get('#button-id').should('be.visible');
    //cy.get('.login-btn').should('be.enabled');

    // TODO: Sayfa açıldığında element aşağıda kaldığı için önce scroll yapıyoruz
    cy.get('.category-cards > :nth-child(2)').scrollIntoView().should('be.visible');
    cy.log('***Forms butonu görünür***')

    // 'be.enabled' kontrolü div elementleri için geçerli değildir, sadece input/button için geçerlidir.
    // Bu yüzden bu satırı kaldırdık veya 'exist' ile değiştirdik.
    cy.get('.category-cards > :nth-child(2)').should('exist');
    cy.log('Forms butonu var')


    cy.get('.category-cards > :nth-child(2)').should('be.visible');
    cy.log('***Practice Form Butonu  görünür***')


    // TODO: Elementin içindeki yazıyı alıp konsola yazdırma
    cy.get('.category-cards > :nth-child(2)').invoke('text').then((text) => {
        cy.task('log', 'Elementin Yazısı: ' + text);
    });

    cy.get('.category-cards > :nth-child(2)').click();

    cy.get('div.show #item-0').click();

    cy.get('#firstName').click();

    cy.get('#firstName').type('lazKorsan');

    cy.get('#lastName').click();

    cy.get('#lastName').type('lazKorsan');

    cy.get('#userEmail').click();


    const randomEmail = `lazKorsan${Date.now()}@gmail.com`;

    cy.get('#userEmail').type(randomEmail);

    cy.get('#genterWrapper label[for="gender-radio-1"]').click();
    cy.get('#gender-radio-1').check({force: true});
    cy.get('#userNumber').click();
    cy.get('#userNumber').type('5435435432');
    cy.get('#dateOfBirthInput').click();
    cy.get('#dateOfBirth select.react-datepicker__year-select').select('1973');
    cy.get('#dateOfBirth div[aria-label="Choose Tuesday, January 9th, 1973"]').click();
    cy.get('#subjectsContainer div.subjects-auto-complete__value-container').click();
    cy.get('#subjectsInput').type('wear');
    cy.get('#hobbiesWrapper label[for="hobbies-checkbox-1"]').click();
    cy.get('#hobbies-checkbox-1').check({force: true});
    cy.get('#uploadPicture').click();
    cy.get('#currentAddress').click();
    cy.get('#currentAddress').type('türkiye ');
    cy.get('#state svg.css-19bqh2r').click();
    cy.get('#react-select-3-option-1').click();
    cy.get('#city div.css-1wa3eu0-placeholder').click();
    cy.get('#react-select-4-option-1').click();
    cy.get('#submit').click();



}







)     // satır 1 satır 26