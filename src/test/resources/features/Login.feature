@login
Feature: User login

  User story
  As a customer, I want to log in to moneysupermarket website
  and is shown with a welcome message saying
  ‘Welcome back <username>’.
  Background:
    Given user is on the home page
    Then user clicks on the acceptPopUp button
    When user clicks on the LogInPageBtn button

  Scenario:User should be able to log in with valid credentials and see the welcome message

    When user enters valid username and password
    And user clicks on the logInBtn button
    Then user should be able to login and see "Welcome back" username message


  Scenario: User should NOT be able to login with invalid credentials

    When user enters invalid username and password
    And user clicks on the logInBtn button
    Then verify that user should NOT be able to login and see a warning message



  Scenario: User should NOT be able to login with only username

    When user enters only username
    And user clicks on the logInBtn button
    Then verify that user should NOT be able to login and see a warning message


  Scenario: User should NOT be able to login with only password

    When user enters only password
    And user clicks on the logInBtn button
    Then verify that user should NOT be able to login and see a warning message


  Scenario: User should NOT be able to login with password with invalid range value

    When user enters username and password with invalid range value
    And user clicks on the logInBtn button
    Then verify that user should NOT be able to login and see a warning message

  Scenario: User should NOT be able to login without any password and any username

    When user doesn't enter any username and password
    And user clicks on the logInBtn button
    Then verify that user should NOT be able to login and see a warning message
