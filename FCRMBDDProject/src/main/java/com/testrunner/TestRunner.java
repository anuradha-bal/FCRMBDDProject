package com.testrunner;

import com.cucumber.listener.Reporter;

import org.testng.annotations.AfterClass;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

// @RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Features", plugin =
{
 "pretty",
 "html:reports/cucumber-html-report",
 "junit:reports/cucumber-html-report/xml",
 "json:reports/cucumber-html-report/jsonreport",
 "com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"
}, glue =
{
 "com.stepdefinition"
}, monochrome = true, dryRun = false)
public class TestRunner extends AbstractTestNGCucumberTests
{
    @AfterClass
    public static void extendReport()
    {
        Reporter.loadXMLConfig("src/test/resources/TestData/extent-config.xml");
        Reporter.setSystemInfo("user", System.getProperty("user.name"));
        Reporter.setSystemInfo("os", "Windows");
        Reporter.setTestRunnerOutput("Sample test runner output message");
    }
}
