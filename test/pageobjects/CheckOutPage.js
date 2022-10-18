class CheckOutPage{

    async CheckOutThePrduct(productName){
        await $(`//tbody//h4//a[.='${productName}']/ancestor::tr//input[@type='checkbox']`).click()
        await $("//button[.='PROCCED TO CHEKOUT']").click()
        await $("//input[@name='submit']").click()
    }
    

}

module.exports= new CheckOutPage()