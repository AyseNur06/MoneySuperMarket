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
  "name": "user should be able to login and see \"Welcome back, Rach!\" username message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.userShouldBeAbleToLoginAndSeeUsernameMessage(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".user-message__main\"}\n  (Session info: chrome\u003d96.0.4664.45)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ESUVLD9\u0027, ip: \u0027172.29.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002716.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.45, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\X1YOGA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61351}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2275857deab652f9982ceef685cf8e03\n*** Element info: {Using\u003dcss selector, value\u003d.user-message__main}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy19.getText(Unknown Source)\r\n\tat com.moneySuperMarket.step_definitions.LoginStepDefs.userShouldBeAbleToLoginAndSeeUsernameMessage(LoginStepDefs.java:52)\r\n\tat ✽.user should be able to login and see \"Welcome back, Rach!\" username message(file:///C:/Users/X1%20Yoga/ideProjects/MoneySuperMarket/src/test/resources/features/Login.feature:17)\r\n",
  "status": "failed"
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
  "name": "user clicks on the LogInPageBtn button",
  "keyword": "When "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_LogInPageBtn_button()"
});
formatter.result({
  "status": "passed"
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
  "name": "user should NOT be able to login and see a warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_should_NOT_be_able_to_login_and_see_a_warning_message()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".wal\\-alert__message\"}\n  (Session info: chrome\u003d96.0.4664.45)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ESUVLD9\u0027, ip: \u0027172.29.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002716.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.45, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\X1YOGA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61351}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2275857deab652f9982ceef685cf8e03\n*** Element info: {Using\u003dclass name, value\u003dwal-alert__message}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy19.getText(Unknown Source)\r\n\tat com.moneySuperMarket.step_definitions.LoginStepDefs.user_should_NOT_be_able_to_login_and_see_a_warning_message(LoginStepDefs.java:65)\r\n\tat ✽.user should NOT be able to login and see a warning message(file:///C:/Users/X1%20Yoga/ideProjects/MoneySuperMarket/src/test/resources/features/Login.feature:26)\r\n",
  "status": "failed"
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
  "name": "user clicks on the LogInPageBtn button",
  "keyword": "When "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_LogInPageBtn_button()"
});
formatter.result({
  "status": "passed"
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
  "name": "user should NOT be able to login and see a warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_should_NOT_be_able_to_login_and_see_a_warning_message()"
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
  "name": "user clicks on the LogInPageBtn button",
  "keyword": "When "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_clicks_on_the_LogInPageBtn_button()"
});
formatter.result({
  "status": "passed"
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
  "name": "user should NOT be able to login and see a warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.moneySuperMarket.step_definitions.LoginStepDefs.user_should_NOT_be_able_to_login_and_see_a_warning_message()"
});
formatter.result({
  "status": "passed"
});
});