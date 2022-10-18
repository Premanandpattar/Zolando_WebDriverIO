class TrackOrderPage{

    async getLastAddedProduct(){
        return await $("//tr[last()]//td//h4")
    }

    async clickOnOrderStatus(productName){
        await $(`//tbody//h4//a[contains(.,'${productName}')]/ancestor::td/following-sibling::td//a`).click()
    }

    async getStatusOfTheOrder(){
        return await $(`//b[.='Status:']/ancestor::td/following-sibling::td`).getText()
    }
}

module.exports = new TrackOrderPage()