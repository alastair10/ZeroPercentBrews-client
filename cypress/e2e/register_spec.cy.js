describe('Navigates to the register page directly', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/register');
  });

  xit("loads Register page content", () => {
    cy.get('.hero__message_1').should('contain', 'Join the lager');
    cy.get('.hero__message_2').should('contain', 'than life community');
    cy.get('form.Access_log_reg_form__SHigd').should('contain', 'Username');
    cy.get('form.Access_log_reg_form__SHigd').should('contain', 'Email');
    cy.get('form.Access_log_reg_form__SHigd').should('contain', 'Password');
    cy.get('button.ButtonPrimary_button__MIZnn').should('contain', 'Sign Up');
  });

 xit("shows a warning if empty form submission attempted", () => {
    cy.get('button.ButtonPrimary_button__MIZnn').contains("Sign Up").click();
    cy.get('.Access_error_message__qRlAo').should('contain', 'All fields are required.');
  });

  xit("shows a warning if a partial submission is attempted", () => {
    cy.get('input[name="username"]').type("testUser");
    cy.get('input[name="password"]').type("12345");
    cy.get('button.ButtonPrimary_button__MIZnn').contains("Sign Up").click();
    cy.get('.Access_error_message__qRlAo').should('contain', 'All fields are required.');
  });

  xit("shows a warning if an invalid email is attempted", () => {
    cy.get('input[name="username"]').type("testUser");
    cy.get('input[name="password"]').type("12345");
    cy.get('input[name="email"]').type("notanemail.com");
    cy.get('button.ButtonPrimary_button__MIZnn').contains("Sign Up").click();
    cy.get('.Access_error_message__qRlAo').should('contain', 'Invalid email address.');
  });

  it("can navigate back to the homepage from a beer listing", () => {
    cy.get('.nav__home').click()
    cy.get('.hero__message_1').should('contain', 'Find and review,');
  });


});