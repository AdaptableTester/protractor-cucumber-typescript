import { element, by, $, $$ } from 'protractor';

export default class HomePage {
    
    planetDetails = `.col-sm-10`;
    characterDetails = `.col-sm-10`;


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
    ElePlanetName() {
        return element(by.css('app-planet h6'));
    }
     ElePlanetPopulation() {
        return element($$(this.planetDetails)[0]);
    }
     ElePlanetClimate() {
        return element($$(this.planetDetails)[1]);
    }
    ElePlanetGravity() {
        return element($$(this.planetDetails)[2]);
    }

}
    