const adminLogInPage = require(`../pageobjects/adminLoginPage`)
const fs =require("fs");
const { ALL } = require("dns");
var credential =JSON.parse(fs.readFileSync("./test/testData/adminCredential.json"))

xdescribe("log in test",()=>{

    it('launch url Test - reg', async () => {
        await browser.maximizeWindow()
        await browser.url("http://rmgtestingserver/domain/Online_Shopping_Application/admin/")
        await console.log(browser.getTitle());
        await expect(browser).toHaveTitle("Shopping Portal | Admin login")
    });

    credential.forEach(({...ALL})=>{
        it("admin log in Test - reg", async () => {
            await adminLogInPage.loggedinAsAdmin(...ALL)
            var d= await adminLogInPage.invalidNameAndPassMessage()
            await console.log(d);
            await expect(d).toBe(`Invalid username or password`)
        });
    });
    
})
