describe("Log In and Sign up buttons send user to relevant pages", () => {
  beforeEach(() => {
    // change link to localhost:3000 once functional
    cy.visit("localhost:3000/");
  });
 
  it("takes user to login page", () => {
    cy.get(".ButtonTertiary_button__5kBiD").contains("Log In").click();

    cy.url().should("include", "/login");
  })

  it("takes user to sign up page", () => {
    cy.get(".ButtonSecondary_button__wgU6f").contains("Sign Up").click();

    cy.url().should("include", "/register");
  })

  it("takes user to home page", () => {
    cy.get(".nav__link--logo").click();
    cy.url("localhost:3000/");
    })

  it("more info button takes user to  beer listing page ", () => {
    cy.get(".ButtonPrimary_button__MIZnn").contains("More Info").click();
    
    cy.url().should("include", `${/beerInfo._id}`)
  }
  )

})
