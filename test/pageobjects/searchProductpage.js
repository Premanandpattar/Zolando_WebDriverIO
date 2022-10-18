
class searchProductpage{

    async searchTheProduct(productName){
        await $("//input[@class='search-field']").setValue(productName)
        await $("//button[@class='search-button']").click()
        
    }

    async getFirstMatchingProductName(){
        return await $("//div[@class='row']//h3[@class='name']//a").getText()
    }

    async addToCartButton(){
        await $("//div[@class='row']//h3[@class='name']//a").click()
        await $("//a[.=' ADD TO CART']").click()
    }
}

module.exports = new searchProductpage()