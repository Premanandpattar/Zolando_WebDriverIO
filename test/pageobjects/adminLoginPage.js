class adminLogInPage{

    get #adminUNTextField(){
       return $("//input[@id='inputEmail']")
    }

    get #adminPassTextField(){
        return $("//input[@id='inputPassword']")
    }

    get #adminLogInButton(){
        return $("//button[.='Login']")
    }

    get #invalidNameAndPass(){
        return $(`//span`)
    }

    async invalidNameAndPassMessage(){
        return await this.#invalidNameAndPass.getText()
    
    }

    async loggedinAsAdmin(adminUserName, adminPassword){
       await this.#adminUNTextField.setValue(adminUserName)
       await this.#adminPassTextField.setValue(adminPassword)
       await this.#adminLogInButton.click()
    }

}

module.exports = new adminLogInPage()