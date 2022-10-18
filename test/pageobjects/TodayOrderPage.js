class TodayOrderPage{

    async goToTodayOrderPage(){
        await $("//a[contains(.,'Today')]").click()
    }

    async selectByVisibleTextShowEntriesDropDown(visibleText ="100"){
        var path = await $("//select[@name='DataTables_Table_0_length']")
        await path.selectByVisibleText(visibleText)
      }

     async clickOnUpdateProductStatus(productName){
        await $(`//td[.='${productName}']/following-sibling::td//a`).click()
     } 

     

}

module.exports = new TodayOrderPage()