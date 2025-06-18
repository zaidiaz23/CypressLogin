class LoginPage {
  constructor() {
    this.usernameId = "#username";
    this.passwordId = "#password";
    this.loginButton = ".fa-sign-in";
  }

  visit() {
    cy.visit("https://the-internet.herokuapp.com/login");
  }

  setUsername(username) {
    cy.get(this.usernameId).type(username);
  }

  setPassword(password) {
    cy.get(this.passwordId).type(password);
  }

  submit() {
    cy.get(this.loginButton).click();
  }

  verifyLoginSuccess() {
    cy.contains("You logged into a secure area!").should("be.visible");
    cy.url().should('eq', 'https://the-internet.herokuapp.com/secure');
  }

  verifyInvalidUsername() {
    cy.contains("Your username is invalid!").should("be.visible");
  }

  verifyInvalidPassword() {
    cy.contains("Your password is invalid!").should("be.visible");
  }

  verifyEmptyUsernameAndPassword() {
    cy.contains("Your username is invalid!").should("be.visible");
  }
}

export default new LoginPage();
