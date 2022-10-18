var adminCommanPage = require(`../pageobjects/adminCommanPage`)

class createCategoryPage{

    get categoryNameTextField(){
       return $("//input[@name='category']")
    }

    get descriptionTextArea(){
        return $("//textarea")
    }

    get createButton(){
        return $("//button[.='Create']")
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
        return $("//tbody//tr[last()]//td[2]")
    }

    /**
     * This method used to get last row category name
     * @returns textValue
     */
    async lastTableRowCategoryNameText(){
       return await this.#lastTableRowCategoryName.getText()
    }


    async createNewCategory(categoryName, categoryDescription){
        await this.categoryNameTextField.setValue(categoryName)
        await this.descriptionTextArea.setValue(categoryDescription)
        await this.createButton.click()
    }

    async goToCreateCaytegoryPage(){
        await adminCommanPage.createCategoryLink.click()
    }

    get #lastCategoryDeleteIcon(){
        return $("//tbody//tr[last()]//td[last()]//a//i[@class='icon-remove-sign']")
    }


    async deleteAllCategory(){
        var path
         try {
            path = await this.#lastCategoryDeleteIcon
            await path.click()
            console.log(await browser.getAlertText());
            await browser.acceptAlert()
        } finally {
        
        }
         if (path != undefined) {
            await this.deleteAllCategory()
        }
    }

}

module.exports = new createCategoryPage()