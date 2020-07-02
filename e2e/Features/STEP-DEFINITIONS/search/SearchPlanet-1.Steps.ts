
import { Given, When, Then } from 'cucumber';
const chai = require('chai');
chai.use(require('chai-as-promised'));
const {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
import SearchPlanetPage from '../../../Pages/search/searchPlanetResults.po';
let searchPlanetPage: SearchPlanetPage = new SearchPlanetPage;



  Given(/^I choose the Planets option on the page$/, async function() {
    return await searchPlanetPage.RdioBtnPlanets().click();
  });
  When(/^I set a "(.*)" in the input field$/, async function(param1) {
    return await searchPlanetPage.TxtBxInput().sendKeys(param1);
  });
  When(/^I submit my search$/, async function() {
    return await searchPlanetPage.BtnSearch().click();
  });
  Then(/^I expect the related results are Population tobe "(.*)" Climate tobe "(.*)" Gravity tobe "(.*)"$/, async function(param1, param2, param3) {
      let population = await searchPlanetPage.ElePlanetPopulation().getText();
      let climate = await searchPlanetPage.ElePlanetClimate().getText();
      let gravity = await searchPlanetPage.ElePlanetGravity().getText();
      await chai.expect(population).to.eventually.contain(param1);
      await chai.expect(climate).to.eventually.contain(param2);
      await chai.expect(gravity).to.eventually.contain(param3);
  });

