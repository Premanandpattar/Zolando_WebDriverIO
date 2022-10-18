class UpdateProductStatusPage{

    async makeStatusAsDelivered(upadateDescription="product delivered"){
        await $("//select").selectByVisibleText("Delivered")
        await $("//textarea").setValue(upadateDescription)
        await $("//input[@value='update']").click()
    }

    async getStatus(){
        return await $("//td//b[.='Status:']/ancestor::td/following-sibling::td")
    }
}
module.exports = new UpdateProductStatusPage()