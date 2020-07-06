package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class TaskListPage
{
    private WebDriver driver;

    @FindBy(xpath = "*//button[contains(text(), 'New')]")
    private WebElement newTask;

    public TaskListPage(WebDriver driver)
    {
        this.driver = driver;

        // initializing the page objects
        PageFactory.initElements(driver, this);
    }

    public void newTask()
    {
        this.newTask.click();
    }
}
