describe('Login Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('Should login with valid credentials', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
  })

  it('Should show error for invalid credentials', () => {
    cy.get('#user-name').type('wrong_user')
    cy.get('#password').type('wrong_pass')
    cy.get('#login-button').click()
    cy.get('.error-message-container').should('be.visible')
  })

  it('Should show error for empty fields', () => {
    cy.get('#login-button').click()
    cy.get('.error-message-container').should('be.visible')
  })

  it('Should show error when only username is filled', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#login-button').click()
    cy.get('.error-message-container').should('be.visible')
  })

  it('Should show error when only password is filled', () => {
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.error-message-container').should('be.visible')
  })

})