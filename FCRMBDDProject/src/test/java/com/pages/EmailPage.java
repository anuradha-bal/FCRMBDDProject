package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class EmailPage
{
    private WebDriver driver;

    @FindBy(xpath = "//*[@id=\'ui\']/div/div[2]/div[2]/div/div[2]/div/div[2]/div/div[1]/div[2]/div[2]/i")
    private WebElement menu;

    @FindBy(xpath = "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/a/button/i")
    private WebElement new_content;

    @FindBy(name = "name")
    private WebElement name;

    @FindBy(name = "type")
    private WebElement type;

    @FindBy(xpath = "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/form/div[2]/div/input")
    private WebElement sub;

    @FindBy(xpath = "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/form/div[4]/div/div[3]/div/div/div/div/div/div")
    private WebElement message;

    @FindBy(xpath = "//*[@id=\'dashboard-toolbar\']/div[2]/div/button[2]")
    private WebElement save;

    @FindBy(xpath = "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div[2]/div/form/div[1]/div")
    private WebElement transport;

    @FindBy(xpath = "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div[2]/div/form/div[2]/div[1]/div")
    private WebElement to;

    @FindBy(name = "cc")
    private WebElement cc;

    @FindBy(name = "bcc")
    private WebElement bcc;

    @FindBy(name = "subject")
    private WebElement subject;

    @FindBy(xpath = "//*[@id='ui']/div/div[2]/div[2]/div/div[2]/div/div[2]/div/form/div[3]/div/input")
    private WebElement template;

    @FindBy(xpath = "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div[2]/div/form/div[5]/div/div[3]/div/div[2]/div/div/div/div")
    WebElement body;

    @FindBy(xpath = "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div[2]/div/div/div[2]/div")
    private WebElement send;

    public EmailPage(WebDriver driver)
    {
        this.driver = driver;
        // initializing the page objects
        PageFactory.initElements(driver, this);
    }

    public void fill(String name, String type, String sub, String message, String transport, String to, String cc, String bcc, String subject, String template, String body)
    {
        entername(name);
        entertype(type);
        entersub(sub);
        entermessage(message);

        entertransport(transport);
        enterto(to);
        entercc(cc);
        enterbcc(bcc);
        enterobject(subject);
        entertemplate(template);
        enterbody(body);

    }

    public void click_menu()
    {
        this.menu.click();
    }

    public void click_new()
    {
        this.new_content.click();
    }

    public void entername(String name)
    {
        this.name.sendKeys(name);
    }

    public void entertype(String type)
    {
        this.type.sendKeys(type);
    }

    public void entersub(String sub)
    {
        this.sub.sendKeys(sub);
    }

    public void entermessage(String message)
    {
        this.message.sendKeys(message);
    }

    public void clicksave()
    {
        this.save.click();
    }

    public void entertransport(String transport)
    {
        this.transport.sendKeys(transport);
    }

    public void enterto(String to)
    {
        this.to.sendKeys(to);
    }

    public void entercc(String cc)
    {
        this.cc.sendKeys(cc);
    }

    public void enterbcc(String bcc)
    {
        this.bcc.sendKeys(bcc);
    }

    public void enterobject(String subject)
    {
        this.subject.sendKeys(subject);
    }

    public void entertemplate(String template)
    {
        this.template.sendKeys(template);
    }

    public void enterbody(String body)
    {
        this.body.sendKeys(body);
    }

    public void clicksend()
    {
        this.send.click();
    }
}
