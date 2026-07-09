describe('Product sort',() => {

   beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })
    
  it('Should sort products by price low to high', () => {
    cy.get('[data-test="product-sort-container"]').select('lohi')
    cy.get('[data-test="inventory-item-price"]').first().should('contain', '$7.99')
  })

  it('Should sort products by price high to low', () => {
    cy.get('[data-test="product-sort-container"]').select('hilo')
    cy.get('[data-test="inventory-item-price"]').first().should('contain', '$49.99')
  })

  it('Should sort products by name A to Z', () => {
    cy.get('[data-test="product-sort-container"]').select('az')
    cy.get('[data-test="inventory-item-name"]').first().should('contain', 'Sauce Labs Backpack')
  })

  it('Should show all products on inventory page', () => {
    cy.get('[data-test="inventory-item"]').should('have.length', 6)
  })
})