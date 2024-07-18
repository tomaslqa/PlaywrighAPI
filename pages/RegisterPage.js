exports.RegisterPage = class RegisterPage {

    constructor(page) {

        this.page = page;
        this.title = page.getByText('Sign up');
        this.logo = page.locator('//*[@class="logo-wrapper"]');
        this.txtName = page.getByRole('input', { id: 'input-33' });
        this.txtSurname = page.getByRole('input', { id: 'input-35' });
        this.txtEmail = page.getByRole('input', { id: 'input-37' });
        this.txtPhone = page.getByRole('input', { id: 'input-39' });
        this.txtAddress = page.getByRole('input', { id: 'input-41' });
        this.txtPassword = page.getByRole('input', { id: 'input-43' });
        this.txtConfirmPassword = page.getByRole('input', { id: 'input-45' });
        this.newsletterCheckbox = page.getByRole('checkbox', { id: 'checkbox-47' });
        this.signUpBtn = page.locator('//button[contains(. ,"SIGN UP")]');
        this.haveAccLogInLink = page.getByText("Already have an account? Login");

    }
    async enterFirstName(name){
        this.txtName.fill(name);

    }
    async enterLastName(surname){
        this.txtSurame.fill(surname);

    }
    async enterEmail(email){
        this.txtEmail.fill(email);

    }

    async enterPhoneNumber(phoneNmb){
        this.txtPhone.fill(phoneNmb);

    }
    async enterAdress(address){
        this.txtAddress.fill(address);

    }
    async enterPassword(pwd){
        this.txtPassword.fill(pwd);

    }

    async enterConfirmationPassword(confirmPwd){
        this.txtConfirmPassword.fill(confirmPwd);

    }

       async CheckNewsletterBox() {
        await this.newsletterCheckbox.click();
    }

    async ClickRegisterButton() {
        await this.signUpBtn.click();
        //await expect.soft(this.loginBtn).toBeHidden();
    }
    
    async clickHaveAccLoginLink() {
        this.haveAccLogInLink.click();
    }


}
