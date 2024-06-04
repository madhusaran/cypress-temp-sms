describe('Cypress Temp SMS Test', () => {
  it('passes', () => {
    var num
    cy.visit('https://example.cypress.io')
    cy.getRandomNumber().then((numbr) => {
      num = numbr
      expect(num).to.exist
    })
    cy.getNumberFrom('United States').then((numbr) => {
      console.log(numbr)
      expect(numbr).to.exist

    })
    cy.getSMS(num).then((sms) => {
      expect(sms.length).to.be.greaterThan(0)
    })
  })
})