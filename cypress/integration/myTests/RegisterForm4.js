describe('Fullfill register form and click on the chackbox', () => {
    it('Get into https://app.master1.qappg.co/login', () => {
        cy.visit('https://app.master1.qappg.co/login')
    })
    it('Fill mail and password', () => {
        cy.get("[id='t-login-username']").click().type('piotraleksandrowicz2@pushpushgo.com')
        cy.get("[id='t-login-password']").click().type('DCRvx1000eMK!')
    })
    it('Click checkbox', () => {
        cy.get("[type='checkbox']").click()
    })
    it('Click login button', () => {
        cy.get("[type='submit']").click()
    })
})