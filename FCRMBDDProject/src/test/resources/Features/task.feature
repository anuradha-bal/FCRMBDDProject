Feature: To test the Task Page
Description: The purpose is to fill the Tasks Page

Background: User is logged in
Given user is on free crm login page
When user enters email "anu1311balas@gmail.com"
And user enters password "Anajay123$"
And user clicks on login button
Then user is on free crm home page
Then click navigate to task page
Then click add new task


Scenario Outline: To fill_the_task Page
Then fill_the_task details "<title>" and "<duedate>" and "<closedate>" and"<description>" and "<type>" and "<status>"
Then save task
Then take Screenshot
Then close the browser

Examples:
|title|duedate|closedate|description|type|status|
|Anu title|06/25/2019 09:30|12/30/2019 10:30|comments|Complaint|Awaiting input|