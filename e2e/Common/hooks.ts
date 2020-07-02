var { Before, After } = require('cucumber');
// Asynchronous Promise
After(async function(scenario) {
    // screenShot is a base-64 encoded PNG
    if (scenario.result.status === 'failed') {
            const screenShot = await browser.takeScreenshot();
            this.attach(screenShot, "image/png");
    }
});