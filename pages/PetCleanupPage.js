exports.PetCleanupPage = class PetCleanupPage {

  constructor(page) {

    this.page = page;
    this.title = page.getByText('Shop');
    this.categoryTitle = page.locator("//*[@class='shop__title']");
    this.productWrapper = page.locator("//*[@class='shop__products-wrapper']");
    this.product = page.locator("//*[@class='product-card']");
    this.price = page.locator("//*[@class='product-card__price mt-auto mb-1']");
    this.sortBy = page.locator("//*[@class='v-select__selection']");
    this.priceDesc = "Highest Price first";
    this.priceAsc = page.getByText("Lowest Price first");
  }

  async getListOfPrices() {
    const productPrices = await this.page.locator("//*[@class='product-card__price mt-auto mb-1']").all();
    const prices = await this.page.$$eval("//*[@class='product-card__price mt-auto mb-1']", elements => {
      return elements.map(element => {
        const text = element.innerText.trim();
        // Parse and clean price
        return parseFloat(text.replace(/[^0-9.-]+/g, ""));
      });
    });
    return prices;
  }

  async sortOrderBypriceAsc() {
    await this.sortBy.click();
    await this.priceAsc.click();
  }

  async sortOrderBypriceDesc() {
    await this.sortBy.click();
    await this.priceDesc.click();
  }

  async checkAscPriceOrder(prices) {
    for (let i = 1; i < prices.length; i++) {
      if (prices[i - 1] > prices[i]) {
        return false;
      }
    }
    return true;
  }

  async checkDescPriceOrder(prices) {
    for (let i = 1; i < prices.length; i++) {
      if (prices[i - 1] < prices[i]) {
        return false;
      }
    }
    return true;
  }
}