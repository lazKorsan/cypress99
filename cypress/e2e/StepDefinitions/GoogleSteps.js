import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Kullanıcı Google anasayfasına gider", () => {
  cy.visit("https://www.google.com");
});

When("Arama kutusuna {string} yazar ve enter tuşuna basar", (keyword) => {
  cy.get('textarea[name="q"], input[name="q"]').type(`${keyword}{enter}`);
});

Then("Başlığın {string} içerdiğini doğrular", (keyword) => {
  cy.title().should("include", keyword);
});


