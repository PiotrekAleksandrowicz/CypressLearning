describe('Login test using login sutom comand', () =>{
    
    it('visit master1', () => {
        cy.visit('https://app.master1.qappg.co/login')
    })

    it('perform custom command', () => {
        cy.login('piotrek.g.aleksandrowicz@gmail.com','DCRvx1000eMK!')
    })
})