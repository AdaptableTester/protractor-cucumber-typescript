import { element, by, $$, $ } from 'protractor';

export class SearchPeoplePage {
    characterDetails = `.col-sm-10`;

    TxtBxInput() {
        return element(by.id('query'));
    }
    
    BtnSearch() {
        return element(by.css('button'));
    }
    
    EleCharacterName() {
        return element(by.css('app-character h6'));
    }

    EleCharacterGender() {
        return element($$(this.characterDetails)[0]);
    }

    EleCharacterBirthYear() {
        return element($$(this.characterDetails)[1]);
    }

    EleCharacterEyeColor() {
        return element($$(this.characterDetails)[2]);
    }

    EleCharacterSkinColor() {
        return element($$(this.characterDetails)[3]);
    }

    RdioBtnPlanets() {
        return element($(`input[id="planets"]`));
    }
    
    RdioBtnPeople() {
        return element($(`input[id="people"]`));
    }
}
