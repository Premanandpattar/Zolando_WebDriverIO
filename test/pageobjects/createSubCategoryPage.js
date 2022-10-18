var adminCommanPage = require(`../pageobjects/adminCommanPage`)

class createSubCategoryPage{

    /**
     * This method will select the category name by visible text
     * @param {any} categoryName 
     */
    async #selectCategoryDropDownByVisibleText(categoryName){
        await $("//select[@name='category']").selectByVisibleText(categoryName)
    }

    /**
     * This method used to set the sub category name
     * @param {any} subCategoryName 
     */
    async #setSubCategoryName(subCategoryName){
        await $("//input[@name='subcategory']").setValue(subCategoryName)
    }

    /**
     * This method used to click on create buttton
     */
    async #clickOnCreateButton(){
        await $("//button[.='Create']").click()
    }

    /**
     * This method is used to select the show entries drop down by visible text. 
     * It will be selected by default 100
     * @param {any} visibleText 
     */
    async selectByVisibleTextShowEntriesDropDown(visibleText ="100"){
        var path = await $("//select[@name='DataTables_Table_0_length']")
        await path.selectByVisibleText(visibleText)
      }
    
    get #lastTableRowCategoryName(){
        return $("//tbody//tr[last()]//td[3]")
    }

    /**
     * This method used to get last row sub category name
     * @returns textValue
     */
    async lastTableRowSubCategoryNameText(){
       return await this.#lastTableRowCategoryName.getText()
    }


    /**
     * This method used to create sub category.
     * It will take two parameters
     * @param {any} categoryName 
     * @param {any} subCategoryName 
     */
    async createSubCategory(categoryName,subCategoryName){
        await this.#selectCategoryDropDownByVisibleText(categoryName)
        await this.#setSubCategoryName(subCategoryName)
        await this.#clickOnCreateButton()
    }

    async goToSubCategoryPage(){
        await adminCommanPage.createSubCategoryLink.click()

    }

    get #lastSubCategoryDeleteIcon(){
        return $("//tbody//tr[last()]//td[last()]//a//i[@class='icon-remove-sign']")
    }

    async deleteAllSubCategory (){
        var path
        try {
            path = await this.#lastSubCategoryDeleteIcon
            await path.click()
            console.log(await browser.getAlertText());
            await browser.acceptAlert()
        } finally {
            
        }
         if (path != undefined) {
            await this.deleteAllSubCategory()
        }
    }
    




}

module.exports = new createSubCategoryPage()