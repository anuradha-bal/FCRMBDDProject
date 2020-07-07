package com.testrunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = "src/test/resources/Features/login.feature", glue =
{
 "com.stepdefinition"
}, monochrome = true, dryRun = false)
public class TestRunner extends AbstractTestNGCucumberTests
{

}
