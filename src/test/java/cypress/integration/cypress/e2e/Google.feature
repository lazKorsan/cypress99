Feature: Google Arama Testi

  Scenario: Google'da Cypress araması yapma
    Given Kullanıcı Google anasayfasına gider
    When Arama kutusuna "Cypress" yazar ve enter tuşuna basar
    Then Başlığın "Cypress" içerdiğini doğrular