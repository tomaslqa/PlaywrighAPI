import { test, expect } from '@playwright/test';
import { PetCleanupPage } from '../pages/PetCleanupPage';
import { HomePage } from '../pages/HomePage';
const testData = JSON.parse(JSON.stringify(require('../test-data/testdata_products.json')));


test('TC07 Verify user can open product category page', async ({ page }) => {

    const home = new HomePage(page);
    const cleanup = new PetCleanupPage(page);

    await page.goto(process.env.URL);
    await home.OpenPetCleanupCategory();
    await page.waitForTimeout(3000);
    const title = await cleanup.categoryTitle.textContent();
    console.log("Category title is: " + title);
    expect(title).toEqual("pet clean-up and odor control");
});



test('TC08 Verify number of products by category', async ({ page }) => {

    const home = new HomePage(page);
    const cleanup = new PetCleanupPage(page);

    await page.goto(process.env.URL);
    await home.OpenPetCleanupCategory();
    new Promise(resolve => setTimeout(resolve, 500));
    const productCount = await cleanup.product.count();
    console.log("Number of products on page :" + productCount);
    const productServerCount = Object.keys(testData).length;
    console.log("Number of products from server :" + productServerCount);
    expect(productCount == productServerCount);
});
