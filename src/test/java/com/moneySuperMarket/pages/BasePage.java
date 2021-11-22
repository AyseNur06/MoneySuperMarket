package com.moneySuperMarket.pages;

import com.moneySuperMarket.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public abstract class BasePage {

    public BasePage() {

        PageFactory.initElements(Driver.get(), this);
    }
        @FindBy(id = "banner-accept")
        public WebElement acceptPopUpBtn;



}
