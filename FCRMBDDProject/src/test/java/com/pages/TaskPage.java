package com.pages;

import com.resusblefunctions.DatePicker;
import com.resusblefunctions.SeleniumUtility;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class TaskPage
{
    private WebDriver driver;
    SeleniumUtility utility = new SeleniumUtility(driver);

    @FindBy(name = "title")
    private WebElement title;

    @FindBy(xpath = "*//label[contains(text(),'Due Date')]/parent::div/div/div/input")
    private WebElement dueDate;

    @FindBy(xpath = "*//label[contains(text(),'Close Date')]/parent::div/div/div/input")
    private WebElement closeDate;

    @FindBy(name = "description")
    private WebElement description;

    @FindBy(name = "type")
    private WebElement type;

    @FindBy(name = "status")
    private WebElement status;

    @FindBy(xpath = "*//button[contains(text(), 'Save')]")
    private WebElement save;

    public TaskPage(WebDriver driver)
    {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void enterTitle(String title)
    {
        this.title.sendKeys(title);
    }

    public void setDueDate(String dueDate)
    {
        this.dueDate.click();

        DatePicker dp = new DatePicker(driver, dueDate);
        dp.pickDate();
    }

    public void setCloseDate(String closeDate)
    {
        this.closeDate.click();
        DatePicker dp = new DatePicker(driver, closeDate);
        dp.pickDate();
    }

    public void selectStatus(String status)
    {
        this.status.click();

        // List<WebElement> statusOptions =
        // driver.findElements(By.xpath(".//*[@name='status']/div/div[@role='option']/span"));
        // SeleniumUtility utility = new SeleniumUtility(driver);
        // utility.setByVisibleText(statusOptions, status);

        WebElement statusOptions = driver.findElement(By.xpath(".//*[@name='status']/div/div[@role='option']/span[contains(text(),'" + status + "')]"));
        statusOptions.click();

    }

    public void enterDescription(String description)
    {
        this.description.sendKeys(description);
    }

    public void selectType(String type)
    {
        this.type.click();
        WebElement typeDropdown = driver.findElement(By.xpath(".//*[@name='type']/div/div[@role='option']/span[contains(text(),'" + type + "')]"));
        typeDropdown.click();
    }

    public void clickSave()
    {
        this.save.click();
    }

}
