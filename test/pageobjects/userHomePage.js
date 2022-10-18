class userHomePage{

    get userNamePath(){
        return $(`//i[@class="icon fa fa-user"]/ancestor::a[@href='#']`)
    }

}

module.exports = new userHomePage()