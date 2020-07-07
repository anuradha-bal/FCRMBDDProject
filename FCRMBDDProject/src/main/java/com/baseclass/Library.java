package com.baseclass;

import com.resusblefunctions.SeleniumUtility;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Library
{
    protected static SeleniumUtility seleniumutility;
    protected static WebDriver driver;
    protected Logger log = null;

    private Properties prop;

    public void launchApplication()
    {
        try {
            log = Logger.getLogger("FCRMBDDProject");
            PropertyConfigurator.configure("src/test/resources/Log4jProperty/log4j.properties");
            // Logger log = (Logger) LogManager.getLogger(Library.class.getName());
            FileInputStream fis = new FileInputStream("src/test/resources/Configuration/config.properties");
            prop = new Properties();
            prop.load(fis);

            // Read from config file
            String browser = prop.getProperty("browser");
            String url = prop.getProperty("url");
            int implicitWait = Integer.parseInt(prop.getProperty("implicit-wait"));

            if (browser.equalsIgnoreCase("firefox")) {
                WebDriverManager.iedriver().setup();
                driver = new FirefoxDriver();
            } else if (browser.equalsIgnoreCase("chrome")) {
                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver();

                // ((ChromeDriver) driver).setFileDetector(new LocalFileDetector());

                log.info("chrome Browser is launched ");
            } else if (browser.equals("headless")) {
                // driver = new HtmlUnitDriver();
            } else {
                System.out.println("only chrome, ie  and headless browsers are supported");
                // TODO: Add to Log file and throw exception
                return;
            }
            driver.manage().window().maximize();
            driver.manage().timeouts().implicitlyWait(implicitWait, TimeUnit.SECONDS);
            driver.get(url);

            seleniumutility = new SeleniumUtility(driver);

        } catch (WebDriverException e) {
            // TODO: Add to Log file
            System.out.println("Browser could not be launched : " + e.toString());
            e.printStackTrace();
        } catch (FileNotFoundException e) {
            // TODO: Add to Log file
            System.out.println("File not found : " + e.toString());
            e.printStackTrace();
        } catch (IOException e) {
            System.out.println("IO Exception : " + e.toString());
            e.printStackTrace();
        }
    }

    public void quit()
    {
        driver.quit();
    }
}
