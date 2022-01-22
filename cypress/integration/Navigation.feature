Feature: Navigation

	As a user,
	I want a navigation,
	so that I can navigate the app.

	Scenario: The user wants to navigate to the characters page

		Given the user is on the "root" page
		When the user clicks on "Characters" in the navigation
		Then the "characters" page is visible

	Scenario: The user wants to navigate to the root page

		Given the user is on the "characters" page
		When the user clicks on "Home" in the navigation
		Then the "root" page is visible
