const userCommanPage = require(`../pageobjects/userCommanPage`)
class userLogInPage{

    async goToLogInPage(){
        await userCommanPage.logInLink.click()
    }

    get #userNameTextField(){
        return $("//input[@name='email']")
    }

    get #userPassTextField(){
        return $("//input[@id='exampleInputPassword1']")

    }

    get #logInButton(){
        return $("//button[.='Login']")
    }

    async logInUser(userName,userPass){
        await this.#userNameTextField.setValue(userName)
        await this.#userPassTextField.setValue(userPass)
        await this.#logInButton.click()
    }

}

module.exports = new userLogInPage