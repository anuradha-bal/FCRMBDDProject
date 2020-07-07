Feature: To test the Document Page

Background: User is logged in
Given user is on free crm login page
When user enters email "anu1311balas@gmail.com"
And user enters password "Anajay123$"
And user clicks on login button
Then user is on free crm home page
Then click navigate to documents page
Then click the add new document

Scenario Outline: To fill the document page
Then take Document Screenshot

Examples:
|title|description|identifier|
|Database|Success|sangitakpadhy|

