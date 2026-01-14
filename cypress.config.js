const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    specPattern: "src/test/java/cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // "task" olayını burada kaydediyoruz
      on('task', {
        log(message) {
          console.log(message); // Bu mesaj terminal ekranına yazılır
          return null; // Cypress görevlerinin her zaman bir değer (veya null) dönmesi gerekir
        },
      });
    },
  },
});