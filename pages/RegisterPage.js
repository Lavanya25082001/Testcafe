import { Selector, t } from "testcafe";
import getElementByXPath from '../utils';
import { faker } from '@faker-js/faker';

class RegisterPage{
    constructor(){
        this.createAccountBtn = getElementByXPath("(//a[text()='Create an Account'])[1]")
        this.firstname=Selector("#firstname")
        this.lastname=Selector("#lastname")
        this.emailAddress=Selector("#email_address")
        this.password=Selector('#password')
        this.Cpassword=Selector('#password-confirmation')
        this.emailerrorMsg=Selector('#email-error')
        this.createAccount=Selector('.submit')
        this.errorMsg=Selector('.page')
        this.header=Selector('.page')
        this.firstnameError=Selector("#firstname-error")
        this.lastnameError=Selector("#lastname-error")
        this.emailError=Selector("#email_address-error")
        this.passwordError=Selector("#password-error")
        this.CpasswordError=Selector("#password-confirmation-error")
    }

    async CreateNewAcccount(firstname, lastname, email, password, Cpassword){
        await t
            .maximizeWindow()
            .click(this.createAccountBtn)
            .typeText(this.firstname, firstname)
            .typeText(this.lastname, lastname)
            .typeText(this.emailAddress, email)
            .typeText(this.password, password)
            .typeText(this.Cpassword, Cpassword)
            .click(this.createAccount)
    }

    generateFakeUser() {
        // Generate fake user data
        const firstName = faker.person.firstName(); 
        const lastName =faker.person.lastName();
        const email = `${firstName}@gmail.com`;
        const password = `${lastName}@1234`
        

        return {
            firstName,
            lastName,
            email,
            password
        };
    }
}
export default new RegisterPage();