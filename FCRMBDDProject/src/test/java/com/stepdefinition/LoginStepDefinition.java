package com.stepdefinition;

import com.baseclass.Library;
import com.pages.LoginPage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition extends Library
{
    private LoginPage login;

    private LoginPage getPage()
    {
        if (login == null) {
            login = new LoginPage(driver);
        }

        return login;
    }

    @Given("^user is on free crm login page$")
    public void setup()
    {
        launchApplication();
    }

    @When("^user enters email \"([^\"]*)\"$")
    public void enterEmail(String email)
    {
        getPage().enterEmail(email);
    }

    @And("^user enters password \"([^\"]*)\"$")
    public void enterPassword(String password)
    {
        getPage().enterPassword(password);
    }

    @When("^user clicks on login button$")
    public void login()
    {
        getPage().clickLogin();
    }

    @Then("^user is on free crm home page$")
    public void loggedOn()
    {
        seleniumutility.takeScreenshot("home_page.jpg");
    }

    @Then("^close the browser$")
    public void tearDown()
    {
        quit();
    }
}
