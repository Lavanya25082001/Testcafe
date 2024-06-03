import { Selector, t } from "testcafe";
import getElementByXPath from '../utils';

class LoginPage{
    constructor(){
        
        this.loginOptn=Selector(".authorization-link")
        this.emailField=Selector("#email")
        this.passwordField=Selector("#pass")
        this.signInBtn=Selector("#send2")
        this.welcomeText=Selector('.logged-in')
        this.ErrorMsg=Selector('.page')
        this.emailerrorMsg=Selector('#email-error')
        this.passwordError=Selector('#pass-error')
        this.logoutOptnarrow=Selector(".action switch")
        this.logoutButton = getElementByXPath("(//div[@class='customer-menu']//a[contains(text(),'Sign Out')])[1]");
    }

    async login(username, password){
        await t
            .maximizeWindow()
            .click(this.loginOptn)
            .typeText(this.emailField, username)
            .typeText(this.passwordField, password)
            .click(this.signInBtn)
           
    }

    async logout(){
        await t
        .click(this.logoutOptnarrow)
        .click(this.logoutButton)
    }
}
export default new LoginPage();