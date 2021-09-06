describe('Fullfill register form and click on the chackbox', () => {
    it('Get into https://app.master1.qappg.co/login', () => {
        cy.visit('https://app.master1.qappg.co/login')
    })
    it('Fill mail and password', () => {
        cy.get("[id='t-login-username']").as('emailInput')
        cy.get('emailInput').click().type('piotraleksandrowicz2@pushpushgo.com')
        y.get("[id='t-login-password']").as('passwordInput')
        cy.get('passwordInput').click().type('DCRvx1000eMK!')
    })
    it('Click checkbox', () => {
        cy.get("[type='checkbox']").as('checkbox')
        cy.get('checkbox').click()
    })
    it('Click login button', () => {
        cy.get("[type='submit']").as('loginButton')
        cy.get('loginButton').click()
    })
    it('Chek you are logged', () => {
        cy.get("[class='primary size24 text-normal']").as('nameOfProject')
        cy.get('nameOfProject').contains('PROJEKT API NORBERT')
    })
})