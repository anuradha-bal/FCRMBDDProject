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

    @FindBy(xpath = ".//*[@name=\\\"type\\\"]/div/div[@role='option']/span")
    private WebElement assignedTo;

    @FindBy(xpath = "//*[@id=\"ui\"]/div/div[2]/div[2]/div/div[2]/form/div[3]/div[1]/div/div[1]/div/input")
    private WebElement dueDate;

    @FindBy(xpath = "//*[@id=\"ui\"]/div/div[2]/div[2]/div/div[2]/form/div[4]/div[1]/div/div/input")
    private WebElement deal;

    @FindBy(xpath = "//*[@id=\"ui\"]/div/div[2]/div[2]/div/div[2]/form/div[5]/div[1]/div/div[1]/div/input")
    private WebElement closeDate;

    @FindBy(name = "description")
    private WebElement desc;

    @FindBy(xpath = "//*[@id=\"ui\"]/div/div[2]/div[2]/div/div[2]/form/div[8]/div[1]/div/div/input")
    private WebElement completion;

    @FindBy(name = "status")
    private WebElement status;

    @FindBy(name = "type")
    private WebElement type;

    @FindBy(xpath = "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/form/div[3]/div[2]/div/div/input")
    private WebElement contact;

    @FindBy(name = "priority")
    private WebElement priority;

    @FindBy(name = "identifier")
    private WebElement identifier;

    @FindBy(xpath = "*//button[contains(text(), 'Save')]")
    private WebElement save;

    public TaskPage(WebDriver driver)
    {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void fillTaskdetails(String title,
                                String assignedTo,
                                String dueDate,
                                String deal,
                                String closeDate,
                                String description,
                                String completion,
                                String status,
                                String type,
                                String contact,
                                String cases,
                                String tags,
                                String priority,
                                String identifier)
    {
        enterTitle(title);
        enterDeal(deal);
        setDueDate(dueDate);
        enterDeal(deal);
        setCloseDate(closeDate);
        enterDescription(description);
        selectStatus(status);
        selectType(type);
        clickSave();
    }

    public void enterTitle(String newTitle)
    {
        this.title.sendKeys(newTitle);
    }

    public void setDueDate(String dueDate)
    {
        this.dueDate.click();

        DatePicker dp = new DatePicker(driver, dueDate);
        dp.pickDate();
    }

    public void enterDeal(String newDeal)
    {
        this.deal.sendKeys(newDeal);
    }

    public void setCloseDate(String closeDate)
    {
        this.closeDate.click();

        DatePicker dp = new DatePicker(driver, closeDate);
        dp.pickDate();
    }

    public void enterDescription(String Description)
    {
        this.desc.sendKeys(Description);
    }

    public void selectStatus(String status)
    {
        this.status.click();
        WebElement statusOptions = driver.findElement(By.xpath(".//*[@name='status']/div/div[@role='option']/span[contains(text(),'" + status + "')]"));
        statusOptions.click();
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
