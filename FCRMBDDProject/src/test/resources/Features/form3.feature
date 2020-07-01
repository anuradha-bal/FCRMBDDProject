Feature: To test the Form Page
Description: The purpose is to fill the Forms Page

Background: User is logged in
Given user is on free crm login page
When user enters email "anu1311balas@gmail.com"
And user enters password "Anajay123$"
And user clicks on login button
Then user is on free crm home page
Then click navigate to forms page
Then click add new form

@First
Scenario Outline: To fill_the_Form Page
Then fill_the_form details "<name>" and  "<isActive>" and "<intro>" and "<completion>"
Then save form
Then take Screenshot
Then close the browser

Examples:
|name|isActive|intro|completion|
|Anu Form|False|Introduction|comments|
|Ajay|True|Details|comments|