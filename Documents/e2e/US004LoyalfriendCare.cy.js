describe('İlk Test', () => {
    it('Cypress ile ilk test', () => {
        cy.visit('https://qa.loyalfriendcare.com/en');

        cy.get('#top_menu a[href="https://qa.loyalfriendcare.com/en/register"]').click();

        // 1. Yöntem: Placeholder üzerinden bulmayı dene
        // Eğer bu da çalışmazsa, sayfadaki ilk input text alanını bulmayı deneyeceğiz.
        cy.get('input[placeholder="Name"]').should('exist').click({force: true}).type('lazKorsan');

        // Alternatif (Eğer yukarıdaki çalışmazsa bunu açıp deneyebilirsin):
        // cy.get('input[type="text"]').first().type('lazKorsan');

        cy.get('[name="email"]').click({force: true});

        const randomEmail = `lazKorsan${Date.now()}@gmail.com`;
        cy.get('[name="email"]').type(randomEmail);

        cy.get('[name="password"]').click({force: true});
        cy.get('[name="password"]').type('Loyal.2026');
        cy.get('[name="password_confirmation"]').click({force: true});
        cy.get('[name="password_confirmation"]').type('Loyal.2026');
        cy.get('button.btn').click();

        cy.get('#top_menu li:nth-child(1) a.btn_add').should('contain.text', 'lazKorsan');
    })
});
