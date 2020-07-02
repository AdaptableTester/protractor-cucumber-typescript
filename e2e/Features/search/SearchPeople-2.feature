Feature: Search for an artist who has same name as another character/artist
In order to gather more information on my favourite starwars characters
As a user who is a Star Wars enthusiast  
I want the application to serve me the information

Background: 
Given I open the url "/"
And I am on the landing page of the site
   
Scenario Outline: Perform Search for Character names we know have similar first names 
   Given I choose the People option on the page 
    When I set a "<characterPartName>" in the input field
	And I submit my search
	Then I expect the related results include Gender tobe "<Gender>", BirthYear tobe "<BirthYear>", EyeColor tobe "<EyeColor>", SkinColor tobe "<SkinColor>"
	And the full name of the person is "<fullName>"
Examples:
      | characterPartName | Gender | BirthYear | EyeColor | SkinColor | fullName |
      | Darth | male  | 41.9BBY | yellow | white | Darth Vader |
	  | Darth | male  | 19BBY | yellow | red |  Darth Maul |
	  