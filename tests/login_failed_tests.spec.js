import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
const testData = JSON.parse(JSON.stringify(require('../test-data/testdata_users.json')));

test('TC02 User Login with invalid password', async ({ page }) => {

    const home = new HomePage(page);
    const login = new LoginPage(page);

    await page.goto(process.env.URL);
    await home.ClickLoginBtn();
    await login.EnterLoginDetails(testData[0].email, "testmypwd123");
    const responsePromise = page.waitForResponse(resp => resp.url().includes('/api/v1/user/login'));
    await login.loginBtn.click({ timeout: 10000 });
    const resp = await responsePromise;
    expect(resp.status()).toBe(422);
});

test('TC03 User Login with invalid email', async ({ page }) => {

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

test('TC05 User Login with invalid email and password', async ({ page }) => {

    const home = new HomePage(page);
    const login = new LoginPage(page);

    await page.goto(process.env.URL);
    await home.ClickLoginBtn();
    await login.EnterLoginDetails("email.123.j5@freemail.com", "testmypwd123");
    const responsePromise = page.waitForResponse(resp => resp.url().includes('/api/v1/user/login'));
    await login.loginBtn.click({ timeout: 10000 });
    const resp = await responsePromise;
    expect(resp.status()).toBe(422);
});


test('TC05 User Login with blank password', async ({ page }) => {

    const home = new HomePage(page);
    const login = new LoginPage(page);

    await page.goto(process.env.URL);
    await home.ClickLoginBtn();
    await login.EnterLoginDetails(testData[1].email, "");
    const responsePromise = page.waitForResponse(resp => resp.url().includes('/api/v1/user/login'));
    await login.loginBtn.click({ timeout: 10000 });
    const resp = await responsePromise;
    expect(resp.status()).toBe(500);
});

test('TC06 User Login with blank email', async ({ page }) => {

    const home = new HomePage(page);
    const login = new LoginPage(page);

    await page.goto(process.env.URL);
    await home.ClickLoginBtn();
    await login.EnterLoginDetails("", process.env.USER_PWD);
    const responsePromise = page.waitForResponse(resp => resp.url().includes('/api/v1/user/login'));
    await login.loginBtn.click({ timeout: 10000 });
    const resp = await responsePromise;
    expect(resp.status()).toBe(500);
});


