package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import junit.framework.Assert;

public class AddAccountPage extends TestBase{
	
	public AddAccountPage(WebDriver driver) {
		TestBase.driver = driver;
	}
	
	// WebElements
	@FindBy(how = How.XPATH, using = "//span[contains(text(), 'Dashboard')]")
	WebElement DASHBOARD_HEADER_ELEM;
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/a/span[1]")
	WebElement BankCash_ELEM;
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a")
	WebElement New_Account_ELEM;
	@FindBy(how = How.XPATH, using = "//*[@id=\"account\"]")
	WebElement Account_Title_ELEM;
	@FindBy(how = How.XPATH, using = "//input[@id= 'description']")
	WebElement Description_ELEM;
	@FindBy(how = How.XPATH, using = "//input[@id= 'balance']")
	WebElement Balance_ELEM;
	@FindBy(how = How.XPATH, using = "//input[@id= 'account_number']")
	WebElement AccountNumber_ELEM;
	@FindBy(how = How.XPATH, using = "//input[@id= 'contact_person']")
	WebElement ContactPerson_ELEM;
	@FindBy(how = How.XPATH, using = "//input[@id= 'contact_phone']")
	WebElement PHONE_ELEM;
	@FindBy(how = How.XPATH, using = "//input[@id= 'ib_url']")
	WebElement BankingURL_ELEM;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button")
	WebElement Submit_Button_ELEM;

	// Interactable Methods
	
	public void clickOnBankCash() {
		BankCash_ELEM.click();
	}

	public void clickNewAccount() {
		New_Account_ELEM.click();
	}

	public void enterAccountTitle(String accountTitle) throws InterruptedException {
		Thread.sleep(2000);
		int randNum = randomNumGen();
		Account_Title_ELEM.sendKeys(accountTitle + randNum);
		
	}

	public void enterDescription(String description) {
		Description_ELEM.sendKeys(description);
		
	}

	public void enterBalance(String initialBalance) {
		Balance_ELEM.sendKeys(initialBalance);
		
	}

	public void enterAccountNumber(String accountNumber) {
		AccountNumber_ELEM.sendKeys(accountNumber);
		
	}

	public void enterContactPerson(String contactPerson) {
		ContactPerson_ELEM.sendKeys(contactPerson);
		
	}

	public void enterPhoneNum(String Phone) {
		PHONE_ELEM.sendKeys(Phone);
		
	}

	public void enterBankingURL(String internetBankingURL) {
		BankingURL_ELEM.sendKeys(internetBankingURL);
		
	}

	public void ClickOnSubmit() {
		Submit_Button_ELEM.click();

	}

	public String getPageTitle() {
		return driver.getTitle();
	}
}
