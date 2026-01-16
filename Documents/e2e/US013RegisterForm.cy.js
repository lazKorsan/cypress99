it('clickMethod', function() {

    // Uygulamadan kaynaklanan "scrollbar is not a function" hatasını yoksay
    cy.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('scrollbar is not a function')) {
            return false
        }
        // Diğer hatalar testi başarısız kılsın
        return true
    })

    cy.visit('https://qa.loyalfriendcare.com/en/register')

    // Random sayı üretimi
    const random = Math.floor(Math.random() * 100000)
    const email = `lazkorsan+${random}+@gmail.com`

    // User Name
    cy.get('#name').type('lazKorsan')

    // E-Mail Address
    cy.get('#email').type(email)

    // Password
    cy.get('#password').type('Loyal.2026!')

    // Confirm Password
    cy.get('#password-confirm').type('Loyal.2026!')

    // Sign Up butonuna tıkla
    cy.get('button[type="submit"]').click()


    cy.get('#top_menu li:nth-child(1) a.btn_add').should('have.text', ' lazKorsan');
    cy.get('#top_menu a[href="https://qa.loyalfriendcare.com/en/logout"]').should('have.text', ' Sign Out');
    cy.get('#top_menu a[href="https://qa.loyalfriendcare.com/en/logout"]').click();
    cy.get('#top_menu a[href="https://qa.loyalfriendcare.com/en/login"]').should('have.text', ' Sign In');

})