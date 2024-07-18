exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page;
        this.title = page.getByText('Log In');
        this.logo = page.locator('//*[@class="logo-wrapper"]');
        this.txtEmail = page.getByRole('input', { id: 'input-25' });
        this.emailWarnMsg = page.getByRole('alert', { id: 'input-25-messages' });
        this.txtPassword = page.getByRole('input', { id: 'input-27' });
        this.passwordWarnMsg = page.getByRole('alert', { id: 'input-27-messages' });
        this.rememberMeCheckbox = page.getByRole('checkbox', { id: 'checkbox-29' });
        this.loginBtn = page.locator('//button[contains(. ,"Log in")]');
        this.forgotPasswordLink = page.getByText('Forgot password?');
        this.createAccountLink = page.getByText("Don't have an account? Sign up");

    }
    async openPage(url) {
        this.page.goto(url);
    }

    async EnterLoginDetails(username, password) {
        await expect.soft(this.title).toBeVisible();
        await this.email.fill(username);
        await this.password.fill(password);

    }

    async ClickLoginButton() {
        await this.loginBtn.click();
        //await expect.soft(this.loginBtn).toBeHidden();
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
        this.createAccountLink.click();
    }

    async clickForgotPasswordLink() {
        this.createAccountLink.click();
    }
}
