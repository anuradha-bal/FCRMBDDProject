package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DocumentListPage
{
    private WebDriver driver;

    @FindBy(xpath = "//a[contains(text(),'Root')]")
    private WebElement export;

    public DocumentListPage(WebDriver driver)
    {
        this.driver = driver;

        // initializing the page objects
        PageFactory.initElements(driver, this);
    }

    public void newDocument()
    {
        // this.export.click();
        String url = driver.getCurrentUrl();
        // driver.navigate().to(url + "/new");
        // driver.navigate().to(url);
        // driver.navigate().to(url + "/new");
        // driver.navigate().back();
        // try {
        // Thread.sleep(2000);
        // } catch (InterruptedException e) {
        // // TODO Auto-generated catch block
        // e.printStackTrace();
        // }
        // driver.navigate().back();
        // waitForElementClickable(export);
        WebElement newButton = driver.findElement(By.xpath("//a//button[@class='ui linkedin button'][contains(text(),'New')]"));
        newButton.click();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        driver.navigate().to(url + "/new");
        driver.navigate().to(url + "/new");
        // waitForElementClickable(newButton);
        // driver.navigate().forward();
    }

    public void clickOnElement(WebElement element)
    {

        WebElement webElement = this.waitForElementClickable(element);
        webElement.click();
    }

    public WebElement waitForElementClickable(WebElement element)
    {

        WebDriverWait wait = new WebDriverWait(driver, 30);
        return wait.until(ExpectedConditions.elementToBeClickable(element));

    }
}
