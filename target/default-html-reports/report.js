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
formatter.scenarioOutline({
  "name": "User should be able to log in with valid credentials and see the welcome message",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on the logInBtn button",
  "keyword": "And "
});
formatter.step({
  "name": "user should be able to login and see \"Welcome back, \u003cuserName\u003e!\"  message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName"
      ]
    },
    {
      "cells": [
        "Rach"
      ]
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
  "keyword": "Scenario Outline",
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
  "name": "user should be able to login and see \"Welcome back, Rach!\"  message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_should_be_able_to_login_and_see_message(java.lang.String)"
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
  "name": "verify that user should see a warning message \"Looks like this isn\u0027t matching the password we have for you. Please try again.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.verify_that_user_should_see_a_warningMessage(java.lang.String)"
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
  "name": "verify that user should see a warning message \"Please let us know your password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.verify_that_user_should_see_a_warningMessage(java.lang.String)"
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d96.0.4664.45)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ESUVLD9\u0027, ip: \u0027172.29.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.45, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\X1YOGA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63769}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1c5c8349cec1e0bcf6ee0a22a1fffad1\n*** Element info: {Using\u003did, value\u003dbanner-accept}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_acceptPopUp_button(LoginStepDefs.java:23)\r\n\tat ✽.user clicks on the acceptPopUp button(file:///C:/Users/X1%20Yoga/ideProjects/MoneySuperMarket/src/test/resources/features/Login.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on the LogInPageBtn button",
  "keyword": "When "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_LogInPageBtn_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the logInBtn button",
  "keyword": "And "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_logInBtn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that user should see a warning message \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.verify_that_user_should_see_a_warningMessage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d96.0.4664.45)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ESUVLD9\u0027, ip: \u0027172.29.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.45, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\X1YOGA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63769}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1c5c8349cec1e0bcf6ee0a22a1fffad1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.moneySuperMarket.step_definitions.Hooks.tearDown(Hooks.java:25)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d96.0.4664.45)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ESUVLD9\u0027, ip: \u0027172.29.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.45, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\X1YOGA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63769}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1c5c8349cec1e0bcf6ee0a22a1fffad1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat com.moneySuperMarket.step_definitions.Hooks.setUp(Hooks.java:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_is_on_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the acceptPopUp button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_acceptPopUp_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the LogInPageBtn button",
  "keyword": "When "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_LogInPageBtn_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the logInBtn button",
  "keyword": "And "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_logInBtn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that user should see a warning message \"A password cannot be less than 6 characters\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.verify_that_user_should_see_a_warningMessage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d96.0.4664.45)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ESUVLD9\u0027, ip: \u0027172.29.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.45, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\X1YOGA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63769}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1c5c8349cec1e0bcf6ee0a22a1fffad1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.moneySuperMarket.step_definitions.Hooks.tearDown(Hooks.java:25)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d96.0.4664.45)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ESUVLD9\u0027, ip: \u0027172.29.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.45, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\X1YOGA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63769}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1c5c8349cec1e0bcf6ee0a22a1fffad1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat com.moneySuperMarket.step_definitions.Hooks.setUp(Hooks.java:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_is_on_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the acceptPopUp button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_acceptPopUp_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the LogInPageBtn button",
  "keyword": "When "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_LogInPageBtn_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the logInBtn button",
  "keyword": "And "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_logInBtn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that user should see a warning message \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.verify_that_user_should_see_a_warningMessage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d96.0.4664.45)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ESUVLD9\u0027, ip: \u0027172.29.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.45, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\X1YOGA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63769}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1c5c8349cec1e0bcf6ee0a22a1fffad1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.moneySuperMarket.step_definitions.Hooks.tearDown(Hooks.java:25)\r\n",
  "status": "failed"
});
});