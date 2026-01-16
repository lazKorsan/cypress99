describe('LoyalFriendCare Register Page', () => {
  beforeEach(() => {
    cy.visit('https://qa.loyalfriendcare.com/en/register')
  })

  it('should load register page', () => {
    cy.contains('USER NAME').should('be.visible')
    cy.contains('Sign Up').should('be.visible')
  })

  it('should fill and submit registration form', () => {
    // 1. NAME (ID ile - EN GÜVENLİ)
    cy.get('#name')
      .should('be.visible')
      .type('Test User')
      .should('have.value', 'Test User')

    // 2. EMAIL (ID ile)
    cy.get('#email')
      .type('test@example.com')
      .should('have.value', 'test@example.com')

    // 3. PASSWORD (ID ile)
    cy.get('#password')
      .type('Password123!')
      .should('have.value', 'Password123!')

    // 4. CONFIRM PASSWORD (ID ile)
    cy.get('#password-confirm')
      .type('Password123!')
      .should('have.value', 'Password123!')

    // 5. SUBMIT BUTTON (Text ile - en anlamlısı)
    cy.contains('Sign Up')
      .should('be.visible')
      .click()

    // 6. BAŞARILI KAYIT KONTROLÜ
    // (Bu kısmı kayıt sonrası yönlendirmeye göre düzenle)
    // cy.url().should('include', '/dashboard')
    // cy.contains('Registration successful').should('be.visible')
  })
})