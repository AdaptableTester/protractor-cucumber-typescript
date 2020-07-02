import { Given, When, Then } from 'cucumber';
const chai = require('chai');
chai.use(require('chai-as-promised'));
const {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
import HomePage from '../../../PAGES/home/home.po';
const homePage: HomePage = new HomePage();

  Given(/^I choose the People option on the page$/, async function() {
    return await homePage.RdioBtnPeople().click();
  });

  When(/^I set a "(.*)" in the input field$/, async function(param1) {
    return await homePage.TxtBxInput().sendKeys(param1);
  });

  And(/^I submit my search$/, async function() {
    return await homePage.BtnSearch().click();
  });

  Then(/^I expect the related results include Gender tobe "(.*)", BirthYear tobe "(.*)" , EyeColor tobe "(.*)" , SkinColor"(.*)"$/,  async function(g,by,ec,sc) {
       let gender = await homePage.EleCharacterGender().getText();
       let birthYear = await homePage.EleCharacterBirthYear().getText();
       let eyeColor = await homePage.EleCharacterEyeColor().getText();
       let skinColor = await homePage.EleCharacterSkinColor().getText();
       await chai.expect(gender).to.eventually.contain(g);
       await chai.expect(birthYear).to.eventually.contain(by);
       await chai.expect(eyeColor).to.eventually.contain(ec);
       await chai.expect(skinColor).to.eventually.contain(sc);


    })
 