import { browser, element, by, $$, $ } from 'protractor';

module.exports = {
    get TxtBxInput() {
        return element(by.id('query'));
    },
    get BtnSearch() {
        return element(by.css('button'));
    },
    get RdioBtnPlanets() {
        return element($(`input[id="planets"]`));
    },
    get RdioBtnPeople() {
        return element($(`input[id="people"]`));
    }
};
