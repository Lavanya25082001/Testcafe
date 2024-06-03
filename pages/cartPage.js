import { Selector, t } from "testcafe";
import getElementByXPath from '../utils';
const data =require("../Data/data.json")

class CartPage{
    constructor(){
        
        this.searchField=getElementByXPath("//input[@placeholder='Search entire store here...']")
        this.searchBtn=getElementByXPath("//button[@title='Search']")
        this.irreleventSearchMsg=getElementByXPath("//div[@class='message notice']//div")
        this.releventSearchItem=getElementByXPath("(//p[@class='toolbar-amount'])[1]")
        this.womenOptn=getElementByXPath("//span[text()='Women']")
        this.topsOptn=getElementByXPath("//span[text()='Tops']")
        this.jacketOptn=getElementByXPath("//span[text()='Jackets']")
        this.item=getElementByXPath('(//li[@class="item product product-item"])[1]')
        this.size=getElementByXPath('((//div[@class="swatch-attribute-options clearfix"])[1]//div)[1]')
        this.color=getElementByXPath('((//div[@class="swatch-attribute-options clearfix"])[2]//div)[1]')
        this.quantity=Selector('#qty')
        this.addtoCart=getElementByXPath('#product-addtocart-button')
        this.itemName=getElementByXPath('//span[@itemprop="name"]')
        this.bottomOptn=getElementByXPath("//span[text()='Bottoms']")
        this.pantsOptn=getElementByXPath("//span[text()='Pants']")
        
        
        
       }

    async searchWithItem(searchItem){
        await t
            .maximizeWindow()
            .wait(data.Time_waits.small_wait)
            .typeText(this.searchField, searchItem)
            .wait(data.Time_waits.small_wait)
            .click(this.searchBtn)
                 
    }

    async addItemTocart(quantity){
        await t
        .hover(this.womenOptn)
        .hover(this.topsOptn)
        .wait(data.Time_waits.small_wait)
        .click(this.jacketOptn)
        .wait(data.Time_waits.small_wait)
        .click(this.item)
        // .click(this.size)
        // .wait(data.Time_waits.small_wait)
        // .click(this.color) 
        // .wait(data.Time_waits.small_wait) 
        // .click(this.quantity)
        // .wait(data.Time_waits.small_wait)
        // .typeText(this.quantity, quantity) 
        .click(this.addtoCart)
        .wait(data.Time_waits.small_wait)
    }
}
export default new CartPage();