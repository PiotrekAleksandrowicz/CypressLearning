const cypress = require("cypress")
const { it } = require("mocha")

describe('Search Box test',() => {

    before(function(){
        cy.visit('http://http://zero.webappsecurity.com/')
    })

    it('Shoud type some text into search box', () => {
        cypress.get('[id="searchTerm"]').type('some text {enter}')
    })

    it('Should show sear results page ', () => {
        cy.get('h2').contains('Search Results:')
    })
})