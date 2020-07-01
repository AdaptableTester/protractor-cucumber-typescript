const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
  
  Given(/^I navigate to "(.*)"$/, function(param1) {
    return true;
  });
  When(/^I search for <charaterName> name$/, function() {
    return true;
  });
  Then(/^I should be able to see his/her Gender as <gender>$/, function() {
    return true;
  });
  Then(/^I should be able to see his/her skin color as <skintone>$/, function() {
    return true;
  });
  Given(/^I navigate to "(.*)"$/, function(param1) {
    return true;
  });
  When(/^i search for invalid "(.*)" name$/, function(param1) {
    return true;
  });
  Then(/^I should be able to see "(.*)" in the results$/, function(param1) {
    return true;
  });
});
