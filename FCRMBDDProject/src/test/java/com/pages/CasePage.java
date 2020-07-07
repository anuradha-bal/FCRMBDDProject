package com.pages;

import com.resusblefunctions.DatePicker;
import com.resusblefunctions.SeleniumUtility;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class CasePage
{
    private WebDriver driver;
    SeleniumUtility util = new SeleniumUtility(driver);

    public CasePage(WebDriver driver)
    {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//*[@id=\'dashboard-toolbar\']/div/div/div")
    WebElement view;

    @FindBy(xpath = "//*[@id=\'dashboard-toolbar\']/div/div/button[1]")
    WebElement filter;

    @FindBy(xpath = "//*[@id=\'dashboard-toolbar\']/div/div/button[2]")
    WebElement export;

    @FindBy(xpath = "//*[@id=\"dashboard-toolbar\"]/div/div/button[contains(text(), 'Save')]")
    private WebElement saveCase;

    @FindBy(name = "title")
    private WebElement title;

    @FindBy(xpath = "//*[@id=\"ui\"]/div/div[2]/div[2]/div/div[2]/form/div[2]/div[1]/div/div")
    private WebElement assigned_to;

    @FindBy(xpath = "//*[@id=\"ui\"]/div/div[2]/div[2]/div/div[2]/form/div[2]/div[2]/div/div/input")
    private WebElement contact;

    @FindBy(xpath = "//*[@id=\"ui\"]/div/div[2]/div[2]/div/div[2]/form/div[3]/div[1]/div/div/input")
    private WebElement company;

    @FindBy(name = "priority")
    private WebElement priority;

    @FindBy(name = "type")
    private WebElement type;

    @FindBy(xpath = "//*[@id='ui']/div/div[2]/div[2]/div/div[2]/form/div[4]/div[2]/div/div[1]/div/input")
    private WebElement deadline;

    @FindBy(xpath = "//*[@id=\"ui\"]/div/div[2]/div[2]/div/div[2]/form/div[5]/div[1]/div/div[1]/div/input")
    private WebElement closeDt;

    @FindBy(xpath = "//*[@id=\"ui\"]/div/div[2]/div[2]/div/div[2]/form/div[3]/div[2]/div/div/input")
    private WebElement deal;

    @FindBy(xpath = "//*[@id=\'ui\']/div/div[2]/div[2]/div/div[2]/form/div[5]/div[2]/div/label[2]/div")
    private WebElement tags;

    @FindBy(name = "description")
    private WebElement desc;

    @FindBy(name = "identifier")
    private WebElement id;

    @FindBy(name = "status")
    private WebElement status;

    public boolean checkView()
    {
        boolean viewDisplayed = view.isDisplayed();

        return viewDisplayed;
    }

    public void saveCase()
    {
        this.saveCase.click();
    }

    public void fillCaseDetails(String Title,
                                String Assigned,
                                String Contact,
                                String Company,
                                String Deal,
                                String Type,
                                String Deadline,
                                String CloseDate,
                                String Tags,
                                String Description,
                                String Priority,
                                String Status,
                                String Identifier)

    {
        setTitle(Title);
        setAssigned(Assigned);
        setContact(Contact);
        setCompany(Company);
        setDeal(Deal);
        setType(Type);
        setDeadline(Deadline);
        setCloseDt(CloseDate);
        // setTags(Tags);
        setDesc(Description);
        setPriority(Priority);
        setStatus(Status);
        setId(Identifier);
    }

    public void setTitle(String Title)
    {
        this.title.sendKeys(Title);
    }

    public void setContact(String cntct)
    {
        this.contact.sendKeys(cntct);
    }

    public void setCompany(String cmpny)
    {
        this.company.sendKeys(cmpny);
    }

    public void setDeal(String deal_arg)
    {
        this.deal.sendKeys(deal_arg);
    }

    public void setTags(String tag)
    {
        this.tags.sendKeys(tag);
    }

    public void setDesc(String description)
    {
        this.desc.sendKeys(description);
    }

    public void setId(String ids)
    {
        this.id.sendKeys(ids);
    }

    public void setAssigned(String assigned)
    {
        this.assigned_to.click();
        List<WebElement> assignToOptions = driver.findElements(By.xpath("//*[@id=\"ui\"]/div/div[2]/div[2]/div/div[2]/form/div[2]/div[1]/div/div/div[2]/div/span"));
        util.setByVisibleText(assignToOptions, assigned);
    }

    public void setPriority(String priority)
    {
        this.priority.click();
        WebElement prioritySelect = driver.findElement(By.xpath(".//*[@name='priority']/div/div[@role='option']/span[contains(text(),'" + priority + "')]"));
        prioritySelect.click();
    }

    public void setType(String type)
    {
        this.type.click();
        WebElement typeSelect = driver.findElement(By.xpath(".//*[@name='type']/div/div[@role='option']/span[contains(text(),'" + type + "')]"));
        typeSelect.click();
    }

    public void setDeadline(String deadline)
    {
        this.deadline.click();

        DatePicker dp = new DatePicker(driver, deadline);
        dp.pickDate();
    }

    public void setCloseDt(String closeDt)
    {
        this.closeDt.click();

        DatePicker dp = new DatePicker(driver, closeDt);
        dp.pickDate();
    }

    public void setStatus(String status)
    {
        this.status.sendKeys(status);
    }
}
