const adminLogInPage = require(`../pageobjects/adminCommanPage`)
class manageProductPage{

    async goToManageProductPage(){
        await adminLogInPage.manageProductLink.click()
    }

    async selectByVisibleTextShowEntriesDropDown(visibleText ="100"){
        var path = await $("//select[@name='DataTables_Table_0_length']")
        await path.selectByVisibleText(visibleText)
      }

    async lastTableRowProductName(){
        return await browser.$("//tbody//tr[last()]//td[2]").getText()
    }

    get #lastProductDeleteIcon(){
        return $("//tbody//tr[last()]//td[last()]//a//i[@class='icon-remove-sign']")
    }

    get #text(){
        return $(`//td[.='No data available in table']`)
    }

    async deleteAllProduct(){
        var path = null
        try {
            path =await this.#lastProductDeleteIcon
            await path.click()
            await browser.acceptAlert()
        } finally{
        }
        
        await console.log(path);
         if (path == {}) {
            console.log("product delete");

        } else if (path != null) {
            await this.deleteAllProduct()
        }
    }
}

module.exports= new manageProductPage()