import { element, by, $$, $ } from 'protractor';

export default class SearchPlanetPage {
    planetDetails = `.col-sm-10`;

     TxtBxInput() {
        return element(by.id('query'));
    }
     BtnSearch() {
        return element(by.css('button'));
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
    RdioBtnPlanets() {
        return element($(`input[id="planets"]`));
    }
    RdioBtnPeople() {
        return element($(`input[id="people"]`));
    }
};
