// cypress/e2e/register.cy.js
describe('Register Page', () => {
  const RegisterPage = {
    // ELEMENT LOCATORS (Analizimizden gelen)
    nameInput: '#name',
    emailInput: '#email',
    passwordInput: '#password',
    confirmPasswordInput: '#password-confirm',
    signUpButton: 'button:contains("Sign Up")',

    // ACTIONS
    visit() {
      cy.visit('https://qa.loyalfriendcare.com/en/register')
    },

    fillForm(user) {
      cy.get(this.nameInput).type(user.name)
      cy.get(this.emailInput).type(user.email)
      cy.get(this.passwordInput).type(user.password)
      cy.get(this.confirmPasswordInput).type(user.password)
    },

    submit() {
      cy.get(this.signUpButton).click()
    }
  }

  it('registers new user', () => {
    RegisterPage.visit()

    RegisterPage.fillForm({
      name: 'Ahmet Yılmaz',
      email: 'ahmet@test.com',
      password: 'TestPass123!'
    })

    RegisterPage.submit()

    // Assertions
    cy.url().should('not.include', '/register')
  })
})

// The following error originated from your application code, not from Cypress.

   > $(...).scrollbar is not a function