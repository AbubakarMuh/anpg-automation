// ***********************************************************
// This example support/e2e.ts is processed and
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
import './commonCommands/common.actions'

// Alternatively you can use CommonJS syntax:
// require('./commands')

declare global {
    namespace Cypress {
        interface Chainable {
            clickElement(element: string): Chainable<void>
            typeAText(field, text: string): Chainable<void>
            HandleSuccessAlert(stub:void, message:string): Chainable<void>
            selectvalue(element, value: string): Chainable<void>
        }
    }
}

Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore errors related to owlCarousel
    if (err.message.includes('owlCarousel')) {
      return false; // Prevent Cypress from failing the test
    }
  });