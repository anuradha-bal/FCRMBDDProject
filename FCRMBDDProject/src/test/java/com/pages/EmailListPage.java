package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class EmailListPage
{
    private WebDriver driver;

    @FindBy(xpath = "//*[@id=\'ui\']/div/div[2]/div[2]/div/div[2]/div/div[1]/div/div[1]/button")
    private WebElement compose;

    @FindBy(xpath = "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div[2]/div/div[1]/div[2]/div[2]/div[2]/div[3]/span")
    private WebElement email_templates;

    public EmailListPage(WebDriver driver)
    {
        this.driver = driver;
        // initializing the page objects
        PageFactory.initElements(driver, this);
    }

    public void compose()
    {
        this.compose.click();
    }

    public void email_templates()
    {
        this.email_templates.click();
    }
}