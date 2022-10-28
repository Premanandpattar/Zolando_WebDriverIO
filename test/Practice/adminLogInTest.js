const adminLogInPage = require(`../pageobjects/adminLoginPage`)
const fs =require("fs");
var credential =JSON.parse(fs.readFileSync("./test/testData/adminCredential.json"))
const expectChai = require('chai')

describe("log in test",()=>{

    it('launch url Test - reg', async () => {
        await browser.maximizeWindow()
        await browser.url("http://rmgtestingserver/domain/Online_Shopping_Application/admin/")
        await console.log(browser.getTitle());
        await expect(browser).toHaveTitle("Shopping Portal | Admin login")
    });

    credential.forEach(({adminUserName,adminUserPass})=>{
        it("admin log in Test - reg", async () => {
            await adminLogInPage.loggedinAsAdmin(adminUserName,adminUserPass)
            var d= await adminLogInPage.invalidNameAndPassMessage()
            await console.log(d);
            // await expect(d).toBe(`Invalid username or password`)
            await expectChai.assert.equal(d,`Invalid username or passwo`,'it is not equal')
        });
    });
    
})
