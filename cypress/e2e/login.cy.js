import LoginPage from "../pages/LoginPage.js";

describe("Login Feature", () => {
  beforeEach(() => {
    LoginPage.visit();
    cy.fixture("credentials.json").as("credentials");
  });

  context("Valid credentials", () => {
    it("Verify if it is possible to log in with valid credentials", () => {
      cy.get("@credentials").then((data) => {
        LoginPage.setUsername(data.valid.username);
        LoginPage.setPassword(data.valid.password);
        LoginPage.submit();
        LoginPage.verifyLoginSuccess();
      });
    });
  });

  context("Invalid credentials", () => {
    it("Verify if it is not possible to log in with invalid username", () => {
      cy.get("@credentials").then((data) => {
        LoginPage.setUsername(data.invalid.username);
        LoginPage.setPassword(data.valid.password);
        LoginPage.submit();
        LoginPage.verifyInvalidUsername();
      });
    });

    it("Verify if it is not possible log in with invalid password", () => {
      cy.get("@credentials").then((data) => {
        LoginPage.setUsername(data.valid.username);
        LoginPage.setPassword(data.invalid.password);
        LoginPage.submit();
        LoginPage.verifyInvalidPassword();
      });
    });

    it("Verify if it is not possible log in with empty username and password", () => {
      cy.get("@credentials").then((data) => {
        LoginPage.setUsername(data.empty.username);
        LoginPage.setPassword(data.empty.password);
        LoginPage.submit();
        LoginPage.verifyEmptyUsernameAndPassword();
      });
    });
  });
});
