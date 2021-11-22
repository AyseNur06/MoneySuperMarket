package com.moneySuperMarket.step_definitions;

import com.moneySuperMarket.pages.LoginPage;
import com.moneySuperMarket.utilities.BrowserUtilities;
import com.moneySuperMarket.utilities.ConfigurationReader;
import com.moneySuperMarket.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LoginStepDefs {

    LoginPage loginPage = new LoginPage();

    @Given("user is on the home page")
    public void user_is_on_the_home_page() {

        Driver.get().get(ConfigurationReader.get("url"));
    }

    @Then("user clicks on the acceptPopUp button")
    public void user_clicks_on_the_acceptPopUp_button() {

     //   BrowserUtilities.waitFor(3);
        loginPage.acceptPopUpBtn.click();
    }

    @When("user clicks on the LogInPageBtn button")
    public void user_clicks_on_the_LogInPageBtn_button() {

        loginPage.loginPageBtn.click();
    }

    @When("user enters valid username and password")
    public void user_enters_valid_username_and_password() {

        loginPage.loginWithValidCredentials();
    }

    @When("user clicks on the logInBtn button")
    public void user_clicks_on_the_logInBtn_button() {

        loginPage.loginBtn.click();
     //   BrowserUtilities.waitFor(3);
    }

    @Then("user should be able to login and see {string} username message")
    public void userShouldBeAbleToLoginAndSeeUsernameMessage(String expectedWelcomeMessage) {

        BrowserUtilities.waitFor(2);
        String actualWelcomeMessage = loginPage.welcomeMessage.getText();
        Assert.assertEquals(expectedWelcomeMessage,actualWelcomeMessage);
    }

    @When("user enters invalid username and password")
    public void user_enters_invalid_username_and_password() {

        loginPage.loginWithInvalidCredentials("admin@gmail.com", "asdfgh");
    }

    @Then("user should NOT be able to login and see a warning message")
    public void user_should_NOT_be_able_to_login_and_see_a_warning_message() {

        System.out.println("loginPage.errorMessage = " + loginPage.loginErrorMessage.getText());
        Assert.assertTrue(loginPage.loginErrorMessage.isDisplayed());
    }

    @When("user enters only username")
    public void user_enters_only_username() {

        loginPage.loginWithOnlyUsername("admin@gmail.com");

    }

    @When("user enters only password")
    public void user_enters_only_password() {

        loginPage.loginWithOnlyPassword("asdfgh");
    }



}
