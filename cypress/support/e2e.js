// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// XPath desteği için gerekli import
require('cypress-xpath')

// Cypress plugin-tab eklentisini import ediyoruz (eğer yüklü değilse package.json'a eklenmeli)
// Ancak şu anlık doğrudan require ile çağırmayı deneyelim, eğer hata verirse kullanıcıya bildireceğiz.
// require('cypress-plugin-tab')

// Uygulama kaynaklı (uncaught exception) hataların testleri durdurmasını engelle
Cypress.on('uncaught:exception', (err, runnable) => {
  // Hata mesajlarını konsolda görmeye devam etmek ama testi durdurmamak için false döneriz
  return false;
});