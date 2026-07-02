/// <reference types="cypress" />

it('google search', function(){
    cy.visit('https://www.google.com/')

    cy.get('[name="q"]').type('automation testing step{enter}')

//   cy.contains('Google Search').click()


cy.contains('Videos',{timeout:7000}).click()
})