module.exports = {
    "PAGE_LOADS": function (browser) {
        browser
        .url("http://localhost:3005/")
        .waitForElementVisible("body") 
        .end()
    }
}

