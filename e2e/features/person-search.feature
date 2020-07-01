Feature: Search for a Star Wars character
    
    Scenario: By person full name
        Given I navigate to "localhost"
        When I search for "Luke Skywalker" name
        Then I should be able to see his/her Gender as "male"
        Then I should be able to see his/her Birth year as "19BBY"
        Then I should be able to see his/her eye color as "blue",
        Then I should be able to see his/her skin color as "fair"


    Scenario Outline: By person full name again
        Given I navigate to "localhost"
        When I search for <charaterName> name
        Then I should be able to see his/her Gender as <gender>
        Then I should be able to see his/her skin color as <skintone>
      Examples: 
      | charaterName | gender | skintone | 
      | Luke Skywalker | male | fair |
      | Leia Organa | female | white |

    Scenario: By invalid person name
        Given I navigate to "localhost"
        When i search for invalid "character" name
        Then I should be able to see "Not found" in the results