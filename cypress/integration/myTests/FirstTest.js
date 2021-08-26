describe('My first test', () => {
  it('True need to be True', () => {
      expect(true).to.equal(true)
  })  
  it('5 need to be 5', () => {
      expect(5).to.equal(5)
  })
})

describe('My second test', () => {
    it('True need to be True', () => {
        cy.visit('https://pushpushgo.com/')
        cy.wait(5000)
        /*cy.get("[class='icon-menu main-menu-toggle']").click
        cy.get('#gatsby-focus-wrapper > header > div > div.nav-items > nav.auth-nav > a.btn--medium.sign-up-btn.btn.register').click*/
    })  
  })