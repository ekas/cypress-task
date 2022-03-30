Feature: Grid Singularity Login Page

  I want to open and login

  @focus
  Scenario: Opening Grid Singularity login page
    Given I open Landing page
    Then I close Welcome Popup
    When I click on Login menu item
    Then I see Login Popup to enter username and password
    When I click on Login button
    Then I am logged into the system
