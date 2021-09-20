describe('This test simulate logging into account performing "enter" button on keyboard using data from json file', () =>{
    
    it('Get into https://app.master1.qappg.co/login', () => {
        cy.visit("https://app.master1.qappg.co/login")
    })

    it('clear local storage an cookies', () => {
        cy.clearCookies({log : true})
        cy.clearLocalStorage('item' ,{log : true})
    })

    it('Fill input fields using date from json file', () =>{
        cy.fixture('validUser2').then(validUser2 => {

            const username3 = validUser2.username
            const password3 = validUser2.password

            cy.get("[id='t-login-username']").type(username3)
            cy.get("[id='t-login-password']").type(password3)
        })
    })

    it('Checking name of current project', () =>{
        cy.get('[class="primary size24 text-normal"]')
            .should('be.visible')
            .and('contain','PluginsFirefox')
    })
})  

