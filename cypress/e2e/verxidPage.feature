Feature: Verxid Web UI application
As a user i should be able to login successfully

    Scenario: A user should be able to assess verxid application successfully
        Given I launch the web app and click on About verxid
        When I select different product for reviews Verxid Face IA, Verxid Finger IA and Verxid OCR IA
        And I click on Service to view details under verification
        And I click on Use Case
        Then I click on Technical Specification
        And I click on stories
        And I click Clients
        Then I register successfully

        



        