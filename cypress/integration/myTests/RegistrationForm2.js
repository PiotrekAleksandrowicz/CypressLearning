describe('Checking all inputs are displayed', () => {

    it('get into registration form', () =>{
        cy.visit('https://app.pushpushgo.com/register')
    })
    
    it('count number of input fields', () => {
        cy.get('.input-field').its('length').should('eq', 6)
    })
})