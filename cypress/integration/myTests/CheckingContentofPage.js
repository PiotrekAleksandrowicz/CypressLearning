describe('Test of content of website', () => {
  
    it('visit webSite', ()=>{
        cy.visit('https://testqapa1.stppg.co/')
        cy.wait(2000)
    })

    it('Check content of website', () =>{
        cy.document()
            .should('have.property','src')
            .and('eq', 'https://s-eu-1.pushpushgo.com/js/605d936beb6b8169f2bf6188.js')
    })
})
