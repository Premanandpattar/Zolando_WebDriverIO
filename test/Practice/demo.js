xdescribe(`test`, () => {

    it(`Test`, async () => {

        await browser.url(`http://www.google.com`)
        var a = await $$(`//a`)
        // await expect(a).toHaveTextContaining(`Sign in`)
        for (const k of a) {
        
            var v = await  k.getText();
            var d = `Sign in`
           if (v == d) {
                console.log(v);
                console.log(`test case is passed`);
                break;
            } else {
                console.log(`test case failed`);
            }

        }

    })

})