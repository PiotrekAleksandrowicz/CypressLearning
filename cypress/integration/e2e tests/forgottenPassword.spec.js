describe('Forgotten pasword test', () => {

    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Click signUp button', () => {
        cy.get('button[id="signin_button"]').click()
    })

    it('Click forgotten pasword', () => {
        cy.get('.offset3 > a').click()
    })

    it('Print email to input', () => {
        cy.get('input[id="user_email"]').type('piotr271993@wp.pl')
    })

    it('Click Sign password button', () => {
        cy.get('input[type="submit"]').click()
    })

    it('Result page should have typed email', () => {
        cy.get('.offset3 span6 > div > div').contains('Your password will be sent to the following email: piotr271993@wp.pl')
    })
})