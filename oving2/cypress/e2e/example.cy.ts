describe('Test form behaviour', () => {
  it('submit-button is disabled when name is empty', () => {
    cy.visit('/kontaktskjema')
    cy.get('#epost').type('jens.christian.aanestad@gmail.com')
    cy.get('#melding').type('Dette var egentlig ikke en spesielt god kalkulator')
    cy.get('#submit').click()
    cy.get('#submit').should('be.disabled')
  })

  it('submit-button is disabled when email is empty', () => {
    cy.visit('/kontaktskjema')
    cy.get('#navn').type('jens')
    cy.get('#melding').type('Dette var egentlig ikke en spesielt god kalkulator')
    cy.get('#submit').click()
    cy.get('#submit').should('be.disabled')
  })

  it('submit-button is disabled when email is incorrect', () => {
    cy.visit('/kontaktskjema')
    cy.get('#navn').type('jens')
    cy.get('#epost').type('ukorrektepost@feil')
    cy.get('#melding').type('Dette var egentlig ikke en spesielt god kalkulator')
    cy.get('#submit').should('be.disabled')
  })

  it('submit-button is disabled when message is empty', () => {
    cy.visit('/kontaktskjema')
    cy.get('#navn').type('jens')
    cy.get('#epost').type('jens.christian.aanestad@gmail.com')
    cy.get('#submit').click()
    cy.get('#submit').should('be.disabled')
  })

  it('get status from server', () => {
    cy.visit('/kontaktskjema')
    cy.get('#navn').type('jens')
    cy.get('#epost').type('jens.christian.aanestad@gmail.com')
    cy.get('#melding').type('Dette var egentlig ikke en spesielt god kalkulator')
    cy.get('#submit').click()
    cy.on('window:alert', (message) => {
      expect(message).to.equal('Status: success');
    });
  })
})