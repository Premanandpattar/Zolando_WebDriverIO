xdescribe(`tets`, async()=>{

    it(`check`, async function tittle () {
        this.retries(3)
        await browser.url(`http://rmgtestingserver/domain/Online_Shopping_Application/admin/`)
        await expect(browser).toHaveTitle(`admin`)
    })
})