describe('Register test, fill inputs usnig array of elements', () => {

    it('Get into registration form', () => {
        cy.visit('https://app.pushpushgo.com/register')
        cy.log('Successfuly load https://app.pushpushgo.com/register')
        cy.clearCookies({log : true})
        cy.clearLocalStorage('your item', {log : true})
    })

    it('Reloading of website', () => {
        cy.reload()
        cy.log('Website reloaded succesfully')
    })

    it('Use array of inputs to fill input fields', () => {
        cy.get('.input-field').eq(0).click().type('Piotr')
        cy.get('.input-field').eq(1).click().type('Aleksandrowicz')
        cy.get('.input-field').eq(2).click().type('piotraleksandrowicz@pushpushgo.com')
        cy.get('.input-field').eq(3).click().type('piotraleksandrowicz@pushpushgo.com')
        cy.get('.input-field').eq(4).click().type('DCRvx1000eMK!')
        cy.get('.input-field').eq(5).click().type('DCRvx1000eMK!')
        cy.log('all fields are filled in correctly')
    })

    it('Checking lengh of array eye button', () => {
        cy.get("[class='eye-button hide-eye']").its('length').should('eq', 2)
        cy.log('Length of array is correct')
    })

    it('Pause dabug', () => {
        cy.pause()
    })

    it('Click an eye button to show passwords', () => {
        cy.get("[role='button']").eq(0).click()
        cy.get("[role='button']").eq(1).click()
        cy.log('Eye buttons are clickable')
    })
    
})
