

describe('Login test using login sutom comand', () =>{
    
    it('perform login custom comand', () => {

        cy.visit('https://app.master1.qappg.co/login')
        cy.test('piotrek.g.aleksandrowicz@gmail.com','DCRvx1000eMK!')

    })
})