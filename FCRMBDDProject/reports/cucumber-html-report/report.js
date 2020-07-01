$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/form3.feature");
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@First"
    }
  ]
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
        "comments"
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
  "duration": 8535152400,
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
  "duration": 301981500,
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
  "duration": 156003000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login()"
});
formatter.result({
  "duration": 87788800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.loggedOn()"
});
formatter.result({
  "duration": 1962715100,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDefinition.clickForms()"
});
formatter.result({
  "duration": 1502449400,
  "status": "passed"
});
formatter.match({
  "location": "FormStepDefinition.click_add_new_form()"
});
formatter.result({
  "duration": 108145200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "To fill_the_Form Page",
  "description": "",
  "id": "to-test-the-form-page;to-fill-the-form-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "fill_the_form details \"Anu Form\" and  \"False\" and \"Introduction\" and \"comments\"",
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
      "val": "comments",
      "offset": 70
    }
  ],
  "location": "FormStepDefinition.fill_the_form_details(String,String,String,String)"
});
formatter.result({
  "duration": 601853600,
  "status": "passed"
});
formatter.match({
  "location": "FormStepDefinition.save_form()"
});
formatter.result({
  "duration": 87850000,
  "status": "passed"
});
formatter.match({
  "location": "FormStepDefinition.take_Screenshot()"
});
formatter.result({
  "duration": 1374514200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.tearDown()"
});
formatter.result({
  "duration": 830138000,
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
  "duration": 7643322500,
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
  "duration": 247428800,
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
  "duration": 154139200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login()"
});
formatter.result({
  "duration": 80282200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.loggedOn()"
});
formatter.result({
  "duration": 1742660900,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDefinition.clickForms()"
});
formatter.result({
  "duration": 1493628100,
  "status": "passed"
});
formatter.match({
  "location": "FormStepDefinition.click_add_new_form()"
});
formatter.result({
  "duration": 127439300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "To fill_the_Form Page",
  "description": "",
  "id": "to-test-the-form-page;to-fill-the-form-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@First"
    }
  ]
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
  "duration": 448554400,
  "status": "passed"
});
formatter.match({
  "location": "FormStepDefinition.save_form()"
});
formatter.result({
  "duration": 71240900,
  "status": "passed"
});
formatter.match({
  "location": "FormStepDefinition.take_Screenshot()"
});
formatter.result({
  "duration": 1392517600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.tearDown()"
});
formatter.result({
  "duration": 685298300,
  "status": "passed"
});
});