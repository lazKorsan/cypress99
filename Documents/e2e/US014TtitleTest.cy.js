describe('LoyalFriendCare Test Suite', () => {

    it('clickMethod - title dogrulama', function() {
        
        // Test içeriği - test gövdesi (callback)
        cy.visit('https://qa.loyalfriendcare.com/en')

        cy.url().should('eq', 'https://qa.loyalfriendcare.com/en')

        cy.log('Sayfa URl degerinini beklenen sonuca eşit olduğu doğrulandı')


        // Title doğrulama işlemleri
        cy.title().should('eq', 'LoyalFriendCare')
        cy.log('Sayfa title in degerinini beklenen sonuca eşit olduğu doğrulandı')

        cy.title().should('include', 'LoyalFriendCare')

        cy.log('Title degerinin LoyalfirendCare içerdiği doğrulandı')
        cy.title().should('contain', 'LoyalFriendCare')

        cy.log('Title degerinin LoyalfirendCare içerdiği doğrulandı')

    });

});
