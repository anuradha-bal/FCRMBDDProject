$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01login.feature");
formatter.feature({
  "line": 1,
  "name": "To Launch CRM Application Home Page",
  "description": "",
  "id": "to-launch-crm-application-home-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Login Page",
  "description": "",
  "id": "to-launch-crm-application-home-page;free-crm-login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on free crm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters email \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters password \"\u003cpassword\u003e\"",
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
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "to-launch-crm-application-home-page;free-crm-login-page;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 13,
      "id": "to-launch-crm-application-home-page;free-crm-login-page;;1"
    },
    {
      "cells": [
        "anu1311balas@gmail.com",
        "Anajay123$"
      ],
      "line": 14,
      "id": "to-launch-crm-application-home-page;free-crm-login-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Free CRM Login Page",
  "description": "",
  "id": "to-launch-crm-application-home-page;free-crm-login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on free crm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters email \"anu1311balas@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters password \"Anajay123$\"",
  "matchedColumns": [
    1
  ],
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
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.setup()"
});
formatter.result({
  "duration": 10704688900,
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
  "duration": 350635100,
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
  "duration": 183790000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login()"
});
formatter.result({
  "duration": 93764800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.loggedOn()"
});
formatter.result({
  "duration": 2764279600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.tearDown()"
});
formatter.result({
  "duration": 788885500,
  "status": "passed"
});
formatter.uri("02home.feature");
formatter.feature({
  "line": 1,
  "name": "To test the Home Page",
  "description": "",
  "id": "to-test-the-home-page",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Login to Free crm",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on free crm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters email \"anu1311balas@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters password \"Anajay123$\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is on free crm home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.setup()"
});
formatter.result({
  "duration": 9689756500,
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
  "duration": 350641400,
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
  "duration": 208372500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login()"
});
formatter.result({
  "duration": 122300400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.loggedOn()"
});
formatter.result({
  "duration": 2577793200,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Navigate to tasks page",
  "description": "",
  "id": "to-test-the-home-page;navigate-to-tasks-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "click navigate to task page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeStepDefinition.clickTasks()"
});
formatter.result({
  "duration": 1585966600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.tearDown()"
});
formatter.result({
  "duration": 801328100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login to Free crm",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on free crm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters email \"anu1311balas@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters password \"Anajay123$\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is on free crm home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.setup()"
});
formatter.result({
  "duration": 7731676600,
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
  "duration": 374181500,
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
  "duration": 204391800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login()"
});
formatter.result({
  "duration": 111499700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.loggedOn()"
});
formatter.result({
  "duration": 2379815500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Navigate to cases page",
  "description": "",
  "id": "to-test-the-home-page;navigate-to-cases-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "click navigate to cases page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeStepDefinition.clickCases()"
});
formatter.result({
  "duration": 1547074200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.tearDown()"
});
formatter.result({
  "duration": 727692500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login to Free crm",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on free crm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters email \"anu1311balas@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters password \"Anajay123$\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is on free crm home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.setup()"
});
formatter.result({
  "duration": 9481704000,
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
  "duration": 336804700,
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
  "duration": 217158000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login()"
});
formatter.result({
  "duration": 90308800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.loggedOn()"
});
formatter.result({
  "duration": 1997077300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Navigate to calls page",
  "description": "",
  "id": "to-test-the-home-page;navigate-to-calls-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "click navigate to calls page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeStepDefinition.clickCalls()"
});
formatter.result({
  "duration": 1517499800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.tearDown()"
});
formatter.result({
  "duration": 1070720600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login to Free crm",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on free crm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters email \"anu1311balas@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters password \"Anajay123$\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is on free crm home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.setup()"
});
formatter.result({
  "duration": 9450647800,
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
  "duration": 312021400,
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
  "duration": 235517800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login()"
});
formatter.result({
  "duration": 98278500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.loggedOn()"
});
formatter.result({
  "duration": 1921892600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Navigate to documents page",
  "description": "",
  "id": "to-test-the-home-page;navigate-to-documents-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "click navigate to documents page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeStepDefinition.clickDocuments()"
});
formatter.result({
  "duration": 1591253000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.tearDown()"
});
formatter.result({
  "duration": 750475800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login to Free crm",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on free crm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters email \"anu1311balas@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters password \"Anajay123$\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is on free crm home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.setup()"
});
formatter.result({
  "duration": 8346439600,
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
  "duration": 362198400,
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
  "duration": 206982400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login()"
});
formatter.result({
  "duration": 109827800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.loggedOn()"
});
formatter.result({
  "duration": 1975069700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Navigate to emails page",
  "description": "",
  "id": "to-test-the-home-page;navigate-to-emails-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "click navigate to emails page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeStepDefinition.clickEmails()"
});
formatter.result({
  "duration": 1566001300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.tearDown()"
});
formatter.result({
  "duration": 776522600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login to Free crm",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on free crm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters email \"anu1311balas@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters password \"Anajay123$\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is on free crm home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.setup()"
});
formatter.result({
  "duration": 7642692100,
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
  "duration": 352476400,
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
  "duration": 212384400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login()"
});
formatter.result({
  "duration": 102233600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.loggedOn()"
});
formatter.result({
  "duration": 2132994000,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Navigate to forms page",
  "description": "",
  "id": "to-test-the-home-page;navigate-to-forms-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "click navigate to forms page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeStepDefinition.clickForms()"
});
formatter.result({
  "duration": 1613085500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.tearDown()"
});
formatter.result({
  "duration": 738729700,
  "status": "passed"
});
formatter.uri("03task.feature");
formatter.feature({
  "line": 1,
  "name": "To test the Task Page",
  "description": "Description: The purpose is to fill the Tasks Page",
  "id": "to-test-the-task-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "To validate Task functionality",
  "description": "",
  "id": "to-test-the-task-page;to-validate-task-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Task page is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "fill the task details \"\u003cNewTitle\u003e\" and \"\u003cAssignedTo\u003e\" and \"\u003cDueDate\u003e\" and \"\u003cDeal\u003e\" and \"\u003cCloseDate\u003e\" and \"\u003cDescription\u003e\" and \"\u003cCompletion\u003e\" and \"\u003cStatus\u003e\" and \"\u003cType\u003e\" and \"\u003cContact\u003e\" and \"\u003cCase\u003e\" and \"\u003cTags\u003e\" and \"\u003cPriority\u003e\" and \"\u003cIdentifier\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "click save task",
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
  "id": "to-test-the-task-page;to-validate-task-functionality;",
  "rows": [
    {
      "cells": [
        "NewTitle",
        "AssignedTo",
        "DueDate",
        "Deal",
        "CloseDate",
        "Description",
        "Completion",
        "Status",
        "Type",
        "Contact",
        "Case",
        "Tags",
        "Priority",
        "Identifier"
      ],
      "line": 21,
      "id": "to-test-the-task-page;to-validate-task-functionality;;1"
    },
    {
      "cells": [
        "Tester",
        "Krishna Tad",
        "9/10/2019 09:30",
        "Important",
        "9/11/2019 10:30",
        "For testing purpose",
        "Tommorow",
        "Enquiring",
        "General Support",
        "Jasmin",
        "Normal",
        "Test",
        "Normal",
        "krishna"
      ],
      "line": 22,
      "id": "to-test-the-task-page;to-validate-task-functionality;;2"
    },
    {
      "cells": [
        "Developer",
        "Krishna Tad",
        "11/12/2020 14:00",
        "Not Important",
        "11/13/2020 15:30",
        "For developing  purpose",
        "Day after day",
        "Reviewing",
        "Technical Support",
        "urgent",
        "High",
        "Test1",
        "Medium",
        "kumari"
      ],
      "line": 23,
      "id": "to-test-the-task-page;to-validate-task-functionality;;3"
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
  "duration": 8722376700,
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
  "duration": 239277900,
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
  "duration": 158000500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login()"
});
formatter.result({
  "duration": 75645300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.loggedOn()"
});
formatter.result({
  "duration": 1348303900,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDefinition.clickTasks()"
});
formatter.result({
  "duration": 3621869000,
  "status": "passed"
});
formatter.match({
  "location": "TaskStepDefinition.click_add_new_task()"
});
formatter.result({
  "duration": 167828400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "To validate Task functionality",
  "description": "",
  "id": "to-test-the-task-page;to-validate-task-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Task page is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "fill the task details \"Tester\" and \"Krishna Tad\" and \"9/10/2019 09:30\" and \"Important\" and \"9/11/2019 10:30\" and \"For testing purpose\" and \"Tommorow\" and \"Enquiring\" and \"General Support\" and \"Jasmin\" and \"Normal\" and \"Test\" and \"Normal\" and \"krishna\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "click save task",
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
  "location": "TaskStepDefinition.task_page_is_launched()"
});
formatter.result({
  "duration": 25200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 23
    },
    {
      "val": "Krishna Tad",
      "offset": 36
    },
    {
      "val": "9/10/2019 09:30",
      "offset": 54
    },
    {
      "val": "Important",
      "offset": 76
    },
    {
      "val": "9/11/2019 10:30",
      "offset": 92
    },
    {
      "val": "For testing purpose",
      "offset": 114
    },
    {
      "val": "Tommorow",
      "offset": 140
    },
    {
      "val": "Enquiring",
      "offset": 155
    },
    {
      "val": "General Support",
      "offset": 171
    },
    {
      "val": "Jasmin",
      "offset": 193
    },
    {
      "val": "Normal",
      "offset": 206
    },
    {
      "val": "Test",
      "offset": 219
    },
    {
      "val": "Normal",
      "offset": 230
    },
    {
      "val": "krishna",
      "offset": 243
    }
  ],
  "location": "TaskStepDefinition.fill_the_task_details(String,String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 6177007000,
  "status": "passed"
});
formatter.match({
  "location": "TaskStepDefinition.save_task()"
});
formatter.result({
  "duration": 138294800,
  "status": "passed"
});
formatter.match({
  "location": "FormStepDefinition.take_Screenshot()"
});
formatter.result({
  "duration": 1390766100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.tearDown()"
});
formatter.result({
  "duration": 775927600,
  "status": "passed"
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
  "duration": 8673801500,
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
  "duration": 323956100,
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
  "duration": 213732500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login()"
});
formatter.result({
  "duration": 86857900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.loggedOn()"
});
formatter.result({
  "duration": 2406871800,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDefinition.clickTasks()"
});
formatter.result({
  "duration": 1552632500,
  "status": "passed"
});
formatter.match({
  "location": "TaskStepDefinition.click_add_new_task()"
});
formatter.result({
  "duration": 192590500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "To validate Task functionality",
  "description": "",
  "id": "to-test-the-task-page;to-validate-task-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Task page is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "fill the task details \"Developer\" and \"Krishna Tad\" and \"11/12/2020 14:00\" and \"Not Important\" and \"11/13/2020 15:30\" and \"For developing  purpose\" and \"Day after day\" and \"Reviewing\" and \"Technical Support\" and \"urgent\" and \"High\" and \"Test1\" and \"Medium\" and \"kumari\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "click save task",
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
  "location": "TaskStepDefinition.task_page_is_launched()"
});
formatter.result({
  "duration": 25600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Developer",
      "offset": 23
    },
    {
      "val": "Krishna Tad",
      "offset": 39
    },
    {
      "val": "11/12/2020 14:00",
      "offset": 57
    },
    {
      "val": "Not Important",
      "offset": 80
    },
    {
      "val": "11/13/2020 15:30",
      "offset": 100
    },
    {
      "val": "For developing  purpose",
      "offset": 123
    },
    {
      "val": "Day after day",
      "offset": 153
    },
    {
      "val": "Reviewing",
      "offset": 173
    },
    {
      "val": "Technical Support",
      "offset": 189
    },
    {
      "val": "urgent",
      "offset": 213
    },
    {
      "val": "High",
      "offset": 226
    },
    {
      "val": "Test1",
      "offset": 237
    },
    {
      "val": "Medium",
      "offset": 249
    },
    {
      "val": "kumari",
      "offset": 262
    }
  ],
  "location": "TaskStepDefinition.fill_the_task_details(String,String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 6141349700,
  "status": "passed"
});
formatter.match({
  "location": "TaskStepDefinition.save_task()"
});
formatter.result({
  "duration": 120340600,
  "status": "passed"
});
formatter.match({
  "location": "FormStepDefinition.take_Screenshot()"
});
formatter.result({
  "duration": 1439705900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.tearDown()"
});
formatter.result({
  "duration": 788942900,
  "status": "passed"
});
formatter.uri("04case.feature");
formatter.feature({
  "line": 1,
  "name": "To verify and validate all fields in Cases Module",
  "description": "Description: To verify Cases Page",
  "id": "to-verify-and-validate-all-fields-in-cases-module",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "To fill Cases page",
  "description": "",
  "id": "to-verify-and-validate-all-fields-in-cases-module;to-fill-cases-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "fill cases details \"\u003cTitle\u003e\" and \"\u003cAssigned\u003e\" and \"\u003cContact\u003e\" and \"\u003cCompany\u003e\" and \"\u003cDeal\u003e\" and \"\u003cType\u003e\" and \"\u003cDeadline\u003e\" and \"\u003cCloseDate\u003e\" and \"\u003cTags\u003e\" and \"\u003cDescription\u003e\" and \"\u003cPriority\u003e\" and \"\u003cStatus\u003e\" and \"\u003cIdentifier\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "save case",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "take case Screenshot",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "to-verify-and-validate-all-fields-in-cases-module;to-fill-cases-page;",
  "rows": [
    {
      "cells": [
        "Title",
        "Assigned",
        "Contact",
        "Company",
        "Deal",
        "Type",
        "Deadline",
        "CloseDate",
        "Tags",
        "Description",
        "Priority",
        "Status",
        "Identifier"
      ],
      "line": 21,
      "id": "to-verify-and-validate-all-fields-in-cases-module;to-fill-cases-page;;1"
    },
    {
      "cells": [
        "Ms Shilpa",
        "Anuradha Balasubramanian",
        "1234567",
        "ABC",
        "1",
        "Complaint",
        "05/07/2020 22:15",
        "07/07/2020 22:45",
        "First Deal",
        "Test",
        "Normal",
        "Enquiring",
        "Test1"
      ],
      "line": 22,
      "id": "to-verify-and-validate-all-fields-in-cases-module;to-fill-cases-page;;2"
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
  "name": "click navigate to cases page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click add new case",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.setup()"
});
formatter.result({
  "duration": 9970888700,
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
  "duration": 323291800,
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
  "duration": 185801800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login()"
});
formatter.result({
  "duration": 88190800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.loggedOn()"
});
formatter.result({
  "duration": 2092437300,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDefinition.clickCases()"
});
formatter.result({
  "duration": 1505850500,
  "status": "passed"
});
formatter.match({
  "location": "CaseStepDefinition.click_add_new_case()"
});
formatter.result({
  "duration": 159600500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "To fill Cases page",
  "description": "",
  "id": "to-verify-and-validate-all-fields-in-cases-module;to-fill-cases-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "fill cases details \"Ms Shilpa\" and \"Anuradha Balasubramanian\" and \"1234567\" and \"ABC\" and \"1\" and \"Complaint\" and \"05/07/2020 22:15\" and \"07/07/2020 22:45\" and \"First Deal\" and \"Test\" and \"Normal\" and \"Enquiring\" and \"Test1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "save case",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "take case Screenshot",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ms Shilpa",
      "offset": 20
    },
    {
      "val": "Anuradha Balasubramanian",
      "offset": 36
    },
    {
      "val": "1234567",
      "offset": 67
    },
    {
      "val": "ABC",
      "offset": 81
    },
    {
      "val": "1",
      "offset": 91
    },
    {
      "val": "Complaint",
      "offset": 99
    },
    {
      "val": "05/07/2020 22:15",
      "offset": 115
    },
    {
      "val": "07/07/2020 22:45",
      "offset": 138
    },
    {
      "val": "First Deal",
      "offset": 161
    },
    {
      "val": "Test",
      "offset": 178
    },
    {
      "val": "Normal",
      "offset": 189
    },
    {
      "val": "Enquiring",
      "offset": 202
    },
    {
      "val": "Test1",
      "offset": 218
    }
  ],
  "location": "CaseStepDefinition.fill_cases_details(String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 6754486600,
  "status": "passed"
});
formatter.match({
  "location": "CaseStepDefinition.save_case()"
});
formatter.result({
  "duration": 135330500,
  "status": "passed"
});
formatter.match({
  "location": "CaseStepDefinition.take_Screenshot()"
});
formatter.result({
  "duration": 1419946100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.tearDown()"
});
formatter.result({
  "duration": 733443000,
  "status": "passed"
});
formatter.uri("05email.feature");
formatter.feature({
  "line": 1,
  "name": "To Test the Email Page of FreeCRM",
  "description": "",
  "id": "to-test-the-email-page-of-freecrm",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "To Fill the compose and email_template details",
  "description": "",
  "id": "to-test-the-email-page-of-freecrm;to-fill-the-compose-and-email-template-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@EmailPage"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "click on menu",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click on email_template",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "click New_Content_Template",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Fill the details \"\u003cname\u003e\" and \"\u003ctype\u003e\" and \"\u003csub\u003e\" and \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click save",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Take the Screenshot",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click navigate to emails page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Click on Compose",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Fill the compose deatils \"\u003ctransport\u003e\" and \"\u003ccc\u003e\" and  \"\u003cbcc\u003e\" and \"\u003csubject\u003e\" and \"\u003ctemplate\u003e\" and \"\u003cbody\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click on Send",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Take Screenshot",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "to-test-the-email-page-of-freecrm;to-fill-the-compose-and-email-template-details;",
  "rows": [
    {
      "cells": [
        "name",
        "type",
        "sub",
        "message",
        "transport",
        "cc",
        "bcc",
        "subject",
        "template",
        "body"
      ],
      "line": 28,
      "id": "to-test-the-email-page-of-freecrm;to-fill-the-compose-and-email-template-details;;1"
    },
    {
      "cells": [
        "Geetu",
        "Email",
        "Reaching out about QA Role",
        "Hi, This is Geetu",
        "Google: sangitakpadhy@gmail.com",
        "def@gmail.com",
        "ijk@gmail.com",
        "Reaching out about QA Role",
        "Geetu",
        "Hi, This is Sangita"
      ],
      "line": 29,
      "id": "to-test-the-email-page-of-freecrm;to-fill-the-compose-and-email-template-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "User is Logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on free crm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters email \"anu1311balas@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters password \"Anajay123$\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user is on free crm home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click navigate to emails page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.setup()"
});
formatter.result({
  "duration": 8434101000,
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
  "duration": 283202700,
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
  "duration": 216942400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login()"
});
formatter.result({
  "duration": 144291700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.loggedOn()"
});
formatter.result({
  "duration": 1751331300,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDefinition.clickEmails()"
});
formatter.result({
  "duration": 1677842700,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "To Fill the compose and email_template details",
  "description": "",
  "id": "to-test-the-email-page-of-freecrm;to-fill-the-compose-and-email-template-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@EmailPage"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "click on menu",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click on email_template",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "click New_Content_Template",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Fill the details \"Geetu\" and \"Email\" and \"Reaching out about QA Role\" and \"Hi, This is Geetu\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click save",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Take the Screenshot",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click navigate to emails page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Click on Compose",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Fill the compose deatils \"Google: sangitakpadhy@gmail.com\" and \"def@gmail.com\" and  \"ijk@gmail.com\" and \"Reaching out about QA Role\" and \"Geetu\" and \"Hi, This is Sangita\"",
  "matchedColumns": [
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click on Send",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Take Screenshot",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "EmailStepDefinition.click_on_menu()"
});
formatter.result({
  "duration": 91433700,
  "status": "passed"
});
formatter.match({
  "location": "EmailStepDefinition.click_on_email_template()"
});
formatter.result({
  "duration": 137925400,
  "status": "passed"
});
formatter.match({
  "location": "EmailStepDefinition.click_New_Content_Template()"
});
formatter.result({
  "duration": 182939000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Geetu",
      "offset": 18
    },
    {
      "val": "Email",
      "offset": 30
    },
    {
      "val": "Reaching out about QA Role",
      "offset": 42
    },
    {
      "val": "Hi, This is Geetu",
      "offset": 75
    }
  ],
  "location": "EmailStepDefinition.fill_the_details_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 1356224900,
  "status": "passed"
});
formatter.match({
  "location": "EmailStepDefinition.click_save()"
});
formatter.result({
  "duration": 123577100,
  "status": "passed"
});
formatter.match({
  "location": "EmailStepDefinition.take_Screenshot1()"
});
formatter.result({
  "duration": 1389022600,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDefinition.clickEmails()"
});
formatter.result({
  "duration": 1458020600,
  "status": "passed"
});
formatter.match({
  "location": "EmailStepDefinition.click_on_Compose()"
});
formatter.result({
  "duration": 135125300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google: sangitakpadhy@gmail.com",
      "offset": 26
    },
    {
      "val": "def@gmail.com",
      "offset": 64
    },
    {
      "val": "ijk@gmail.com",
      "offset": 85
    },
    {
      "val": "Reaching out about QA Role",
      "offset": 105
    },
    {
      "val": "Geetu",
      "offset": 138
    },
    {
      "val": "Hi, This is Sangita",
      "offset": 150
    }
  ],
  "location": "EmailStepDefinition.fill_the_compose_deatils_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1599170500,
  "status": "passed"
});
formatter.match({
  "location": "EmailStepDefinition.click_on_Send()"
});
formatter.result({
  "duration": 106632200,
  "status": "passed"
});
formatter.match({
  "location": "EmailStepDefinition.take_Screenshot()"
});
formatter.result({
  "duration": 1506752700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.tearDown()"
});
formatter.result({
  "duration": 727556000,
  "status": "passed"
});
formatter.uri("06form.feature");
formatter.feature({
  "line": 1,
  "name": "To test the Form Page",
  "description": "Description: The purpose is to fill the Forms Page",
  "id": "to-test-the-form-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "To fill_the_Form Page",
  "description": "",
  "id": "to-test-the-form-page;to-fill-the-form-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "fill_the_form details \"\u003cname\u003e\" and  \"\u003cisActive\u003e\" and \"\u003cintro\u003e\" and \"\u003ccompletion\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save form",
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
  "id": "to-test-the-form-page;to-fill-the-form-page;",
  "rows": [
    {
      "cells": [
        "name",
        "isActive",
        "intro",
        "completion"
      ],
      "line": 21,
      "id": "to-test-the-form-page;to-fill-the-form-page;;1"
    },
    {
      "cells": [
        "Anu Form",
        "False",
        "Introduction",
        "Comments"
      ],
      "line": 22,
      "id": "to-test-the-form-page;to-fill-the-form-page;;2"
    },
    {
      "cells": [
        "Ajay",
        "True",
        "Details",
        "comments"
      ],
      "line": 23,
      "id": "to-test-the-form-page;to-fill-the-form-page;;3"
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
  "name": "click navigate to forms page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click add new form",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.setup()"
});
formatter.result({
  "duration": 7485826500,
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
  "duration": 285414000,
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
  "duration": 194433000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login()"
});
formatter.result({
  "duration": 108643200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.loggedOn()"
});
formatter.result({
  "duration": 2009753100,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDefinition.clickForms()"
});
formatter.result({
  "duration": 1529273200,
  "status": "passed"
});
formatter.match({
  "location": "FormStepDefinition.click_add_new_form()"
});
formatter.result({
  "duration": 106223700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "To fill_the_Form Page",
  "description": "",
  "id": "to-test-the-form-page;to-fill-the-form-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "fill_the_form details \"Anu Form\" and  \"False\" and \"Introduction\" and \"Comments\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save form",
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
      "val": "Anu Form",
      "offset": 23
    },
    {
      "val": "False",
      "offset": 39
    },
    {
      "val": "Introduction",
      "offset": 51
    },
    {
      "val": "Comments",
      "offset": 70
    }
  ],
  "location": "FormStepDefinition.fill_the_form_details(String,String,String,String)"
});
formatter.result({
  "duration": 830897600,
  "status": "passed"
});
formatter.match({
  "location": "FormStepDefinition.save_form()"
});
formatter.result({
  "duration": 80797900,
  "status": "passed"
});
formatter.match({
  "location": "FormStepDefinition.take_Screenshot()"
});
formatter.result({
  "duration": 1384460900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.tearDown()"
});
formatter.result({
  "duration": 770439900,
  "status": "passed"
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
  "name": "click navigate to forms page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click add new form",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.setup()"
});
formatter.result({
  "duration": 6921575700,
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
  "duration": 353301800,
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
  "duration": 175701900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login()"
});
formatter.result({
  "duration": 101363800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.loggedOn()"
});
formatter.result({
  "duration": 1999004800,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDefinition.clickForms()"
});
formatter.result({
  "duration": 1571484200,
  "status": "passed"
});
formatter.match({
  "location": "FormStepDefinition.click_add_new_form()"
});
formatter.result({
  "duration": 110707400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "To fill_the_Form Page",
  "description": "",
  "id": "to-test-the-form-page;to-fill-the-form-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "fill_the_form details \"Ajay\" and  \"True\" and \"Details\" and \"comments\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "save form",
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
      "val": "Ajay",
      "offset": 23
    },
    {
      "val": "True",
      "offset": 35
    },
    {
      "val": "Details",
      "offset": 46
    },
    {
      "val": "comments",
      "offset": 60
    }
  ],
  "location": "FormStepDefinition.fill_the_form_details(String,String,String,String)"
});
formatter.result({
  "duration": 492845100,
  "status": "passed"
});
formatter.match({
  "location": "FormStepDefinition.save_form()"
});
formatter.result({
  "duration": 86162100,
  "status": "passed"
});
formatter.match({
  "location": "FormStepDefinition.take_Screenshot()"
});
formatter.result({
  "duration": 1382353800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.tearDown()"
});
formatter.result({
  "duration": 738404400,
  "status": "passed"
});
});