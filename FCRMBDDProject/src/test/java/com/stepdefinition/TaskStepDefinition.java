package com.stepdefinition;

import com.baseclass.Library;
import com.pages.TaskListPage;
import com.pages.TaskPage;

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

    @Then("^save task$")
    public void save_task()
    {
        getPage().clickSave();
    }

}