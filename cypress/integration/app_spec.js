describe("Input form", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("accepts input", () => {
    const typedText = "Marco";

    cy.get("input")
      .type(typedText)
      .should("have.value", typedText);
  });

  it("should show error message on invalid input", () => {
    cy.get("input").type("mar+co");
    cy.get("form").submit();
    cy.get("div").should("contain", "Please enter a valid input");
  });
  it("submit with proper input", () => {
    const typedText = "Buy Milk";

    cy.get("form").submit();
  });
});
