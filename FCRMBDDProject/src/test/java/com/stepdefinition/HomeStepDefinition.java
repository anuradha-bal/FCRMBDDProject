package com.stepdefinition;

import com.baseclass.Library;
import com.pages.HomePage;

import cucumber.api.java.en.Then;

public class HomeStepDefinition extends Library
{
    private HomePage home;

    private HomePage getPage()
    {
        if (home == null) {
            home = new HomePage(driver);
        }

        return home;
    }

    @Then("^click navigate to task page$")
    public void clickTasks()
    {
        getPage().clickTasks();
        seleniumutility.takeScreenshot("tasks_list_page.jpg");
    }

    @Then("^click navigate to cases page$")
    public void clickCases()
    {
        getPage().clickCases();
        seleniumutility.takeScreenshot("cases_list_page.jpg");
    }

    @Then("^click navigate to calls page$")
    public void clickCalls()
    {
        getPage().clickCalls();
        seleniumutility.takeScreenshot("calls_list_page.jpg");
    }

    @Then("^click navigate to documents page$")
    public void clickDocuments()
    {
        getPage().clickDocuments();
        seleniumutility.takeScreenshot("docs_list_page.jpg");
    }

    @Then("^click navigate to emails page$")
    public void clickEmails()
    {
        getPage().clickEmails();
        seleniumutility.takeScreenshot("emails_list_page.jpg");
    }

    @Then("^click navigate to forms page$")
    public void clickForms()
    {
        getPage().clickForms();
        seleniumutility.takeScreenshot("forms_list_page.jpg");
    }
}
