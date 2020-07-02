Feature: Searching for a planet from the starwars fictional galaxy

In order to retrieve more information of the planets from the fictional galaxy of SW
As a user who is a Star Wars enthusiast  
I want the application to serve me the information

Background: 
  Given I open the url "/"
  And I am on the landing page of the site
   
Scenario: Search for information on Alderaan 
    Given I choose the Planets option on the page 
    When I set a "Alderaan" in the input field
	And I submit my search
	Then I expect the related results are Population tobe "2000000000" Climate tobe "temperate" Gravity tobe "1 standard"


Scenario: Search for information on Hoth 
    Given I choose the Planets option on the page 
    When I set a "Hoth" in the input field
	And I submit my search
	Then I expect the related results are Population tobe "Unknown" Climate tobe "frozen" Gravity to be "1.1 standard"

