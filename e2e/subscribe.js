module.exports = {
    "SUBSCRIBE_USER": function(browser) {
        //the alertElement css selector
        const alertElement = "div[role=alert]";
        browser
        .url("http://localhost:3005/")
        .waitForElementVisible("body")
        .click('#subscribe2')
        .waitForElementVisible(alertElement)
        .assert.containsText(alertElement, "Subscription successful. Fire on!")
        .saveScreenshot('subscription.png');
    }
}