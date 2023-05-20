package steps;

import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pages.AddAccountPage;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepsAndAddAccountDefinitionSteps extends TestBase {
	LoginPage loginPage;
	AddAccountPage accountPage;
	
	@Before
	public void beforeRun() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		accountPage = PageFactory.initElements(driver, AddAccountPage.class);
	}

	@Given("User is on the techfios login page")
	public void user_is_on_the_techfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=admin/");
	}

	@When("User enters the {string} in the {string} field")
	public void user_enters_the_in_the_field(String text, String field) {
		if (field.toLowerCase().equals("username"))
			loginPage.enterUserName(text);
		else if (field.toLowerCase().equals("password"))
			loginPage.enterPassword(text);

	}

	@When("User clicks on {string}")
	public void user_clicks_on_login(String buttonType) {
		switch (buttonType) {
		case "login":
			loginPage.clickSignInButton();
			break;
		case "bankCash":
			accountPage.clickOnBankCash();
			break;
		case "newAccount":
			accountPage.clickNewAccount();
			break;
		case "submit":
			accountPage.ClickOnSubmit();
			break;
		default:
			break;
		}
	}

	@Then("User should land on Dashboard page")
	public void user_should_land_on_the_dashboard_Page() {
		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = loginPage.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
	}

	@And("User enters {string} in the {string} field in accounts page")
	public void user_enters_int_the_field_in_accounts_page(String value, String field) throws InterruptedException {
		switch (field) {
		case "accountTitle":
			accountPage.enterAccountTitle(value);
			break;
		case "description":
			accountPage.enterDescription(value);
			break;
		case "initialBalance":
			accountPage.enterBalance(value);
			break;
		case "accountNumber":
			accountPage.enterAccountNumber(value);
			break;
		case "contactPerson":
			accountPage.enterContactPerson(value);
			break;
		case "Phone":
			accountPage.enterPhoneNum(value);
			break;
		case "internetBankingURL":
			accountPage.enterBankingURL(value);
			break;
		default:
			break;
		}
	}

	@Then("User should be able to validate account created successfully")
	public void user_should_be_able_to_validate_account_created_successfully() {
		
	}

	@After
	public void closeBrowser() {
		tearDown();
	}
}
