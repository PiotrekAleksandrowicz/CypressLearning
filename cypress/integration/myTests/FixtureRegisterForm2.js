describe("This test use invalidUser.json data from fixtures folder", () => {

    it('Get into xxxx/login', () => {
        cy.visit('xxxx/login')
        cy.wait(5000) 
    })

    it('Use data from invalidUser.json to login', () => {
        cy.fixture('invalidUser').then(invalidUser => {

            const username2 = invalidUser.username
            const password2 = invalidUser.password

            cy.get("[id='t-login-username']").type(username2)
            cy.get("[id='t-login-password']").type(password2)
        })
    })

    it('Perform login button', () => {
        cy.get("[type='submit']").click()
    })

    it('Check text from Toast alert', () => {
        cy.get('[class="Toastify__toast-body"]')
        .should('be.visible')
        .and('contain','Invalid email was given')
    })
})