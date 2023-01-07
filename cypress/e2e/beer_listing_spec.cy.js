describe('Selects beer from home page', () => {
  beforeEach(() => {
    cy.visit('https://www.zeropercentbrews.com/')
  })
  
  it("clicks through to an individual beer listing", () => {
    cy.get('.BeerCard_beer__title__poRa4')
    cy.get('.ButtonPrimary_button__MIZnn').contains("More Info").click()

    cy.url().should('include', '/beer/');
    cy.get('.beer__listing__container')
    cy.get('.attribute').should('contain', 'Brand:');
    cy.get('.attribute').should('contain', 'ABV:');
    cy.get('.attribute').should('contain', 'Type:');
    cy.get('.attribute').should('contain', 'Ingredients:');
    cy.get('.attribute').should('contain', 'Volume:');
  })
})
