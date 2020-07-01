package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FormListPage
{
    private WebDriver driver;

    @FindBy(xpath = "//*[@id=\"dashboard-toolbar\"]/div/div/a/button[contains(text(), 'New')]")
    private WebElement newForm;

    public FormListPage(WebDriver driver)
    {
        this.driver = driver;

        // initializing the page objects
        PageFactory.initElements(driver, this);
    }

    public void newForm()
    {
        this.newForm.click();
    }
}
