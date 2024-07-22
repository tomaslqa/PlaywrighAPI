exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page;
        this.title = page.getByText('Log In');
        this.logo = page.locator('//*[@class="logo-wrapper"]');
        this.txtEmail = page.locator("(//input[@type= 'text'])[2]");
        this.txtPassword = page.locator(("//input[@type= 'password']"));
        this.rememberMeCheckbox = page.locator("//input[@type= 'checkbox']");
        this.loginBtn = page.locator('//button[contains(. ,"Log in")]');
        this.forgotPasswordLink = page.getByText('Forgot password?');
        this.createAccountLink = page.getByText("Don't have an account? Sign up");

    }

    async EnterLoginDetails(username, password) {
        await this.txtEmail.fill(username);
        await this.txtPassword.fill(password);
    }

    async ClickLoginButton() {
        await this.loginBtn.click();
    }

    async CheckRememberMeBox() {
        await this.rememberMeCheckbox.click();
    }

    async CompleteLogin(username, password) {
        EnterLoginDetails(username, password)
        ClickLoginButton()
    }

    async CompleteLoginWithRememberMeOptionSElected(username, password) {
        EnterLoginDetails(username, password)
        CheckRememberMeBox()
        ClickLoginButton()
    }

    async clickCreateAccountLink() {
        await this.createAccountLink.click();
    }

    async clickForgotPasswordLink() {
        await this.createAccountLink.click();
    }
}
