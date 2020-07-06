package com.stepdefinition;

import com.baseclass.Library;
import com.pages.EmailListPage;
import com.pages.EmailPage;

import cucumber.api.java.en.Then;

public class EmailStepDefinition extends Library
{

    private EmailPage Email;

    private EmailPage getPage()
    {
        if (Email == null) {
            Email = new EmailPage(driver);
        }
        return Email;
    }

    EmailListPage listpage = new EmailListPage(driver);

    @Then("^click on menu$")
    public void click_on_menu()
    {
        getPage().click_menu();
    }

    @Then("^click on email_template$")
    public void click_on_email_template()
    {
        listpage.email_templates();
    }

    @Then("^click New_Content_Template$")
    public void click_New_Content_Template()
    {
        getPage().click_new();
    }

    @Then("^Fill the details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
    public void fill_the_details_and_and_and(String name, String type, String sub, String message)
    {
        getPage().entername(name);
        getPage().entertype(type);
        getPage().entersub(sub);
        getPage().entermessage(message);
    }

    @Then("^click save$")
    public void click_save()
    {
        getPage().clicksave();
    }

    @Then("^Take the Screenshot$")
    public void take_Screenshot1()
    {
        seleniumutility.takeScreenshot("Email_Template.jpg");
    }

    @Then("^Click on Compose$")
    public void click_on_Compose()
    {
        listpage.compose();
    }

    @Then("^Fill the compose deatils \"([^\"]*)\" and \"([^\"]*)\" and  \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
    public void fill_the_compose_deatils_and_and_and_and_and(String transport, String cc, String bcc, String subject, String template, String body)
    {
        getPage().entertransport(transport);
        getPage().entercc(cc);
        getPage().enterbcc(bcc);
        getPage().enterobject(subject);
        getPage().entertemplate(template);
        getPage().enterbody(body);
    }

    @Then("^Click on Send$")
    public void click_on_Send()
    {
        getPage().clicksend();
    }

    @Then("^Take Screenshot$")
    public void take_Screenshot()
    {
        seleniumutility.takeScreenshot("Email.jpg");
    }
}
