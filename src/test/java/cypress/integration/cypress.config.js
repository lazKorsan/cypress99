const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // "task" olayını burada kaydediyoruz
      on('task', {
        log(message) {
          console.log(message); // Bu mesaj VS Code / Terminal ekranına yazılır
          return null; // Cypress görevlerinin her zaman bir değer (veya null) dönmesi gerekir
        },
      });
    },
  },
});