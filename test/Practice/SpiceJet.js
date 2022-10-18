xdescribe(`Booking Ticket`, () => {

    it(`Delhi To Agra`, async () => {
        await browser.maximizeWindow()
        await browser.url(`https://www.spicejet.com/`)
        await $(`//div[.='round trip']`).click()
        await $(`//div[@data-testid='to-testID-destination']//input`).click()
        await $(`//div[.='AGR']`).click()
        await $(`//div[.='Select Date']`).click()
        await $(`//div[@data-testid="undefined-month-November-2022"]//div[@data-testid="undefined-calendar-day-23"]`).click()
        await $(`//div[.='Armed Forces']`).click()
        await $(`//div[.='Search Flight' and @dir='auto']`).click()
        await browser.debug(10000)
    })
})