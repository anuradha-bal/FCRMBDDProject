Feature: To Test the Email Page of FreeCRM

Background: User is Logged in
Given user is on free crm login page
When user enters email "anu1311balas@gmail.com"
And  user enters password "Anajay123$"
When user clicks on login button
Then user is on free crm home page
Then click navigate to emails page 


@EmailPage
Scenario Outline: To Fill the compose and email_template details
Then click on menu
Then click on email_template
And click New_Content_Template
Then Fill the details "<name>" and "<type>" and "<sub>" and "<message>"
Then click save
And Take the Screenshot
Then click navigate to emails page 
Then Click on Compose
Then Fill the compose deatils "<transport>" and "<cc>" and  "<bcc>" and "<subject>" and "<template>" and "<body>"
Then Click on Send
And Take Screenshot
Then close the browser

Examples:
|name |type |sub|message|transport|cc|bcc|subject|template|body|
|Geetu|Email|Reaching out about QA Role|Hi, This is Geetu|Google: sangitakpadhy@gmail.com|def@gmail.com|ijk@gmail.com|Reaching out about QA Role|Geetu|Hi, This is Sangita|

