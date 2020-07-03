import { Given, When, Then } from 'cucumber';
const chai = require('chai');
chai.use(require('chai-as-promised'));
const {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
import HomePage from '../../../PAGES/home/home.po'
const homePage: HomePage = new HomePage();


  Given(/^I choose the Planets option on the page$/, async function() {
    return await homePage.RdioBtnPlanets().click();
  });

  When(/^I set a "(.*)" in the input field$/, async function(param1) {
  //  return await HomePage.TxtBxInput().sendKeys(param1);
    return await homePage.TxtBxInput().sendKeys(param1);
  });

  When(/^I submit my search$/, async function() {
    return await homePage.BtnSearch().click();
  });

  Then(/^I expect the related results are Population tobe "(.*)" Climate tobe "(.*)" Gravity tobe "(.*)"$/, async function(param1, param2, param3) {
      let population = await homePage.ElePlanetPopulation().getText();
      let climate = await homePage.ElePlanetClimate().getText();
      let gravity = await homePage.ElePlanetGravity().getText();
      await chai.expect(population).to.eventually.contain(param1);
      await chai.expect(climate).to.eventually.contain(param2);
      await chai.expect(gravity).to.eventually.contain(param3);
  });

