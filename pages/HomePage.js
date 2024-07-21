exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.loginBtn = page.locator('//button[contains(. ,"LOGIN")]');
    }

    async ClickLoginBtn() {
        await this.loginBtn.click();
    }


}
