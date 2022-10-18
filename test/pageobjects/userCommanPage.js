
class userCommanPage{

    get logInLink(){
        return $("//a[.='Login']")
    }

    get #logOutLink(){
        return $(`//a[@href='logout.php']`)
    }

    async UserLogOut(){
        this.#logOutLink.click()
    }


}

module.exports = new userCommanPage()