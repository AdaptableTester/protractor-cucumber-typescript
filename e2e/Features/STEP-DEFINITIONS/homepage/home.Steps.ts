import { Given, Then } from 'cucumber';
import { browser } from 'protractor';
const chai = require('chai');
chai.use(require('chai-as-promised'));

const {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

Given('I navigate to the {string}', async (string) => {
    await browser.get(`http://${string}:4200/`);
    await browser.sleep(2000);
});


Then('I should see the page title', async () => {
    await chai.expect(browser.getTitle())
        .to.eventually.includes('TntAssignment');
});
