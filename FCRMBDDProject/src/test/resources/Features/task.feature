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

Scenario Outline: To validate Task functionality
Given Task page is launched
Then fill the task details "<NewTitle>" and "<AssignedTo>" and "<DueDate>" and "<Deal>" and "<CloseDate>" and "<Description>" and "<Completion>" and "<Status>" and "<Type>" and "<Contact>" and "<Case>" and "<Tags>" and "<Priority>" and "<Identifier>"
Then click save task
Then take Screenshot
Then close the browser

Examples:
|NewTitle|AssignedTo|DueDate|Deal|CloseDate|Description|Completion|Status|Type|Contact|Case|Tags|Priority|Identifier|
|Tester|Krishna Tad|9/10/2019 09:30|Important|9/11/2019 10:30|For testing purpose|Tommorow|Enquiring|General Support|Jasmin|Normal|Test|Normal|krishna|
|Developer|Krishna Tad|11/12/2020 14:00|Not Important|11/13/2020 15:30|For developing  purpose|Day after day|Reviewing|Technical Support|urgent|High|Test1|Medium|kumari|