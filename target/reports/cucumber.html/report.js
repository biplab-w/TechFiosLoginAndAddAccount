$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/LoginAndAddingAccount.feature");
formatter.feature({
  "name": "Techfios Other billing login page functionality validation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginScenarioAndAddAccount"
    }
  ]
});
formatter.step({
  "name": "User enters the \u003cusername\u003e in the \"username\" field",
  "keyword": "When "
});
formatter.step({
  "name": "User enters the \u003cpassword\u003e in the \"password\" field",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on \"bankCash\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on \"newAccount\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \u003caccountTitle\u003e in the \"accountTitle\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \u003cdescription\u003e in the \"description\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \u003cinitialBalance\u003e in the \"initialBalance\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \u003caccountNumber\u003e in the \"accountNumber\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \u003ccontactPerson\u003e in the \"contactPerson\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \u003cphone\u003e in the \"Phone\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \u003cinternetBankingURL\u003e in the \"internetBankingURL\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "phone",
        "internetBankingURL"
      ]
    },
    {
      "cells": [
        "\"demo@techfios.com\"",
        "\"abc123\"",
        "\"Biplab Wagle\"",
        "\"saving\"",
        "\"10000\"",
        "\"543211\"",
        "\"Biplab\"",
        "\"123-456-7890\"",
        "\"https://techfios.com/billing/?ng\u003daccounts/add/\""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepsAndAddAccountDefinitionSteps.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginScenarioAndAddAccount"
    }
  ]
});
formatter.step({
  "name": "User enters the \"demo@techfios.com\" in the \"username\" field",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepsAndAddAccountDefinitionSteps.user_enters_the_in_the_field(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the \"abc123\" in the \"password\" field",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepsAndAddAccountDefinitionSteps.user_enters_the_in_the_field(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepsAndAddAccountDefinitionSteps.user_clicks_on_login(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepsAndAddAccountDefinitionSteps.user_should_land_on_the_dashboard_Page()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\n\tat steps.LoginStepsAndAddAccountDefinitionSteps.user_should_land_on_the_dashboard_Page(LoginStepsAndAddAccountDefinitionSteps.java:66)\n\tat ✽.User should land on Dashboard page(classpath:features/LoginAndAddingAccount.feature:18)\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on \"bankCash\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepsAndAddAccountDefinitionSteps.user_clicks_on_login(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on \"newAccount\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepsAndAddAccountDefinitionSteps.user_clicks_on_login(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Biplab Wagle\" in the \"accountTitle\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepsAndAddAccountDefinitionSteps.user_enters_int_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"saving\" in the \"description\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepsAndAddAccountDefinitionSteps.user_enters_int_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"10000\" in the \"initialBalance\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepsAndAddAccountDefinitionSteps.user_enters_int_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"543211\" in the \"accountNumber\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepsAndAddAccountDefinitionSteps.user_enters_int_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Biplab\" in the \"contactPerson\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepsAndAddAccountDefinitionSteps.user_enters_int_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"123-456-7890\" in the \"Phone\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepsAndAddAccountDefinitionSteps.user_enters_int_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"https://techfios.com/billing/?ng\u003daccounts/add/\" in the \"internetBankingURL\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepsAndAddAccountDefinitionSteps.user_enters_int_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepsAndAddAccountDefinitionSteps.user_clicks_on_login(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepsAndAddAccountDefinitionSteps.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});