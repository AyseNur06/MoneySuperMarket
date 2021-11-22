package com.moneySuperMarket.pages;

import com.moneySuperMarket.utilities.ConfigurationReader;
import com.moneySuperMarket.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends BasePage {

    public LoginPage(){

        PageFactory.initElements(Driver.get(),this);
    }

    @FindBy(css = ".cms-login > .wal-button__text")
    public WebElement loginPageBtn;

    @FindBy(xpath = "//input[@type = 'email']" )
    public WebElement emailInput;
// @FindBy(id = "msm-auth-email-0")

    @FindBy (xpath = "//input[@type = 'password']")
    public WebElement passwordInput;
  //  @FindBy (id = "msm-auth-password-1")

    @FindBy (css = "button[type='submit']")
    public WebElement loginBtn;
 // @FindBy (xpath ="//span[.='Log in']")

   // @FindBy (xpath = "//*[contains(text(),'Welcome back')]")
   // @FindBy (className = "user-message__main")
    @FindBy (css = ".user-message__main")

    public WebElement welcomeMessage;


  //  @FindBy (xpath = "//div[@role='alert']")

   @FindBy (className = "wal-alert__message")
   public WebElement loginErrorMessage;

    public void loginWithValidCredentials (){
        emailInput.sendKeys(ConfigurationReader.get("ValidUsername"));
        passwordInput.sendKeys(ConfigurationReader.get("ValidPassword"));
        loginBtn.click();

    }

    public void loginWithInvalidCredentials (String username, String password){
        emailInput.sendKeys(username);
        passwordInput.sendKeys(password);
        loginBtn.click();
    }

    public void loginWithOnlyUsername (String username){
        emailInput.sendKeys(username);
        loginBtn.click();
    }

    public void loginWithOnlyPassword (String password){
        passwordInput.sendKeys(password);
        loginBtn.click();
    }



}
