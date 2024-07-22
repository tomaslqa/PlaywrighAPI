exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.loginBtn = page.locator('//button[contains(. ,"LOGIN")]');
        this.petCleanupLink = page.locator("(//*[contains (text(), 'pet clean-up and odor control')])[1]");
    }

    async ClickLoginBtn() {
        await this.loginBtn.click();
    }

    async OpenPetCleanupCategory() {
        await this.petCleanupLink.click();
    }


}
