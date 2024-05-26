/// <reference types="Cypress"/>
/// <reference path="../../src/index.d.ts" />
import '../../src/index.js'
describe(' cypress-temp-mail ', () => {
    it('=== Validate the temp mail custom commands ===', () => {
        cy.visit('https://app.postdrop.io/signup')
        cy.getRandomNumber().then((d)=>{
            console.log(d)
        })
        cy.wait(5000)
    })
})
