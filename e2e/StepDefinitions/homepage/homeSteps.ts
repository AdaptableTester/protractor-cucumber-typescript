const { Given, When, Then } = require('cucumber');
const { browser } = require('protractor');
const chai = require('chai');
chai.use(require('chai-as-promised'));



const homePO = require('../Pages/home/home.po');

Given('I navigate to {string}', { timeout: 60 * 1000 }, async (string) => {
    await browser.get('http://' + string + ':4200/');
    await browser.sleep(2000);
});


Then('I should see the page title', { timeout: 60 * 1000 }, async () => {
    await chai.expect(homePO..getAttribute('innerText'))
        .to.eventually.contain('Skywalker');
});
