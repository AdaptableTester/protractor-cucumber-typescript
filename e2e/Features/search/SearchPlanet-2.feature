Feature: Searching for a planet from the starwars fictional galaxy

In order to retrieve more information of the planets from the fictional galaxy of SW
As a user who is a Star Wars enthusiast  
I want the application to serve me the information


Background: 
  Given I open the url "/"
  And I am on the landing page of the site
   
Scenario Outline: Perform Search for a Planet name that is not valid
    Given I choose the Planets option on the page 
    When I set a "<planetInvalidName>" in the input field
    And I submit my search
    Then I see a Not Found message
	
	Examples:
      | planetInvalidName | 
      | TnTPlanet |