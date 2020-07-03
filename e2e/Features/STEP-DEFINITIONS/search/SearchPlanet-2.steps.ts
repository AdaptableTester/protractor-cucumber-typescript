import { Given, When, Then } from 'cucumber';
const chai = require('chai');
chai.use(require('chai-as-promised'));
const {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
import HomePage from '../../../PAGES/home/home.po';
const homePage: HomePage = new HomePage();


  Given(/^I choose the Planets option on the page$/, async function() {
    return true;
  });

  When(/^I set a "(.*)" in the input field$/, async function() {
    return true;
  });

  When(/^I submit my search$/, async function() {
    return await homePage.BtnSearch().click();
  });

  Then(/^I see a Not Found message$/, async function() {
    return true;
  });

