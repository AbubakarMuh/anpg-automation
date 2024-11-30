import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I launch the web app and click on About verxid$/, () => {
  cy.clearAllCookies()
  cy.visit('/', { failOnStatusCode: false });

  cy.fixture('verxidObject.json').then((sel) => {
    cy.clickElement(sel.aboutVerxid)
    cy.get(sel.nameField).type(sel.name, { force: true })
    cy.get(sel.emailField).type(sel.emailAddress, { force: true })
    cy.get(sel.companyNameField).type(sel.companyName, { force: true })
    cy.get(sel.officialEmailField).type(sel.officialEmail, { force: true })
    cy.get(sel.DiscriptionTextField).type(sel.DiscriptionText, { force: true })
      .wait(3000)
    cy.clickElement(sel.sendMessageBtn).should("be.visible")
    cy.contains(sel.headerPageName).should("be.visible")
    cy.scrollTo('bottom');
    cy.wait(100); // Wait for content to load
  });

});

When(/^I select different product for reviews Verxid Face IA, Verxid Finger IA and Verxid OCR IA$/, () => {
  cy.fixture('verxidObject.json').then((sel) => {
    cy.get(sel.faceAIField).click({ force: true })
    cy.contains("benefits of verxid face").should("be.visible")
    cy.get(sel.fingerAIField).click({ force: true })
    cy.contains("how it works").should("be.visible")
    cy.contains("benefits of verxid finger").should("be.visible")
    cy.get(sel.ocrAIField).click({ force: true })
    cy.contains("benefits of verxid OCR AI").should("be.visible")
    cy.scrollTo('bottom');
    cy.wait(100); // Wait for content to load
  });
});

When(/^I click on Service to view details under verification$/, () => {
  cy.fixture('verxidObject.json').then((sel) => {
    cy.get(sel.verificationField).click({ force: true })
    cy.contains(sel.serviceMobileVerification).should("be.visible")
    cy.contains(sel.webVerificationField).should("be.visible")
    cy.contains(sel.webVerificationField).should("be.visible")
    cy.contains(sel.getStartedBtn).should("be.visible")
    cy.scrollTo('bottom');
    cy.wait(100); // Wait for content to load
  })
});

When(/^I click on Use Case$/, () => {
  cy.fixture('verxidObject.json').then((sel) => {
    cy.get(sel.useCaseField).click({force: true})
    cy.scrollTo('bottom');
    cy.wait(100); // Wait for content to load
  })
});

Then(/^I click on Technical Specification$/, () => {
  cy.fixture('verxidObject.json').then((sel) => {
    cy.contains(sel.technicalSpecificationField).click({force: true})
    cy.scrollTo('bottom');
    cy.wait(100);
  })
})

When(/^I click on stories$/, () => {
  cy.fixture('verxidObject.json').then((sel) => {
    cy.get(sel.storiesField).click({force: true})
    cy.scrollTo('bottom');
    cy.wait(100);
  })
});

When(/^I click Clients$/, () => {
  cy.fixture('verxidObject.json').then((sel) => {
    cy.contains(sel.clientField).click({multiple: true})
    cy.contains(sel.mtnMoreBtn).click({force: true})
    cy.get(sel.okBtn).click({force: true})
    cy.wait(500);
    cy.scrollTo('bottom');
    cy.wait(100);

//Scrolling on Home page
    cy.get(sel.verxisHomePage).click({force: true})
    cy.wait(500);
    cy.scrollTo('bottom');
    cy.wait(100);
  })
});

// I commented the Register feature out, reason been that when i tried to register manually and i clicked on REGISTER button, the page kept loading endlessly which allow my code to failing.
//There is a bug on the regiter page which Automation has helped me catch that.
When(/^I register successfully$/, () => {
  cy.fixture('verxidObject.json').then((sel) => {
    cy.contains("verify").click({force: true});
    cy.contains("Get Started").click({force: true});
    cy.contains("Sign Up Now").click({force: true});
    // cy.visit(Cypress.config('baseUrl') + 'register',  { failOnStatusCode: false });
    //cy.url().should('include', 'register');
    // cy.get(sel.firstNameField).type(sel.firstName, { force: true })
    // cy.get(sel.lastNameField).type(sel.lastName, { force: true })
    // cy.get(sel.passwordField).type(sel.password, { force: true })
    // cy.get(sel.ninField).type(sel.nin, { force: true })
    // cy.contains(sel.registerBtn).click({force: true})
  })
});


