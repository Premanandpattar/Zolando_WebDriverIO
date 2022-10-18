class adminCommanPage{

    get createCategoryLink(){
        return $("//a[@href='category.php']")
    }

    get createSubCategoryLink(){
        return $("//a[@href='subcategory.php']")
    }

    get insertProductLink(){
        return $(`//a[@href='insert-product.php']`)
        
    }

    get manageProductLink(){
        return $("//a[@href='manage-products.php']")
    }

    get #adminImage(){
        return $("//img")
    }

    get #logOutLink(){
        return $("//a[.='Logout']")
    }

    get #logOutMess(){
        return $("//div[@class='module-head']/following-sibling::span")
    }

    async logoutText(){
        return await this.#logOutMess
    }

    async logout(){
        await this.#adminImage.click()
        await this.#logOutLink.click()
    }

    async ClickOnOrdermanagementLink(){
        await $("//a[contains(.,'Order Management')]").click()
    }

}

module.exports = new adminCommanPage()