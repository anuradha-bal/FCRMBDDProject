package com.stepdefinition;

import com.baseclass.Library;
import com.pages.TaskListPage;
import com.pages.TaskPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class TaskStepDefinition extends Library
{
    private TaskPage task;

    private TaskPage getPage()
    {
        if (task == null) {
            task = new TaskPage(driver);
        }
        return task;
    }

    @Given("^Task page is launched$")
    public void task_page_is_launched()
    {

    }

    @Then("^click add new task$")
    public void click_add_new_task()
    {
        TaskListPage listPage = new TaskListPage(driver);
        listPage.newTask();
    }

    @Then("^fill_the_task details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and\"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
    public void fill_task_details(String title, String dueDate, String closeDate, String description, String type, String status)
    {
        getPage().enterTitle(title);
        getPage().setDueDate(dueDate);
        getPage().setCloseDate(closeDate);
        getPage().enterDescription(description);
        getPage().selectType(type);
        getPage().selectStatus(status);
    }

    @Then("^fill the task details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")

    public void fill_the_task_details(String title,
                                      String AssignedTo,
                                      String DueDate,
                                      String Deal,
                                      String CloseDate,
                                      String Description,
                                      String Completion,
                                      String Status,
                                      String Type,
                                      String Contact,
                                      String Case,
                                      String Tags,
                                      String Priority,
                                      String Identifier)
    {
        getPage().enterTitle(title);
        // getPage().enterAssignedTo(AssignedTo);
        getPage().setDueDate(DueDate);
        getPage().enterDeal(Deal);
        getPage().setCloseDate(CloseDate);
        getPage().enterDescription(Description);
        // getPage().enterCompletion(Completion);
        getPage().selectStatus(Status);
        getPage().selectType(Type);
    }

    @Then("^click save task$")
    public void save_task()
    {
        getPage().clickSave();
    }

}