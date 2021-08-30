describe('Register test, fill inputs usnig array of elements', () => {

    it('Get into registration form', () => {
        cy.visit('https://app.pushpushgo.com/register')
    })

    it('Use array of inputs to fill input fields', () => {
        cy.get('.input-field').eq(0).clicl().type('Piotr')
        cy.get('.input-field').eq(1).clicl().type('Aleksandrowicz')
        cy.get('.input-field').eq(2).clicl().type('piotraleksandrowicz@pushpushgo.com')
        cy.get('.input-field').eq(3).clicl().type('piotraleksandrowicz@pushpushgo.com')
        cy.get('.input-field').eq(4).clicl().type('DCRvx1000eMK!')
        cy.get('.input-field').eq(5).clicl().type('DCRvx1000eMK!')
    })

    it('Click an eye button to show passwords', () => {
        cy.get('.eye-button hide-eye').eq(0).click()
        cy.get('.eye-button hide-eye').eq(1).click()

    })
    
})
