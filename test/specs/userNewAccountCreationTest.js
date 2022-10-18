const userNewAccountCreationPage = require(`../pageobjects/userNewAccountCreationPage`)
const userLogInPage = require(`../pageobjects/userLogInPage`)
const userHomePage = require(`../pageobjects/userHomePage`)
const userCommanPage = require(`../pageobjects/userCommanPage`)

describe(`userNewAccountCreationTest`,()=>{
    const getRandomNum = Math.ceil((Math.random()) * 1000)
    var uName =`Premanand ${getRandomNum}`
    var uEmail =`premanandp${getRandomNum}@gmail.com`
    var uPhoneNumber =`uPhoneNumber${getRandomNum}`
    var uPass = `Prem@1234${getRandomNum}`

    it('launch url Test', async () => {
        await browser.maximizeWindow()
        await browser.url("http://rmgtestingserver/domain/Online_Shopping_Application/")
        await console.log(browser.getTitle());
        await expect(browser).toHaveTitle("Shopping Portal Home Page")
    });

    it(`create new user test`,async ()=>{
        await userNewAccountCreationPage.goTouserNewAccountCreationPage()
        await userNewAccountCreationPage.createNewUserAccount(uName,uEmail,uPhoneNumber,uPass)
        var msg = await browser.getAlertText()
        await expect(msg).toBe(`You are successfully register`)
        await browser.acceptAlert()
        //validated
    })

    it("log in user with created account Test", async ()=>{
        await userLogInPage.goToLogInPage()
        await userLogInPage.logInUser(uEmail,uPass)
        var r = await userHomePage.userNamePath
        await expect(r).toHaveTextContaining(`-${uName}`)
    })

    it("user log out Test", async()=>{
        await userCommanPage.UserLogOut()
        await expect(browser).toHaveTitle(`Shopping Portal Home Page`)
    })


})