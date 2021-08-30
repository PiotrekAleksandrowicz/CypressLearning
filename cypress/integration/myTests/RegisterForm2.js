describe('Checking all inputs are displayed', () => {

    it('get into registration form', () =>{
        cy.visit('https://app.pushpushgo.com/register')
    })

    it('count number of input fields', () => {
        cy.get('.input-field').its('length').should('eq', 6)
    })

    it ('checking names of inputs', () => {
        cy.xpath('//*[@id="ppg-app"]/div/div/div/div/div/div[2]/div/form/div[1]/label').contains('Name')
        cy.xpath('//*[@id="ppg-app"]/div/div/div/div/div/div[2]/div/form/div[2]/label').contains('Last name')
        cy.xpath('//*[@id="ppg-app"]/div/div/div/div/div/div[2]/div/form/div[3]/label').contains('E-mail')
        cy.xpath('//*[@id="ppg-app"]/div/div/div/div/div/div[2]/div/form/div[4]/label').contains('Company or Organization name')
        cy.xpath('//*[@id="ppg-app"]/div/div/div/div/div/div[2]/div/form/div[5]/div/label').contains('Password')
        cy.xpath('//*[@id="ppg-app"]/div/div/div/div/div/div[2]/div/form/div[6]/div/label').contains('Repeat password')
    })

    it('checking names of inputs using array', () => {
        cy.get('label').eq(0).contains('Name')
        cy.get('label').eq(1).contains('Last name')
        cy.get('label').eq(2).contains('E-mail')
        cy.get('label').eq(3).contains('Company or Organization name')
        cy.get('label').eq(4).contains('Password')
        cy.get('label').eq(5).contains('Repeat password')
        
    })
})

