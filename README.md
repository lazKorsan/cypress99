"scripts": {
"cypress:open": "cypress open",
"cypress:run": "cypress run",
"test:US016": "cypress run --spec \"src/test/java/cypress/integration/cypress/e2e/US016URLDogrulama.cy.js\" --browser chrome --headed"
}


npm run test:US016

###
cypress da xpath kullanımı 
C:\Users\user\IdeaProjects\cypress99\cypress\support\e2e.js

npm install -D cypress-xpath


cypress-file-upload
◦
Ne işe yarar: Dosya yükleme (upload) işlemlerini çok basitleştirir. Normalde zor olan "Dosya Seç" butonlarına dosya göndermeyi tek satırda yapar.
◦
Komut: npm install -D cypress-file-upload
◦
Kullanım: cy.get('input[type="file"]').attachFile('resim.png');


cypress-real-events
◦
Ne işe yarar: Cypress'in standart .click() veya .type() komutları JavaScript simülasyonudur. Bu eklenti ise tarayıcıda gerçek (native) fare ve klavye olaylarını tetikler. Özellikle "hover" (üzerine gelme) işlemleri için hayat kurtarıcıdır.
◦
Komut: npm install -D cypress-real-events
◦
Kullanım: cy.get('.menu').realHover();


cypress-iframe
◦
Ne işe yarar: Sayfa içindeki iFrame'lerle (gömülü pencereler) çalışmayı kolaylaştırır. Cypress varsayılan olarak iFrame içini görmekte zorlanır.
◦
Komut: npm install -D cypress-iframe
◦
Kullanım: cy.iframe('#my-frame').find('.btn').click();



C:\Users\user\IdeaProjects\cypress99\cypress\support\e2e.js
// Uygulama kaynaklı (uncaught exception) hataların testleri durdurmasını engelle
Cypress.on('uncaught:exception', (err, runnable) => {
// Hata mesajlarını konsolda görmeye devam etmek ama testi durdurmamak için false döneriz
return false;
});


tarayıcıda guvenlik uyarısı almamak için
C:\Users\user\IdeaProjects\cypress99\src\test\java\cypress\integration\cypress.config.js

const { defineConfig } = require("cypress");

module.exports = defineConfig({
chromeWebSecurity: false, // Güvenlik uyarılarını ve SSL hatalarını engellemek için
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

##############################