const cypress = require("cypress")
const { it } = require("mocha")

describe('Test of checking content of webSite', () =>{

    it('check into webSite https://testqapa1.stppg.co/', () => {

        cy.visit('https://testqapa1.stppg.co/')
        cy.wait(2000)
        cy.document()
            .should('have.property','src')
            .and('eq', 'https://s-eu-1.pushpushgo.com/js/605d936beb6b8169f2bf6188.js')
    })
})