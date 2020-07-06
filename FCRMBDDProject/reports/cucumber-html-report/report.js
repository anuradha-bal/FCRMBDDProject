$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/task.feature");
formatter.feature({
  "line": 1,
  "name": "To test the Task Page",
  "description": "Description: The purpose is to fill the Tasks Page",
  "id": "to-test-the-task-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "To fill_the_task Page",
  "description": "",
  "id": "to-test-the-task-page;to-fill-the-task-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "fill_the_task details \"\u003ctitle\u003e\" and \"\u003cduedate\u003e\" and \"\u003cclosedate\u003e\" and\"\u003cdescription\u003e\" and \"\u003ctype\u003e\" and \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save task",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "take Screenshot",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "to-test-the-task-page;to-fill-the-task-page;",
  "rows": [
    {
      "cells": [
        "title",
        "duedate",
        "closedate",
        "description",
        "type",
        "status"
      ],
      "line": 21,
      "id": "to-test-the-task-page;to-fill-the-task-page;;1"
    },
    {
      "cells": [
        "Anu title",
        "06/25/2019 09:30",
        "12/30/2019 10:30",
        "comments",
        "Complaint",
        "Awaiting input"
      ],
      "line": 22,
      "id": "to-test-the-task-page;to-fill-the-task-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "User is logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on free crm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters email \"anu1311balas@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters password \"Anajay123$\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is on free crm home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click navigate to task page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click add new task",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.setup()"
});
formatter.result({
  "duration": 8791668900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anu1311balas@gmail.com",
      "offset": 19
    }
  ],
  "location": "LoginStepDefinition.enterEmail(String)"
});
formatter.result({
  "duration": 326909400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anajay123$",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.enterPassword(String)"
});
formatter.result({
  "duration": 158017200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login()"
});
formatter.result({
  "duration": 92693000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.loggedOn()"
});
formatter.result({
  "duration": 2190947900,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDefinition.clickTasks()"
});
formatter.result({
  "duration": 1519544400,
  "status": "passed"
});
formatter.match({
  "location": "TaskStepDefinition.click_add_new_task()"
});
formatter.result({
  "duration": 147550800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "To fill_the_task Page",
  "description": "",
  "id": "to-test-the-task-page;to-fill-the-task-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "fill_the_task details \"Anu title\" and \"06/25/2019 09:30\" and \"12/30/2019 10:30\" and\"comments\" and \"Complaint\" and \"Awaiting input\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save task",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "take Screenshot",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Anu title",
      "offset": 23
    },
    {
      "val": "06/25/2019 09:30",
      "offset": 39
    },
    {
      "val": "12/30/2019 10:30",
      "offset": 62
    },
    {
      "val": "comments",
      "offset": 84
    },
    {
      "val": "Complaint",
      "offset": 99
    },
    {
      "val": "Awaiting input",
      "offset": 115
    }
  ],
  "location": "TaskStepDefinition.fill_task_details(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 4793615000,
  "status": "passed"
});
formatter.match({
  "location": "TaskStepDefinition.save_task()"
});
formatter.result({
  "duration": 97496500,
  "status": "passed"
});
formatter.match({
  "location": "FormStepDefinition.take_Screenshot()"
});
formatter.result({
  "duration": 1412255000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.tearDown()"
});
formatter.result({
  "duration": 774474500,
  "status": "passed"
});
});