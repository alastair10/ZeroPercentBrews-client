describe("Account page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
    cy.get("input[name=email]").type("alastairtest@example.com");
    cy.get("input[name=password]").type("alastairtest");
    cy.get(".ButtonPrimary_button__MIZnn").contains("Submit").click();
    cy.get(".ButtonSecondary_button__wgU6f").contains("Account").click();
  });

  it("displays hero", () => {
    cy.get(".hero__message_1").should("contain", "alastairtest's Account");
    cy.get(".hero__message_2").should("contain", "& Saved Beers");
  });

  it("displays account information headers and button", () => {
    cy.get("h2").should("contain", "Account information:");
    cy.get(".Account_user_data__Bd0sl").should("contain", "Username: ");
    cy.contains("div", "alastairtest");
    cy.contains("div", "alastairtest@example.com");
    cy.get(".ButtonPrimary_button__MIZnn").contains("Submit")
    cy.get("h2").should("contain", "Your saved beers:");
  });

  it("displays password form and password confirmation message", () => {
    cy.get("input[type=password]").type("alastairtest");
    cy.get(".ButtonPrimary_button__MIZnn").contains("Submit").click();
    cy.get(".Account_confirmation_message__LDKaJ").should("contain", "Password Updated")
  });

  it("displays a users saved beer", () => {
    cy.get(".BeerCard_info__container__fDV6K").should("contain", "Guinness Alcohol Free");
  });
});

