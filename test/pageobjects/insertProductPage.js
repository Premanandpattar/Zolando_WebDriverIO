const adminCommanPage = require(`../pageobjects/adminCommanPage`)

class insertProductPage {

    /**
     * This mehod used go to insert product page.
     */
    async goTOInsertProductPage() {
        await adminCommanPage.insertProductLink.click()
    }

    get #selectCategoryDD() {
        return $("//select[@name='category']")
    }

    get #selectSubCategoryDD() {
        return $("//select[@name='subcategory']")
    }

    get #productNameTextField() {
        return $("//input[@name='productName']")
    }

    get #productCompanyNameTextField() {
        return $("//input[@name='productCompany']")
    }

    get #productpriceBDTextField() {
        return $("//input[@name='productpricebd']")
    }

    get #productpriceADTextField() {
        return $("//input[@name='productprice']")
    }

    get #productDiscriptionTextArea() {
        // return $("//div[@contenteditable='true']")
        return $("//textarea")
    }

    get #shippingChargeTextField() {
        return $("//input[@name='productShippingcharge']")
    }

    get #productAvilabilityDD() {
        return $("//select[@name='productAvailability']")
    }

    get #productImage1() {
        return $("//input[@name='productimage1']")
    }

    get #productImage2() {
        return $("//input[@name='productimage2']")
    }

    get #productImage3() {
        return $("//input[@name='productimage3']")
    }

    get #insertProductButton(){
        return $("//button[.='Insert']")
    }
    /**
     * 
     * @param {String} categoryName 
     * @param {String} subCategoryName 
     * @param {String} productName 
     * @param {String} priceBD 
     * @param {String} priceAD 
     * @param {String} productDiscription 
     * @param {String} productShippingCharge 
     * @param {optionByVisibleText String} availability 
     * @param {String} firstImageFilePath 
     * @param {String} secondImageFilePath 
     * @param {String} thirdImageFilePath 
     */
    async createSubCategory(categoryName,subCategoryName,productName,productCompany,priceBD,priceAD,productDiscription,productShippingCharge
        ,availability=`In Stock`,firstImageFilePath,secondImageFilePath, thirdImageFilePath ){
        await this.#selectCategoryDD.selectByVisibleText(categoryName)
        await this.#selectSubCategoryDD.selectByVisibleText(subCategoryName)
        await this.#productNameTextField.setValue(productName)
        await this.#productCompanyNameTextField.setValue(productCompany)
        await this.#productpriceBDTextField.setValue(priceBD)
        await this.#productpriceADTextField.setValue(priceAD)
        await this.#productDiscriptionTextArea.setValue(productDiscription)
        await this.#shippingChargeTextField.setValue(productShippingCharge)
        await this.#productAvilabilityDD.selectByVisibleText(availability)
        var path1 = await browser.uploadFile(firstImageFilePath)
        var path2 = await browser.uploadFile(secondImageFilePath)
        var path3 = await browser.uploadFile(thirdImageFilePath)
        await this.#productImage1.setValue(path1)
        await this.#productImage2.setValue(path2)
        await this.#productImage3.setValue(path3)
        await this.#insertProductButton.click()
    }
}

module.exports = new insertProductPage()