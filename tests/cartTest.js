const{Selector} =require("testcafe");
import loginPage from "../pages/loginPage";
import cartPage from "../pages/cartPage"
const data =require("../Data/data.json")

fixture `CartSuite` .page("https://magento.softwaretestingboard.com/")

test.skip("Search with relevent data", async t =>{
    loginPage.login(data.validCredentials.username,data.validCredentials.password)
    await t.wait(data.Time_waits.small_wait)
    console.log(data.searchItems.releventItem,"+========++++++++++++++++++===============+++++++++++++")
    cartPage.searchWithItem(data.searchItems.releventItem)
    // console.log(cartPage.releventSearchItem.textContent,"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@=====================")
    // await t.expect(await cartPage.releventSearchItem.textContent).contains(data.searchItems.releventItemMsg)
    // loginPage.logout()
})
test.skip("Search with irrelevent data", async t =>{
    loginPage.login(data.validCredentials.username,data.validCredentials.password)
    await t.wait(data.Time_waits.small_wait)
    cartPage.searchWithItem(data.searchItems.irreleventItem)
    await t.expect(await cartPage.irreleventSearchMsg.textContent).contains(data.searchItems.irreleventItemMsg)
    loginPage.logout()
})

test.skip("Login without data", async t=>{
    loginPage.login(data.validCredentials.username,data.validCredentials.password)
    await t.wait(data.Time_waits.small_wait)
    cartPage.searchWithItem(data.existingUserDetails.empty)
    const isClickable = await cartPage.isElementClickable(cartPage.searchBtn);
    await t.expect(isClickable).notOk('Search button should not be clickable')
   
})

test("Add women's items to cart", async t=>{
   await  loginPage.login(data.validCredentials.username,data.validCredentials.password)
    // await t.wait(data.Time_waits.small_wait)
   await  cartPage.addItemTocart("2")
})