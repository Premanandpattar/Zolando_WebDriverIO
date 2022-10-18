const adminLogInPage = require(`../pageobjects/adminLoginPage`)
const adminCommanPage = require(`../pageobjects/adminCommanPage`)
const createCategoryPage = require(`../pageobjects/createCategoryPage`)
const createSubCategoryPage = require(`../pageobjects/createSubCategoryPage`)
const insertProductPage = require(`../pageobjects/insertProductPage`)
const manageProductPage = require(`../pageobjects/manageProductPage`)
const userLogInPage = require(`../pageobjects/userLogInPage`)
const searchProductpage = require(`../pageobjects/searchProductpage`)
const AddToCartPage = require(`../pageobjects/AddToCartPage`)
const checkOutPage = require(`../pageobjects/CheckOutPage`)
const TrackOrderPage = require(`../pageobjects/TrackOrderPage`)
const TodayOrderPage = require(`../pageobjects/TodayOrderPage`)
const UpdateProductStatusPage = require(`../pageobjects/UpdateProductStatusPage`)
const userCommanPage = require("../pageobjects/userCommanPage")


describe('EndTOEnd01', () => {
    const getRandomNum = Math.ceil((Math.random()) * 1000)
    const categoryName = `Fashion ${getRandomNum}`
    const subCategoryName = `Men ${getRandomNum}`
    var productName = `T SHIRT ${getRandomNum}`
    it('launch url Test', async () => {
        await browser.maximizeWindow()
        await browser.url("http://rmgtestingserver/domain/Online_Shopping_Application/admin/")
        await console.log(browser.getTitle());
        await expect(browser).toHaveTitle("Shopping Portal | Admin login")
    });

    it("admin log in Test", async () => {
        await adminLogInPage.loggedinAsAdmin("admin", "Test@123")
        await console.log(browser.getTitle());
        await expect(browser).toHaveTitle("Admin| Change Password")
    });

    it("create new category Test", async () => {
        await createCategoryPage.goToCreateCaytegoryPage()
        await expect(browser).toHaveTitle("Admin| Category")
        var description = `cotton,
        fiber,
        all kind of materil`
        await createCategoryPage.createNewCategory(categoryName, description)
        await createCategoryPage.selectByVisibleTextShowEntriesDropDown()
        var lastTableRowText = await createCategoryPage.lastTableRowCategoryNameText()
        await expect(lastTableRowText).toBe(categoryName)
    });

    it("create new sub category belong created new category Test", async () => {
        await createSubCategoryPage.goToSubCategoryPage()
        await expect(browser).toHaveTitle("Admin| SubCategory")
        await createSubCategoryPage.createSubCategory(categoryName, subCategoryName)
        await createSubCategoryPage.selectByVisibleTextShowEntriesDropDown()
        var lastTableRowText = await createSubCategoryPage.lastTableRowSubCategoryNameText()
        await expect(lastTableRowText).toBe(subCategoryName)
    });

    it("insert product belong created new category and sub category Test", async () => {
        // credentials
        var productCompany = "Arrow"
        var priceBD = "700"
        var priceAD = "500"
        var productDiscription = "100% cotton"
        var productShippingCharge = "40"
        var path = "E:/JAVA_SCRIPT/Zolando_wdio/test/testData/img.jpg"
        // go to insert product page
        await insertProductPage.goTOInsertProductPage()
        await expect(browser).toHaveTitle("Admin| Insert Product")
        //insert product
        await insertProductPage.createSubCategory(categoryName, subCategoryName, productName,productCompany, priceBD, priceAD, 
        productDiscription, productShippingCharge, `In Stock`, path, path, path)
        // go to manage product page
        await manageProductPage.goToManageProductPage()
        await expect(browser).toHaveTitle("Admin| Manage Products")
        await manageProductPage.selectByVisibleTextShowEntriesDropDown()
        var lastTableRowProductName = await manageProductPage.lastTableRowProductName()
        await expect(lastTableRowProductName).toBe(productName)
        
    });

    it("switching to user interFace Test", async () => {
        await browser.newWindow("http://rmgtestingserver/domain/Online_Shopping_Application/")
        await expect(browser).toHaveTitle("Shopping Portal Home Page")
    })

    it("log in user Test", async () => {
        var UN = "anuj.lpu1@gmail.com"
        var pass = "Test@123"
        await userLogInPage.goToLogInPage()
        await userLogInPage.logInUser(UN,pass)
        await expect(browser).toHaveTitle("My Cart")
    })

    it("search for created product Test", async () => {
        await searchProductpage.searchTheProduct(productName)
        var expectProductName = await searchProductpage.getFirstMatchingProductName()
        await expect(expectProductName).toBe(productName)
    })

    it("Add to Cart Test", async () => {
        await searchProductpage.addToCartButton()
        await browser.acceptAlert()
        var text = await AddToCartPage.getLastAddedProductName()
        await expect(text).toBe(productName)
    })

    it("Procced to check out Test", async () => {
        await checkOutPage.CheckOutThePrduct(productName)
        var f = await TrackOrderPage.getLastAddedProduct()
        await expect(f).toHaveTextContaining(productName)
    })

    it("switch to admin and update the placed order Test", async () => {
        await browser.switchWindow("Admin| Manage Products")
        await adminCommanPage.ClickOnOrdermanagementLink()
        await TodayOrderPage.goToTodayOrderPage()
        await TodayOrderPage.selectByVisibleTextShowEntriesDropDown()
        await TodayOrderPage.clickOnUpdateProductStatus(productName)
        await browser.switchWindow("Update Compliant")
        await UpdateProductStatusPage.makeStatusAsDelivered()
        await browser.acceptAlert()
        var c = await UpdateProductStatusPage.getStatus()
        await expect(c).toHaveTextContaining("Delivered")
    })

    it("admin log out Test", async () => {
        await browser.switchWindow("Admin| Pending Orders")
        await adminCommanPage.logout()
        var d = await adminCommanPage.logoutText()
        await expect(d).toHaveTextContaining("You have successfully logout")
    });

    it("Switch to user and track the order Test", async () => {
        await browser.switchWindow("Order History")
        await TrackOrderPage.clickOnOrderStatus(productName)
        await browser.switchWindow(`Order Tracking Details`)
        var g = await TrackOrderPage.getStatusOfTheOrder()
        await expect(g).toBe("Delivered")
        await browser.switchWindow("Order History")
        ///validation
    })

    it("user log out Test", async () => {
        await userCommanPage.UserLogOut()
        await expect(browser).toHaveTitle(`Shopping Portal Home Page`)
    })
});
