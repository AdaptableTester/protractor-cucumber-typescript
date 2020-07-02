import { browser, element, by, $$, $ } from 'protractor';

const characterDetails = `.col-sm-10`;

module.exports = {
    get TxtBxInput() {
        return element(by.id('query'));
    },
    get BtnSearch() {
        return element(by.css('button'));
    },
    get EleCharacterName() {
        return element(by.css('app-character h6'));
    },
    get EleCharacterGender() {
        return element($$(characterDetails)[0]);
    },
    get EleCharacterBirthYear() {
        return element($$(characterDetails)[1]);
    },
    get EleCharacterEyeColor() {
        return element($$(characterDetails)[2]);
    },
    get EleCharacterSkinColor() {
        return element($$(characterDetails)[3]);
    },
    
    get RdioBtnPlanets() {
        return element($(`input[id="planets"]`));
    },
    get RdioBtnPeople() {
        return element($(`input[id="people"]`));
    }
};
