const{Selector} =require("testcafe");
import { da } from "@faker-js/faker";
import registerPage from "../pages/RegisterPage";
const data =require("../Data/data.json")
fixture `RegisterSuite` .page("https://magento.softwaretestingboard.com/")

test("Create Account with random data", async t =>{
    await t.wait(data.Time_waits.large_wait)
    const registerData=registerPage.generateFakeUser();
    registerPage.CreateNewAcccount(registerData.firstName, registerData.lastName, registerData.email, registerData.password, registerData.password)
    const successMsg=data.TextValidation.successMsg
    await t.wait(data.Time_waits.large_wait)
    await t.expect(registerPage.header.innerText).contains(successMsg)
})
test("Create account with existing account", async t =>{
    registerPage.CreateNewAcccount(data.existingUserDetails.fname,data.existingUserDetails.laname,data.existingUserDetails.email,data.existingUserDetails.password,data.existingUserDetails.password)
    await t.wait(data.Time_waits.large_wait)
    const errorMsg=data.TextValidation.errorMsgExisting
    await t.expect(registerPage.errorMsg.innerText).contains(errorMsg)

})

test("Login without data", async t =>{
    const emptyData=data.existingUserDetails.empty
    registerPage.CreateNewAcccount(emptyData,emptyData,emptyData,emptyData,emptyData)
    await t.wait(data.Time_waits.large_wait)
    const error=data.TextValidation.errorRequiredfield
    await t.expect(await registerPage.firstnameError.textContent).contains(error)
    await t.expect(await registerPage.lastnameError.textContent).contains(error)
    await t.expect(await registerPage.emailError.textContent).contains(error)
    await t.expect(await registerPage.passwordError.textContent).contains(error)
    await t.expect(await registerPage.CpasswordError.textContent).contains(error)
})