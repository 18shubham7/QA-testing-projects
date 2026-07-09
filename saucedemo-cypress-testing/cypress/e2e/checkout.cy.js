describe('Checkout Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
  })

  it('Should complete checkout successfully', () => {
    cy.get('[data-test="firstName"]').type('Shubham')
    cy.get('[data-test="lastName"]').type('Pawar')
    cy.get('[data-test="postalCode"]').type('400001')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="back-to-products"]').should('be.visible')
  })

  it('Should show error for empty checkout form', () => {
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('Should show error when first name is empty', () => {
    cy.get('[data-test="lastName"]').type('Pawar')
    cy.get('[data-test="postalCode"]').type('400001')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('Should show order summary before finishing', () => {
    cy.get('[data-test="firstName"]').type('Shubham')
    cy.get('[data-test="lastName"]').type('Pawar')
    cy.get('[data-test="postalCode"]').type('400001')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Backpack')
    cy.get('[data-test="total-label"]').should('be.visible')
  })

  it('Should show thank you message after order', () => {
    cy.get('[data-test="firstName"]').type('Shubham')
    cy.get('[data-test="lastName"]').type('Pawar')
    cy.get('[data-test="postalCode"]').type('400001')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order')
  })

})