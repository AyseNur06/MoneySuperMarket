$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "User login",
  "description": "  User story\n  As a customer, I want to log in to moneysupermarket website\n  and is shown with a welcome message saying\n  ‘Welcome back \u003cusername\u003e’.",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the acceptPopUp button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_acceptPopUp_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the LogInPageBtn button",
  "keyword": "When "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_LogInPageBtn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to log in with valid credentials and see the welcome message",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the logInBtn button",
  "keyword": "And "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_logInBtn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to login and see \"Welcome back\" username message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.userShouldBeAbleToLoginAndSeeUsernameMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the acceptPopUp button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_acceptPopUp_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the LogInPageBtn button",
  "keyword": "When "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_LogInPageBtn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should NOT be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters invalid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_enters_invalid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the logInBtn button",
  "keyword": "And "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_logInBtn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that user should NOT be able to login and see a warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.verify_that_user_should_NOT_be_able_to_login_and_see_a_warningMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the acceptPopUp button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_acceptPopUp_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the LogInPageBtn button",
  "keyword": "When "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_LogInPageBtn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should NOT be able to login with only username",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters only username",
  "keyword": "When "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_enters_only_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the logInBtn button",
  "keyword": "And "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_logInBtn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that user should NOT be able to login and see a warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.verify_that_user_should_NOT_be_able_to_login_and_see_a_warningMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the acceptPopUp button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_acceptPopUp_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the LogInPageBtn button",
  "keyword": "When "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_LogInPageBtn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should NOT be able to login with only password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters only password",
  "keyword": "When "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_enters_only_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the logInBtn button",
  "keyword": "And "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_logInBtn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that user should NOT be able to login and see a warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.verify_that_user_should_NOT_be_able_to_login_and_see_a_warningMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the acceptPopUp button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_acceptPopUp_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the LogInPageBtn button",
  "keyword": "When "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_LogInPageBtn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should NOT be able to login with password with invalid range value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters username and password with invalid range value",
  "keyword": "When "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_enters_username_and_password_with_invalid_range_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the logInBtn button",
  "keyword": "And "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_logInBtn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that user should NOT be able to login and see a warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.verify_that_user_should_NOT_be_able_to_login_and_see_a_warningMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the acceptPopUp button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_acceptPopUp_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the LogInPageBtn button",
  "keyword": "When "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_LogInPageBtn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should NOT be able to login without any password and any username",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user doesn\u0027t enter any username and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_doesnt_enter_any_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the logInBtn button",
  "keyword": "And "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_logInBtn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that user should NOT be able to login and see a warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.verify_that_user_should_NOT_be_able_to_login_and_see_a_warningMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});