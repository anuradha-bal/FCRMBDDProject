Feature: To verify and validate all fields in Cases Module
Description: To verify Cases Page

Background: User is logged in
Given user is on free crm login page
When user enters email "anu1311balas@gmail.com"
And user enters password "Anajay123$"
And user clicks on login button
Then user is on free crm home page
Then click navigate to cases page 
Then click add new case

Scenario Outline: To fill Cases page
Then fill cases details "<Title>" and "<Assigned>" and "<Contact>" and "<Company>" and "<Deal>" and "<Type>" and "<Deadline>" and "<CloseDate>" and "<Tags>" and "<Description>" and "<Priority>" and "<Status>" and "<Identifier>"
Then save case
Then take case Screenshot
Then close the browser


Examples:
|Title|Assigned|Contact| Company|Deal|Type|Deadline|CloseDate|Tags|Description|Priority|Status|Identifier|
|Ms Shilpa|Anuradha Balasubramanian|1234567|ABC|1|Complaint|05/07/2020 22:15|07/07/2020 22:45|First Deal|Test|Normal|Enquiring|Test1|

