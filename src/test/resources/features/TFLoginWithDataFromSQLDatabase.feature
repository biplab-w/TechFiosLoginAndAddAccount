#Home work(Due on 05/20/2023 Saturday 09:00 am CST):
#Automate the following scenario by creating a new feature using Cucumber 
#BDD Framework
#(which was built in class#11 & 12) drive the data 
#from Examples and push the code to your own github/bitbucket repository
#and email the project URL to mdislam@live.com
#
#
#Feature: Techfios Other billing login page functionality validation
#
 #Background: 
    #Given User is on the techfios login page
#@LoginScenarioAndAddAccount
#Scenario Outline: User should be able to login with valid credentials and open a new account	
#	When User enters the <username> in the "username" field
#	When User enters the <password> in the "password" field
#	And User clicks on "login"
#	Then User should land on Dashboard page 
#	And User clicks on "bankCash"
#	And User clicks on "newAccount"
#	And User enters <accountTitle> in the "accountTitle" field in accounts page
#	And User enters <description> in the "description" field in accounts page
#	And User enters <initialBalance> in the "initialBalance" field in accounts page 
#	And User enters <accountNumber> in the "accountNumber" field in accounts page
#	And User enters <contactPerson> in the "contactPerson" field in accounts page
#	And User enters <phone> in the "Phone" field in accounts page
#	And User enters <internetBankingURL> in the "internetBankingURL" field in accounts page
#	And User clicks on "submit"
#	Then User should be able to validate account created successfully
#	
#Examples: 
#|username |password |accountTitle |description |initialBalance |accountNumber |contactPerson | phone |internetBankingURL|
#|"demo@techfios.com" | "558566" | "Biplab Wagle"| "saving" | "10000" | "543211" |"Biplab" |"123-456-7890" |"https://techfios.com/billing/?ng=accounts/add/"|
