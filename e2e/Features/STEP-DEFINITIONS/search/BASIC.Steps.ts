/* import { Given, When, Then } from 'cucumber';
const chai = require('chai');
import { browser } from 'protractor';
chai.use(require('chai-as-promised'));
const {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

const searchFormPO = require('../../Pages/search/search-form.po');

Given('I navigate to {string}', { timeout: 60 * 1000 }, async (string) => {
    await browser.get('http://' + string + ':4200/');
    await browser.sleep(2000);
});

When('I search for Luke Skywalkers name', { timeout: 60 * 1000 }, async () => {
    await searchFormPO.input.sendKeys('Luke Skywalker');
    await searchFormPO.searchBtn.click();
    await browser.sleep(2000);
});

Then('I see Lukes details', { timeout: 60 * 1000 }, async () => {
    await chai.expect(searchFormPO.firstCharacterName.getAttribute('innerText'))
        .to.eventually.contain('Skywalker');
});
 */