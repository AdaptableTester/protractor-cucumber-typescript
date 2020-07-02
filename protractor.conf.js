const { browser } = require('protractor');

exports.config = {

  debug: false,
  // SK1: for direct conn using driver browsers
  directConnect: true,

  allScriptsTimeout: 11000,
  specs: [
  //SK2 patterns will be relative to this directory
    //'./e2e/Features/**/*.feature' 
    //'./e2e/FEATURES/search/*.feature',
    './e2e/FEATURES/home/*.feature'
  ],
  
  multiCapabilities: [
  { 'browserName': 'chrome' }
  //{ 'browserName': 'firefox' }
  ],
  getPageTimeout: 10000,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    strict: true,
    //SK3 - annotations can be added
    tags: [],
    require: [
      './node_modules/protractor-cucumber-steps/index.js',
      './e2e/**/*.Steps.ts'
    ],
    format: [
      'json:test-reports/cucumber-test-results.json'
    ]
  },

  before: function before() {
		const chai = require("chai");
		global.expect = chai.expect;
		global.assert = chai.assert;
		global.should = chai.should();
  },
  onPrepare() {
    //SK3 - full size browser
    //browser.manage().window().maximize();
    require('ts-node').register({
      project: require('path').join(__dirname, './e2e/tsconfig.e2e.json')
    });
  }
};
