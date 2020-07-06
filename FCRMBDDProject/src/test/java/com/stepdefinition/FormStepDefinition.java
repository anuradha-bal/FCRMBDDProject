package com.stepdefinition;

import com.baseclass.Library;
import com.pages.FormListPage;
import com.pages.FormPage;

import cucumber.api.java.en.Then;

public class FormStepDefinition extends Library
{
    private FormPage form;

    private FormPage getPage()
    {
        if (form == null) {
            form = new FormPage(driver);
        }

        return form;
    }

    @Then("^click add new form$")
    public void click_add_new_form()
    {
        FormListPage listpage = new FormListPage(driver);
        listpage.newForm();
    }

    @Then("^enter name \"([^\"]*)\"$")
    public void enter_name(String name)
    {
        getPage().enterName(name);
    }

    @Then("^select isActive to \"([^\"]*)\"$")
    public void select_isActive_to(String isActive)
    {
        getPage().setActive(Boolean.parseBoolean(isActive));
    }

    @Then("^enter intro \"([^\"]*)\"$")
    public void enter_intro(String intro)
    {
        getPage().enterIntroduction(intro);
    }

    @Then("^enter completion \"([^\"]*)\"$")
    public void enter_completion(String complete)
    {
        getPage().enterCompletion(complete);
    }

    @Then("^fill_the_form details \"([^\"]*)\" and  \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
    public void fill_the_form_details(String name, String isActive, String intro, String complete)
    {
        getPage().fillForm(name, Boolean.parseBoolean(isActive), intro, complete);
    }

    @Then("^save form$")
    public void save_form()
    {
        getPage().saveForm();
    }

    @Then("^take Screenshot$")
    public void take_Screenshot()
    {
        seleniumutility.takeScreenshot("Form.png");
    }
}
