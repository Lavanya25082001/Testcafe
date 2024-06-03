const{Selector} =require("testcafe");
import loginPage from "../pages/loginPage";
const data =require("../Data/data.json")

fixture `LoginSuite` .page("https://magento.softwaretestingboard.com/")

test("LoginWith valid credentials", async t =>{
    loginPage.login(data.validCredentials.username,data.validCredentials.password)
    await t.expect(loginPage.welcomeText.innerText).contains(data.TextValidation.name)
    loginPage.logout()
})
test("LoginWith Invalid credentials", async t =>{
    loginPage.login(data.invalidCredentials.username, data.invalidCredentials.password)
    await t.wait(data.Time_waits.small_wait)
    await t.expect(await loginPage.ErrorMsg.visible).ok('Error message is visible')

})

test("Login without data", async y=>{
    loginPage.login(" "," ")
    await y.wait(data.Time_waits.large_wait)
    await y.expect(await loginPage.emailerrorMsg.textContent).contains(data.TextValidation.errorRequiredfield)
})