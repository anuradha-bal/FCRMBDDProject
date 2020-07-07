package com.stepdefinition;

import com.baseclass.Library;
import com.pages.CaseListPage;
import com.pages.CasePage;

import cucumber.api.java.en.Then;

public class CaseStepDefinition extends Library
{
    private CasePage cp;

    private CasePage getPage()
    {
        if (cp == null) {
            cp = new CasePage(driver);
        }

        return cp;
    }

    @Then("^click add new case$")
    public void click_add_new_case()
    {
        CaseListPage listPage = new CaseListPage(driver);
        listPage.newCase();
    }

    @Then("^fill cases details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
    public void fill_cases_details(String Title,
                                   String Assigned,
                                   String Contact,
                                   String Company,
                                   String Deal,
                                   String Type,
                                   String Deadline,
                                   String CloseDate,
                                   String Tags,
                                   String Description,
                                   String Priority,
                                   String Status,
                                   String Identifier) throws Throwable

    {
        getPage().fillCaseDetails(Title, Assigned, Contact, Company, Deal, Type, Deadline, CloseDate, Tags, Description, Priority, Status, Identifier);
    }

    @Then("^save case$")
    public void save_case()
    {
        getPage().saveCase();
    }

    @Then("^take case Screenshot$")
    public void take_Screenshot()
    {
        seleniumutility.takeScreenshot("case.png");
    }
}
