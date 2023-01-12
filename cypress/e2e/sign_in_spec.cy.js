// describe('Signing In', () => {
//   beforeEach(() => {
//     cy.visit('https://www.zeropercentbrews.com/')
//   })
  
//   it("navigates to the account page when logged in", () => {
    
//     cy.get('.hero__span').should('contain', 'Actually')
//   })
  

// })
describe("Signing in", () => {

  // beforeEach(() => {
  //   cy.visit('http://localhost:3000')
  // })

  it("displays an error with invalid password", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('input[name=email]').type("alastairtest@example.com");
    cy.get('input[name=password]').type("alastairtest1");
    cy.get(".ButtonPrimary_button__MIZnn").contains("Submit").click();

    cy.get(".Access_error_message__qRlAo").should('contain', 'Invalid login credentials');
  });

  // it("with missing password, redirects to '/login'", () => {
  //   cy.visit("/login");
  //   cy.get("#email").type("someone@example.com");
  //   cy.get("#submit").click();

  //   cy.url().should("include", "/login");
  // });

  // it("with missing email, redirects to '/login'", () => {
  //   cy.visit("/login");
  //   cy.get("#password").type("password");
  //   cy.get("#submit").click();

  //   cy.url().should("include", "/login");
  // });
});
