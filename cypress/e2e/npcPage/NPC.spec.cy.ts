import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I launch the web app and click on privacy information requirement$/, () => {
  cy.clearAllCookies()
  cy.visit('/', { failOnStatusCode: false });

  cy.fixture('NPCObject.json').then((sel) => {
    cy.contains(sel.pirField).click({force: true})
  });

});

When(/^I click on NPC PIMS DATA PROTECTION POLICY$/, () => {
  cy.fixture('NPCObject.json').then((sel) => {
    cy.get(sel.pimsField).click({ force: true })
  });
});

When(/^I scroll to the buttom of the page and click on I have read the NPC PIMS DATA PROTECTION POLICY$/, () => {
  cy.fixture('NPCObject.json').then((sel) => {
    cy.get(sel.readPIMS).click({ force: true })
    .wait(1000)
  })
});
When(/^I click on back button$/, () => {
  cy.fixture('NPCObject.json').then((sel) => {
    cy.get(sel.backBtn).click({ force: true })
  })
});

When(/^I navigate to nationalpopulation website and i scroll to the base of the screen$/, () => {
  cy.fixture('NPCObject.json').then((sel) => {
    cy.contains(sel.pirField).click({force: true})
    cy.get(sel.npcWebsiteLink).click({ force: true })
  })
});