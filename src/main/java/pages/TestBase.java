package pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBase {
	public static WebDriver driver;
	
	public static void initDriver() {
		System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		//Allocate 10 seconds to loading page
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
		//implicit wait on each element 
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		
	}
	
	public static int randomNumGen() {
		return (int) (Math.random()*100+1);
	}
	
	public static void tearDown() {
		try {
			Thread.sleep(3000);
		}
		 catch (InterruptedException e) {
			
			e.printStackTrace();
		}
		driver.close();
		driver.quit();
	}
}
