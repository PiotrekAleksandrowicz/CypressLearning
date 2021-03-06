describe('Checking all inputs are displayed', () => {

    it('Mac 11 inch resolution', () => {
        cy.viewport("macbook-13")
    })

    it('Get into registration form', () =>{
        cy.visit('xxxx/register') /*p*/
        cy.log('Successfuly load xxxx/register')
        cy.clearCookies({log : true})
        cy.clearLocalStorage('your item', {log : true})

    })

    it('count number of input fields', () => {
        cy.get('.input-field').its('length').should('eq', 6)
        cy.log('Number of input fields is correct')
    })

    it ('checking names of inputs', () => {
        cy.xpath('//*[@id="ppg-app"]/div/div/div/div/div/div[2]/div/form/div[1]/label').contains('Name')
        cy.xpath('//*[@id="ppg-app"]/div/div/div/div/div/div[2]/div/form/div[2]/label').contains('Last name')
        cy.xpath('//*[@id="ppg-app"]/div/div/div/div/div/div[2]/div/form/div[3]/label').contains('E-mail')
        cy.xpath('//*[@id="ppg-app"]/div/div/div/div/div/div[2]/div/form/div[4]/label').contains('Company or Organization name')
        cy.xpath('//*[@id="ppg-app"]/div/div/div/div/div/div[2]/div/form/div[5]/div/label').contains('Password')
        cy.xpath('//*[@id="ppg-app"]/div/div/div/div/div/div[2]/div/form/div[6]/div/label').contains('Repeat password')
        cy.log('Inputs names are correct')
    })

    it('checking names of inputs using array', () => {
        cy.get('label').eq(0).contains('Name')
        cy.get('label').eq(1).contains('Last name')
        cy.get('label').eq(2).contains('E-mail')
        cy.get('label').eq(3).contains('Company or Organization name')
        cy.get('label').eq(4).contains('Password')
        cy.get('label').eq(5).contains('Repeat password')
        cy.log('Inputs names are correct')

    })
})

