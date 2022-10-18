class AddToCartPage{

    async getLastAddedProductName(){
        return await $("//tbody//h4//a").getText()
    }

}

module.exports = new AddToCartPage()
