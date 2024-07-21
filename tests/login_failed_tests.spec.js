import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test('User Login with invalid email', async ({ page }) => {

    const home = new HomePage(page);
    const login = new LoginPage(page);

    await page.goto(process.env.URL);
    await home.ClickLoginBtn();
    await login.EnterLoginDetails("123", process.env.USER_PWD);
    const responsePromise = page.waitForResponse(resp => resp.url().includes('/api/v1/user/login'));
    await login.loginBtn.click({ timeout: 10000 });
    const resp = await responsePromise;
    expect(resp.status()).toBe(422);
});