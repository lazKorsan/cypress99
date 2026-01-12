cy.visit('https://qa.loyalfriendcare.com/en')

cy.get('#top_menu a[href="https://qa.loyalfriendcare.com/en/login"]').click();
cy.get('[name="email"]').click();
cy.get('[name="email"]').type('lazKorsan1767391364330@gmail.com');
cy.get('[name="password"]').click();
cy.get('[name="password"]').type('Loyal!1767391364331');
cy.get('label[for="checkbox1"]').click();
cy.get('[name="remember"]').check();
cy.get('button.btn').click();

})