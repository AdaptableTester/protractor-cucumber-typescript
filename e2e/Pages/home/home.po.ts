import { element, by, $ } from 'protractor';

export default class HomePage {
    TxtBxInput() {
        return element(by.id('query'));
    }

    BtnSearch() {
        return element(by.css('button'));
    }

    RdioBtnPlanets() {
        return element($(`input[id="planets"]`));
    }

    RdioBtnPeople() {
        return element($(`input[id="people"]`));
    }
}
    

