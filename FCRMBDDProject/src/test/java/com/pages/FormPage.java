package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FormPage
{
    private WebDriver driver;

    @FindBy(name = "name")
    private WebElement name;

    @FindBy(xpath = "//*[@id='ui']/div/div/div/div/div/form/div/div/div/input[contains(@class,'hidden') and contains(@name,'active')]")
    private WebElement active;

    // @FindBy(xpath = "//*div/label[contains(text(), 'Active')]") // Relative not working
    @FindBy(xpath = "//*[@id='ui']/div/div/div/div/div/form/div/div/div/label[contains(text(),'Active')]")
    private WebElement activeFlag;

    @FindBy(name = "intro")
    private WebElement introduction;

    @FindBy(name = "outro")
    private WebElement completion;

    @FindBy(xpath = "//*[@id=\"dashboard-toolbar\"]/div/div/button[contains(text(), 'Save')]")
    private WebElement saveForm;

    public FormPage(WebDriver driver)
    {
        this.driver = driver;

        // initializing the page objects
        PageFactory.initElements(driver, this);
    }

    public void fillForm(String name, boolean isActive, String intro, String complete)
    {
        enterName(name);
        setActive(isActive);
        enterIntroduction(intro);
        enterCompletion(complete);
    }

    public void enterName(String name)
    {
        this.name.sendKeys(name);
    }

    public void setActive(boolean isActive)
    {
        if (isActive) {
            if (this.active.isSelected()) {
                // Do Nothing
            } else {
                this.activeFlag.click(); // check
            }
        } else {
            if (this.active.isSelected()) {
                this.activeFlag.click(); // uncheck
            } else {
                // Do Nothing
            }
        }
    }

    public void enterIntroduction(String intro)
    {
        this.introduction.sendKeys(intro);
    }

    public void enterCompletion(String complete)
    {
        this.completion.sendKeys(complete);
    }

    public void saveForm()
    {
        this.saveForm.click();
    }
}
