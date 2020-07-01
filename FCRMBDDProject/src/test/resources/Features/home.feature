Feature: To test the Home Page

Background: Login to Free crm
Given user is on free crm login page
When user enters email "anu1311balas@gmail.com"
And user enters password "Anajay123$"
And user clicks on login button
Then user is on free crm home page

Scenario: Navigate to tasks page
Then click navigate to task page
Then close the browser

Scenario: Navigate to cases page
Then click navigate to cases page
Then close the browser

Scenario: Navigate to calls page
Then click navigate to calls page
Then close the browser

Scenario: Navigate to documents page
Then click navigate to documents page
Then close the browser

Scenario: Navigate to emails page
Then click navigate to emails page
Then close the browser

Scenario: Navigate to forms page
Then click navigate to forms page
Then close the browser
