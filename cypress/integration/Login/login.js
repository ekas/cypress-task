import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const url = "https://gridsingularity.com/singularity-map";
Given("I open Landing page", () => {
  cy.visit(url);
});

Then("I close Welcome Popup", () => {
  cy.get(".BaseClose_button__3umz4").click();
});

When("I click on Login menu item", () => {
  cy.get(".Header_loginLink__1T2jH").click();
});

Then("I see Login Popup to enter username and password", () => {
  cy.get(
    ".FormLogin_inputEmail__1ILhN > .BaseInput_container__3_QkS > .BaseInput_innerContainer__1f-mm > .BaseInput_input__27Ycb"
  ).type("ekaspreet93.singh@gmail.com");
  cy.get(
    ".FormLogin_inputPassword__2btht > .BaseInput_container__3_QkS > .BaseInput_innerContainer__1f-mm > .BaseInput_input__27Ycb"
  ).type("mb123456");
});

When("I click on Login button", () => {
  cy.get(".FormLogin_buttonLogin__8t60R").click();
});

Then("I am logged into the system", () => {
  cy.get(".UserAvatar_profileBtn__SUVMr").click();
  cy.get(".UserAvatar_profileBtn__SUVMr").should("contain", "E");
});
