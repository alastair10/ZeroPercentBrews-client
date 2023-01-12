describe("Log In and Sign up buttons send user to relevant pages", () => {
  beforeEach(() => {
    // change link to localhost:3000 once functional
    cy.visit("localhost:3000/");
  });
 
  it("takes user to login page", () => {
    cy.get(".ButtonTertiary_button__5kBiD").contains("Log In").click();

    cy.url().should("include", "/login");
  });


});
