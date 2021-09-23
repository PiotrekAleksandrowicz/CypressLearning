describe("This test use validUser.json data from fixtures folder", () => {

    it('Get into xxxx/login', () => {
        cy.visit('xxx//login')
        cy.wait(5000) 
    })

    it('Use data from validUser.json to login', () => {
        cy.fixture('validUser').then(validUser => {

            const username1 = validUser.username
            const password1 = validUser.password

            cy.get("[id='t-login-username']").type(username1)
            cy.get("[id='t-login-password']").type(password1)
        })
    })

    it('Making screenshot of full page', () => {
        cy.screenshot({capture : 'fullPage'})
    })
})