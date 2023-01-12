describe("Account page", () => {
  it("displays the account page", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("input[name=email]").type("alastairtest@example.com");
    cy.get("input[name=password]").type("alastairtest");
    cy.get(".ButtonPrimary_button__MIZnn").contains("Submit").click();
    cy.get(".ButtonSecondary_button__wgU6f").contains("Account").click();

    cy.url().should("include", "/account")
  });
});

// shows account button