import { test, expect } from '@playwright/test';
import { PetCleanupPage } from '../pages/PetCleanupPage';
import { HomePage } from '../pages/HomePage';


test('TC09 Sort products by price low to high', async ({ page }) => {

    const home = new HomePage(page);
    const cleanup = new PetCleanupPage(page);

    await page.goto(process.env.URL);
    await home.OpenPetCleanupCategory();
    new Promise(resolve => setTimeout(resolve, 1000));
    await page.waitForTimeout(3000);
    const prices=await cleanup.getListOfPrices();
    console.log("prices before sorting: "+prices);
    await cleanup.sortOrderBypriceAsc();
    await page.waitForTimeout(3000);
    const pricesSorted=await cleanup.getListOfPrices();
    console.log("prices after sorting low to high: "+pricesSorted);
    expect(await cleanup.checkAscPriceOrder(pricesSorted)).toBe("true");
    });

    test('TC10 Sort products by price high to low', async ({ page }) => {

      const home = new HomePage(page);
      const cleanup = new PetCleanupPage(page);
  
      await page.goto(process.env.URL);
      await home.OpenPetCleanupCategory();
      new Promise(resolve => setTimeout(resolve, 1000));
      await page.waitForTimeout(3000);
      const prices=await cleanup.getListOfPrices();
      console.log("prices before sorting: "+prices);
      await cleanup.sortOrderBypriceDesc();
      await page.waitForTimeout(3000);
      const pricesSorted=await cleanup.getListOfPrices();
      console.log("prices after sorting high to low: "+pricesSorted);
      expect(await cleanup.checkDescPriceOrder(pricesSorted)).toBe("true");
      });