import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
const testData = JSON.parse(JSON.stringify(require('../test-data/testdata_users.json')));

test.describe("TC01 Login test for all users", function () {

    for (const data of testData) {
        new Promise(resolve => setTimeout(resolve, 40000));
        test.describe(`Login with valid credentials for user ${data.first_name} ${data.last_name}`, function () {
            test(`Login for user email ${data.email}`, async ({ page }) => {

                const home = new HomePage(page);
                const login = new LoginPage(page);

                await page.goto(process.env.URL);
                await home.ClickLoginBtn();
                await login.EnterLoginDetails(data.email, process.env.USER_PWD);
                const responsePromise = page.waitForResponse(resp => resp.url().includes('/api/v1/user/login'));
                await login.loginBtn.click({ timeout: 1000 });
                const resp = await responsePromise;
                await expect(resp.status()).toBe(200);
            });
        });
    }
});
  