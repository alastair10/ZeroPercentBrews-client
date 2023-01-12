describe('Navigates to the register page directly', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/register');
  });

  it("loads Register page content", () => {
    cy.get('.hero__message_1').should('contain', 'Join the lager');
    cy.get('.hero__message_2').should('contain', 'than life community');
    cy.get('form.Access_log_reg_form__SHigd').should('contain', 'Username');
    cy.get('form.Access_log_reg_form__SHigd').should('contain', 'Email');
    cy.get('form.Access_log_reg_form__SHigd').should('contain', 'Password');
    cy.get('button.ButtonPrimary_button__MIZnn').should('contain', 'Sign Up');
  });


});