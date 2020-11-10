module.exports = {
    "Basic e2e test": function (browser) {
        browser
        .url("http://localhost:3005/")
        .waitForElementVisible("body") 
        .end()
    }
}