package com.moneySuperMarket.step_definitions;

import com.moneySuperMarket.pages.LoginPage;
import com.moneySuperMarket.utilities.BrowserUtilities;
import com.moneySuperMarket.utilities.ConfigurationReader;
import com.moneySuperMarket.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;

public class LoginStepDefs {

    LoginPage loginPage = new LoginPage();

    @Given("user is on the home page")
    public void user_is_on_the_home_page() {

        Driver.getSet().get(ConfigurationReader.get("url"));
    }

    @Then("user clicks on the acceptPopUp button")
    public void user_clicks_on_the_acceptPopUp_button() {

        loginPage.acceptPopUpBtn.click();
    }

    @When("user clicks on the LogInPageBtn button")
    public void user_clicks_on_the_LogInPageBtn_button() {

        loginPage.loginPageBtn.click();
    }

    @When("user enters valid {string} and {string}")
    public void user_enters_valid_and(String username, String password) {

        loginPage.loginWithValidCredentials(username,password);

    }

    @When("user clicks on the logInBtn button")
    public void user_clicks_on_the_logInBtn_button() {

        loginPage.loginBtn.click();

    }
    @Then("verify that user should see a message {string}")
    public void verify_that_user_should_see_a_message(String expectedWelcomeMessage) {

        String actualWelcomeMessage = loginPage.welcomeMessage.getText();
        Assert.assertEquals(expectedWelcomeMessage,actualWelcomeMessage);

    }

    @When("user enters invalid username and password")
    public void user_enters_invalid_username_and_password() {

        BrowserUtilities.waitFor(2);
        loginPage.loginWithInvalidCredentials();
    }

    @Then("verify that user should see a warning message {string}")
    public void verify_that_user_should_see_a_warningMessage(String expectedErrorMessage) {

         String actualErrorMessage = loginPage.loginErrorMessage.getText();
         Assert.assertEquals(expectedErrorMessage, actualErrorMessage);

    }

    @When("user enters only username")
    public void user_enters_only_username() {

        BrowserUtilities.waitFor(2);
        loginPage.loginWithOnlyUsername();

    }

    @When("user enters only password")
    public void user_enters_only_password() {

        BrowserUtilities.waitFor(2);
        loginPage.loginWithOnlyPassword();
    }

    @When("user enters username and password with invalid range value")
    public void user_enters_username_and_password_with_invalid_range_value() {

        BrowserUtilities.waitFor(2);
        loginPage.loginWithInvalidRangeValuePassword();

    }

    @When("user doesn't enter any username and password")
    public void user_doesnt_enter_any_username_and_password() {

        BrowserUtilities.waitFor(2);
        loginPage.loginWithoutCredentials();
    }

}
