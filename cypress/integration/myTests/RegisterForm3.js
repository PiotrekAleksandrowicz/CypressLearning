describe('Register test, fill inputs usnig array of elements', () => {

    it('Get into registration form', () => {
        cy.visit('https://app.pushpushgo.com/register')
    })

    it('Use array of inputs to fill input fields', () => {
        cy.get('.input-field').eq(0).click().type('Piotr')
        cy.get('.input-field').eq(1).click().type('Aleksandrowicz')
        cy.get('.input-field').eq(2).click().type('piotraleksandrowicz@pushpushgo.com')
        cy.get('.input-field').eq(3).click().type('piotraleksandrowicz@pushpushgo.com')
        cy.get('.input-field').eq(4).click().type('DCRvx1000eMK!')
        cy.get('.input-field').eq(5).click().type('DCRvx1000eMK!')
    })

    it('Checking lengh of array eye button', () => {
        cy.get("[class='eye-button hide-eye']").its('length').should('eq', 2)
    })

    it('Pause dabug', () => {
        cy.pause()
    })

    it('Click an eye button to show passwords', () => {
        cy.get("[role='button']").eq(0).click()
        cy.get("[role='button']").eq(1).click()
    })
    
})
