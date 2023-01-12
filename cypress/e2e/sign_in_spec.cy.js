describe("Signing in", () => {
  it("can navigate to the login page via the button on the hompage", () => {
    cy.visit("http://localhost:3000/login");
    cy.get(".ButtonTertiary_button__5kBiD").contains('Log In');
    
    cy.url().should("include", "/login");
  });

  it("displays an error with invalid password", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("input[name=email]").type("alastairtest@example.com");
    cy.get("input[name=password]").type("alastairtest1");
    cy.get(".ButtonPrimary_button__MIZnn").contains("Submit").click();

    cy.get(".Access_error_message__qRlAo").should("contain", "Invalid login credentials");
  });

  it("displays an error with invalid password", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("input[name=email]").type("alastairtest1@example.com");
    cy.get("input[name=password]").type("alastairtest");
    cy.get(".ButtonPrimary_button__MIZnn").contains("Submit").click();

    cy.get(".Access_error_message__qRlAo").should("contain", "Invalid login credentials");
  });
});
