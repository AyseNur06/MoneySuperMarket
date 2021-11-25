package com.moneySuperMarket.pages;

import com.moneySuperMarket.utilities.ConfigurationReader;
import com.moneySuperMarket.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends BasePage {

    public LoginPage(){

        PageFactory.initElements(Driver.getSet(),this);
    }

    @FindBy(css = ".cms-login > .wal-button__text")
    public WebElement loginPageBtn;

    @FindBy(id = "msm-auth-email-0")
    public WebElement emailInput;

    @FindBy (id = "msm-auth-password-1")
    public WebElement passwordInput;

    @FindBy (css = "button[type='submit']")
    public WebElement loginBtn;

    @FindBy (className = "user-message__main")
    public WebElement welcomeMessage;

    @FindBy (className = "wal-alert__message")
    public WebElement loginErrorMessage;

    public void loginWithValidCredentials (){
        emailInput.sendKeys(ConfigurationReader.get("ValidUsername"));
        passwordInput.sendKeys(ConfigurationReader.get("ValidPassword"));
        loginBtn.click();

    }

    public void loginWithInvalidCredentials(){
        emailInput.sendKeys(ConfigurationReader.get("InvalidUsername"));
        passwordInput.sendKeys(ConfigurationReader.get("InvalidPassword"));
        loginBtn.click();

    }
    public void loginWithOnlyUsername (){
        emailInput.sendKeys(ConfigurationReader.get("InvalidUsername"));
        loginBtn.click();
    }

    public void loginWithOnlyPassword (){
        passwordInput.sendKeys(ConfigurationReader.get("ValidPassword"));
        loginBtn.click();
    }

    public void loginWithInvalidRangeValuePassword (){
        emailInput.sendKeys(ConfigurationReader.get("ValidUsername"));
        passwordInput.sendKeys(ConfigurationReader.get("WrongRangeValuePassword"));
        loginBtn.click();
    }

    public void loginWithoutCredentials(){
        loginBtn.click();
    }
}