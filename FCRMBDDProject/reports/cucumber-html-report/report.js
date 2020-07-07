$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("case.feature");
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
  "duration": 6571501600,
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
  "duration": 2022138200,
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
  "duration": 87429600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login()"
});
formatter.result({
  "duration": 71248200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.loggedOn()"
});
formatter.result({
  "duration": 1715803200,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepDefinition.clickCases()"
});
formatter.result({
  "duration": 1460713400,
  "status": "passed"
});
formatter.match({
  "location": "CaseStepDefinition.click_add_new_case()"
});
formatter.result({
  "duration": 72065700,
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
  "duration": 485640700,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-P2MFD5I\u0027, ip: \u0027192.168.1.175\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\anu13\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57646}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: ignore, webauthn:virtualAuthenticators: true}\nSession ID: 1d8a3420f927726bab0de6d653f21519\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"ui\"]/div/div[2]/div[2]/div/div[2]/form/div[2]/div[2]/div/div/input}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat com.pages.CasePage.setContact(CasePage.java:125)\r\n\tat com.pages.CasePage.fillCaseDetails(CasePage.java:105)\r\n\tat com.stepdefinition.CaseStepDefinition.fill_cases_details(CaseStepDefinition.java:45)\r\n\tat ✽.Then fill cases details \"Ms Shilpa\" and \"Anuradha Balasubramanian\" and \"1234567\" and \"ABC\" and \"1\" and \"Complaint\" and \"05/07/2020 22:15\" and \"07/07/2020 22:45\" and \"First Deal\" and \"Test\" and \"Normal\" and \"Enquiring\" and \"Test1\"(case.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CaseStepDefinition.save_case()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CaseStepDefinition.take_Screenshot()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.tearDown()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("document.feature");
formatter.feature({
  "line": 1,
  "name": "To test the Document Page",
  "description": "",
  "id": "to-test-the-document-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "To fill the document page",
  "description": "",
  "id": "to-test-the-document-page;to-fill-the-document-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "take Document Screenshot",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "to-test-the-document-page;to-fill-the-document-page;",
  "rows": [
    {
      "cells": [
        "title",
        "description",
        "identifier"
      ],
      "line": 16,
      "id": "to-test-the-document-page;to-fill-the-document-page;;1"
    },
    {
      "cells": [
        "Database",
        "Success",
        "sangitakpadhy"
      ],
      "line": 17,
      "id": "to-test-the-document-page;to-fill-the-document-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "User is logged in",
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
formatter.step({
  "line": 9,
  "name": "click navigate to documents page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click the add new document",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.setup()"
});
