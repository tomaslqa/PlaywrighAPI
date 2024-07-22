import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
const testData = JSON.parse(JSON.stringify(require('../test-data/testdata_users.json')));

test(`TC01 Login with valid credentials for user ${testData[1].first_name} ${testData[1].last_name}`, async ({ page }) => {

    const home = new HomePage(page);
    const login = new LoginPage(page);
    console.log("User email: " + testData[1].email);
    await page.goto(process.env.URL);
    await home.ClickLoginBtn();
    await login.EnterLoginDetails(testData[1].email, process.env.USER_PWD);
    const responsePromise = page.waitForResponse(resp => resp.url().includes('/api/v1/user/login'));
    await login.loginBtn.click({ timeout: 1000 });
    const resp = await responsePromise;
    await expect(resp.status()).toBe(200);
});