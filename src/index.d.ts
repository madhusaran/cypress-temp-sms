// load type definitions that come with Cypress module
/// <reference types="cypress" />



declare namespace Cypress {
    interface Chainable {
        /**
         * Generate a temp mobile for E2E testing SMS testing
         * @example
         * cy.getRandomNumber() 
         */
        getRandomNumber(): Chainable<string>

        /**
        * Generate a temp mobile for E2E testing SMS testing with provided country
        * @example
        * cy.getNumberFrom('India') 
        * @returns returns a random phone number for the country provided. if available else fail
        */
        getNumberFrom(country: string): Chainable<string>

        /**
         * retrives the last received SMS from the generated number
         * @example
         * cy.getSMS('+18337104723') 
         * @input Mobile number from https://receive-smss.com/
         * @returns 
         * Chainable<{ subject: any; text: any; html: any; inboxMailCount: number }>
         */
        getSMS(mobileNumber: string): Chainable<{ sender: string, message: any, received: string }[]>
    }
}