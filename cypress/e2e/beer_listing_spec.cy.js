describe('Selects beer from home page', () => {
  beforeEach(() => {
    // change link to localhost:3000 once functional
    cy.visit('https://www.zeropercentbrews.com/')
  })
  
  it("clicks through to an individual beer listing", () => {
    cy.get('.BeerCard_beer__title__poRa4')
    cy.get('.ButtonPrimary_button__MIZnn').contains("More Info").click()

    cy.url().should('include', '/beer/');
    cy.get('.beer__listing__container')
    cy.get('.attribute').should('contain', 'Brand:');
    cy.get('.attribute').should('contain', 'From:');
    cy.get('.attribute').should('contain', 'ABV:');
    cy.get('.attribute').should('contain', 'Description:');
    cy.get('.attribute').should('contain', 'Ingredients:');
    cy.get('.attribute').should('contain', 'Volume:');
    cy.get('.review__count').should('contain', 'Z%B Team Rating:');
    cy.get('.social-proof').should('not.contain', 'Submit');
    cy.get('.social-proof').should('contain', 'Comments:');
  })
})
