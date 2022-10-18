const adminLogInPage = require(`../pageobjects/adminLoginPage`)
const adminCommanPage = require(`../pageobjects/adminCommanPage`)
const createCategoryPage = require(`../pageobjects/createCategoryPage`)
const createSubCategoryPage = require(`../pageobjects/createSubCategoryPage`)
const insertProductPage = require(`../pageobjects/insertProductPage`)
const manageProductPage = require(`../pageobjects/manageProductPage`)


describe('deleteAllProductsAndSubCategoryAndCategory Test', () => {
    it('launch url Test', async () => {
        await browser.maximizeWindow()
        await browser.url("http://rmgtestingserver/domain/Online_Shopping_Application/admin/")
        await console.log(browser.getTitle());
        await expect(browser).toHaveTitle("Shopping Portal | Admin login")
    });

    it("admin log in Test", async () => {
        await adminLogInPage.loggedinAsAdmin("admin", "Test@123")
        await expect(browser).toHaveTitle("Admin| Change Password")
    });

    it('delete all product Test', async () => {
        await manageProductPage.goToManageProductPage()
        await expect(browser).toHaveTitle("Admin| Manage Products")
        await manageProductPage.deleteAllProduct()
    });

    it('delete all subCategory Test', async () => {
        await createSubCategoryPage.goToSubCategoryPage()
        await expect(browser).toHaveTitle("Admin| SubCategory")
        await createCategoryPage.deleteAllCategory()
    });

    it('delete all Category Test', async () => {
        await createCategoryPage.goToCreateCaytegoryPage()
        await expect(browser).toHaveTitle("Admin| Category")
        await createCategoryPage.deleteAllCategory()
        
    });

    it("admin log out Test", async () => {
        await adminCommanPage.logout()
        var d = await adminCommanPage.logoutText()
        await expect(d).toHaveTextContaining("You have successfully logout")
    });
    
});