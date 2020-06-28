package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage
{
    private WebDriver driver;

    @FindBy(xpath = "//*[@id=\"main-nav\"]/a/span[contains(text(), 'Tasks')]")
    private WebElement tasks;

    @FindBy(xpath = "//*[@id=\"main-nav\"]/a/span[contains(text(), 'Cases')]")
    private WebElement cases;

    @FindBy(xpath = "//*[@id=\"main-nav\"]/a/span[contains(text(), 'Calls')]")
    private WebElement calls;

    @FindBy(xpath = "//*[@id=\"main-nav\"]/a/span[contains(text(), 'Documents')]")
    private WebElement docs;

    @FindBy(xpath = "//*[@id=\"main-nav\"]/a/span[contains(text(), 'Email')]")
    private WebElement emails;

    @FindBy(xpath = "//*[@id=\"main-nav\"]/a/span[contains(text(), 'Campaigns')]")
    private WebElement campaigns;

    @FindBy(xpath = "//*[@id=\"main-nav\"]/a/span[contains(text(), 'Forms')]")
    private WebElement forms;

    public HomePage(WebDriver driver)
    {
        this.driver = driver;

        // initializing the page objects
        PageFactory.initElements(driver, this);
    }

    // Methods for Home page
    public String getPageTitle()
    {
        return driver.getTitle();
    }

    public void clickTasks()
    {
        tasks.click();
    }

    public void clickCases()
    {
        cases.click();
    }

    public void clickCalls()
    {
        calls.click();
    }

    public void clickDocuments()
    {
        docs.click();
    }

    public void clickEmails()
    {
        emails.click();
    }

    public void clickCampaigns()
    {
        campaigns.click();
    }

    public void clickForms()
    {
        forms.click();
    }
}
