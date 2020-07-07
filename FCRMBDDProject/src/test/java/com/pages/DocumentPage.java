package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DocumentPage
{
    private WebDriver driver;

    // @FindBy(xpath =
    // "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/form/div[1]/div[1]/div/div/input")
    // private WebElement folder;

    @FindBy(name = "title")
    private WebElement title;
    //
    // @FindBy(name = "description")
    // private WebElement description;
    //
    // @FindBy(name = "identifier")
    // private WebElement identifier;
    //
    // @FindBy(xpath = "*//button[contains(text(), 'Save')]")
    // private WebElement saveDocument;

    public DocumentPage(WebDriver driver)
    {
        // this.driver = driver;
        //
        // // initializing the page objects
        // WebElement El = driver.findElement(By.name("file")) ((RemoteWebElement) El
        // ).setFileDetector(new LocalFileDetector())

        // PageFactory.initElements(driver, this);
    }

    public void fillDocument(String title, String description, String identifier)
    {
        // // enterFolder(folder);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        enterTitle(title);
        enterDescription(description);
        enterIdentifier(identifier);

    }

    public void enterFolder(String folder)
    {

        // this.folder.sendKeys(folder);
    }

    public void enterTitle(String title)
    {
        enterText(this.title, title);
        // this.title.sendKeys(title);
    }

    public void enterDescription(String description)
    {
        // this.description.sendKeys(description);

    }

    public void enterIdentifier(String identifier)
    {
        // this.identifier.sendKeys(identifier);
    }

    public void saveDocument()
    {
        // this.saveDocument.click();
    }

    public WebElement waitForElementClickable(WebElement element)
    {
        WebDriverWait wait = new WebDriverWait(driver, 30);
        return wait.until(ExpectedConditions.elementToBeClickable(element));

    }

    public void enterText(WebElement element, String text)
    {
        WebElement webElement = this.waitTillElementVisiblity(element);
        webElement.clear();
        webElement.sendKeys(text);
    }

    public WebElement waitTillElementVisiblity(WebElement element)
    {
        WebDriverWait wait = new WebDriverWait(driver, 30);
        return wait.until(ExpectedConditions.visibilityOf(element));

    }
}