package com.stepdefinition;

import com.baseclass.Library;
import com.pages.DocumentListPage;
import com.pages.DocumentPage;

import cucumber.api.java.en.Then;

public class DocumentStepDefinition extends Library
{
    private DocumentPage docu;

    private DocumentPage getPage()
    {
        if (docu == null) {
            docu = new DocumentPage(driver);
        }
        return docu;
    }

    @Then("^click the add new document$")
    public void click_on_new_document()
    {
        DocumentListPage listPage = new DocumentListPage(driver);
        listPage.newDocument();
    }

    @Then("^fill document details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
    public void fillDocumentDetails(String title, String description, String identifier)
    {
        getPage().fillDocument(title, description, identifier);
    }

    @Then("^click on save document$")
    public void click_on_save()
    {
        getPage().saveDocument();
    }

    @Then("^take Document Screenshot$")
    public void take_Document_Screenshot()
    {
        seleniumutility.takeScreenshot("Document.png");
    }
}