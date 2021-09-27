describe('Search Box test', () => {

    before(function() {
        cy.visit('http://zero.webappsecurity.com/')
        cy.wait(5000)
    })

    it('Shoud type some text into search box', () => {
        cy.get("input[id='searchTerm']").type('some text {enter}')
    })

    it('Should show sear results page ', () => {
        cy.get('h2').contains('Search Results:')
    })
})