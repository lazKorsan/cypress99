describe('Automation Exercise Sayfasına Giriş Testi', () => {
  it('Ana sayfayı başarıyla yüklemelidir', () => {
    // Web sitesine giriş yapar
    cy.visit('https://automationexercise.com/');

                                                 // Sayfanın doğru yüklendiğini ana başlıktan veya URL'den doğrular
    cy.url().should('include', 'automationexercise');
    cy.get('h1').should('be.visible'); // Varsa ana başlığı kontrol eder
    

    });
    });

it('US002', function() {
  cy.visit('https://automationexercise.com/');
  cy.get('#header a[href="/login"]').click();
  cy.get('[data-qa="signup-name"]').click();
  cy.get('[data-qa="signup-name"]').type('lazKorsan');
  cy.get('[data-qa="signup-email"]').click();
  cy.get('[data-qa="signup-email"]').type('lazKorsan120120260628@gmail.com');
  cy.get('[data-qa="signup-button"]').click();
  cy.get('#id_gender1').check();
  cy.get('[data-qa="password"]').click();
  cy.get('[data-qa="password"]').type('Auto.120120260628');
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
  cy.get('#header b').click();
  cy.get('#header a[href="/logout"]').click();
});


