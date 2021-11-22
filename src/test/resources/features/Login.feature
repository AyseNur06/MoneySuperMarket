@login
Feature: User login

  User story
  As a customer, I want to log in to moneysupermarket website
  and is shown with a welcome message saying
  ‘Welcome back <username>’.


  Scenario:User should be able to log in with valid credentials and see the welcome message

    Given user is on the home page
    Then user clicks on the acceptPopUp button
    When user clicks on the LogInPageBtn button
    When user enters valid username and password
    And user clicks on the logInBtn button
    Then user should be able to login and see "Welcome back, Rach!" username message


  Scenario: User should NOT be able to login with invalid credentials

    Given user is on the home page
    When user clicks on the LogInPageBtn button
    When user enters invalid username and password
    And user clicks on the logInBtn button
    Then user should NOT be able to login and see a warning message


  Scenario: User should NOT be able to login with only username

    Given user is on the home page
    When user clicks on the LogInPageBtn button
    When user enters only username
    And user clicks on the logInBtn button
    Then user should NOT be able to login and see a warning message


  Scenario: User should NOT be able to login with only password

    Given user is on the home page
    When user clicks on the LogInPageBtn button
    When user enters only password
    And user clicks on the logInBtn button
    Then user should NOT be able to login and see a warning message

