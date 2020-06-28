package com.resusblefunctions;

import com.baseclass.Library;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.IOException;

public class SeleniumUtility extends Library
{
    private WebDriver driver;

    public SeleniumUtility(WebDriver driver)
    {
        this.driver = driver;
    }

    public void takeScreenshot(String fileName)
    {
        TakesScreenshot ts = (TakesScreenshot) driver;
        try {
            Thread.sleep(1000);
            File source = ts.getScreenshotAs(OutputType.FILE);
            FileUtils.copyFile(source, new File("reports/Screenshots/" + fileName));
        } catch (InterruptedException e1) {
            e1.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void Explicitlywait(String Locator)
    {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath(Locator))));

    }
}
