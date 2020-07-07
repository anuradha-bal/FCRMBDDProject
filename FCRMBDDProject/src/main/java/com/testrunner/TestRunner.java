package com.testrunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = "src/test/resources/Features/login.feature", plugin =
{
 "pretty",
 "html:reports/cucumber-html-report",
 "junit:reports/cucumber-html-report/xml",
 "com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"
}, glue =
{
 "com.stepdefinition"
}, monochrome = true, dryRun = false)
public class TestRunner extends AbstractTestNGCucumberTests
{

}
