$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/login.feature");
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
  "duration": 7576278200,
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
  "duration": 311414700,
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
  "duration": 155909700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login()"
});
formatter.result({
  "duration": 85107300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.loggedOn()"
});
formatter.result({
  "duration": 2175563400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.tearDown()"
});
formatter.result({
  "duration": 672523100,
  "status": "passed"
});
});