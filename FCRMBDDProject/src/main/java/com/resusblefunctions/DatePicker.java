package com.resusblefunctions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.Calendar;
import java.util.List;

public class DatePicker
{
    private WebDriver driver;
    private SeleniumUtility utility;
    private int day;
    private int month;
    private int year;

    private String timeStamp;

    // eg. Input 07/20/2020 9:45
    public DatePicker(WebDriver driver, String dateTime)
    {
        this.driver = driver;
        utility = new SeleniumUtility(driver);

        // Split the date time to get only the date part
        String dateParts[] = dateTime.split(" ");
        String date[] = (dateParts[0]).split("/");
        this.month = Integer.parseInt(date[0]);
        this.day = Integer.parseInt(date[1]);
        this.year = Integer.parseInt(date[2]);

        timeStamp = dateParts[1];
    }

    public void pickDate()
    {
        WebElement prev = driver.findElement(By.xpath(".//*[@aria-label='Previous Month']"));
        WebElement next = driver.findElement(By.xpath(".//*[@aria-label='Next Month']"));

        // Set Month
        int monthDiff = month - Calendar.getInstance().get(Calendar.MONTH);
        if (monthDiff > 0) {
            for (int i = 0; i < monthDiff - 1; i++) {
                next.click();
            }
        } else {
            for (int i = 0; i < (monthDiff - 1) * (-1); i++) {
                prev.click();
            }
        }

        // Set Year
        int yearDiff = year - Calendar.getInstance().get(Calendar.YEAR);
        if (yearDiff > 0) {
            for (int i = 0; i < yearDiff; i++) {
                for (int j = 0; j < 12; j++) {
                    next.click();
                }
            }
        } else {
            for (int i = 0; i < yearDiff * (-1); i++) {
                for (int j = 0; j < 12; j++) {
                    prev.click();
                }
            }
        }

        // Set Date
        List<WebElement> days = driver.findElements(By.xpath(".//*[@class='react-datepicker__month']/div/div[@role='option']"));
        utility.setByVisibleText(days, Integer.toString(day));

        // Set Time
        List<WebElement> times = driver.findElements(By.xpath("*//div[@class='react-datepicker__time']/div/ul/li"));
        utility.setByVisibleText(times, timeStamp);
    }

}
