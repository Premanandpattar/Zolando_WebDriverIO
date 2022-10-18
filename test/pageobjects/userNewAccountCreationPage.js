const userCommanPage = require(`../pageobjects/userCommanPage`)

class userNewAccountCreationPage{

    async goTouserNewAccountCreationPage(){
        await userCommanPage.logInLink.click()
    }

    get #nameTextField(){
        return $(`//input[@name='fullname']`)
    }

    get #emailTextField(){
        return $(`//input[@id='email']`)
    }

    get #phoneNumberTextField(){
        return $(`//input[@id='contactno']`)
    }

    get #passwordTextField(){
        return $(`//input[@id='password']`)
    }
    get #confirmPasswordtextField(){
        return $(`//input[@id='confirmpassword']`)
    }
    get #sumitButton(){
        return $(`//button[@id='submit']`)
    }


    async createNewUserAccount(uName,uEmail,uPhoneNumber,uPass){
        await this.#nameTextField.setValue(uName)
        await this.#emailTextField.setValue(uEmail)
        await this.#phoneNumberTextField.setValue(uPhoneNumber)
        await this.#passwordTextField.setValue(uPass)
        await this.#confirmPasswordtextField.setValue(uPass)
        await this.#sumitButton.click()
    }

}

module.exports = new userNewAccountCreationPage()