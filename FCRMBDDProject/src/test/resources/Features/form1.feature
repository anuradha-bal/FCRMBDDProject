Feature: To test the Form Page

Scenario Outline: To Fill_the_FormPage
Given user is on free crm login page
When user enters email "anu1311balas@gmail.com"
And user enters password "Anajay123$"
And user clicks on login button
Then user is on free crm home page
Then click navigate to forms page
Then click add new form
Then fill_the_form details "<name>" and  "<isActive>" and "<intro>" and "<completion>"
Then save form
Then take Screenshot
Then close the browser


Examples:
|name|isActive|intro|completion|
|Anu Form|False|Introduction|comments|
|Ajay|True|Details|comments|