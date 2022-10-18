const adminLogInPage = require(`../pageobjects/adminLoginPage`)
xdescribe.skip(`Test`,()=>{
    var xlsx = require("xlsx")
    var wb = xlsx.readFile(`./test/specs/testData/TestData.xlsx`)
    var  sheet=wb.Sheets[`adminLogInTest`]
    var data = xlsx.utils.sheet_to_json(sheet)
    console.log(data);
    
    it('launch url Test', async () => {
        await browser.maximizeWindow()
        await browser.url("http://rmgtestingserver/domain/Online_Shopping_Application/admin/")
        await console.log(browser.getTitle());
        await expect(browser).toHaveTitle("Shopping Portal | Admin login")
    });
    var i = 1
    data.forEach(({adminUserName,adminPassword})=>{
        
        it(`admin log in Test ${i}`, async () => {
            await adminLogInPage.loggedinAsAdmin(adminUserName,adminPassword)
            var d= await adminLogInPage.invalidNameAndPassMessage()
            await console.log(d);
            await expect(d).toBe(`Invalid username or password`)
        });
        i++
    });


})