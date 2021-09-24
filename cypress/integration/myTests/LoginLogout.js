describe('logiin and logout account',() =>{
    
    it('Load Page, https://app.master1.qappg.co/login ', () =>{
        LoadLoginPage.load('https://app.master1.qappg.co/login')
    })

   it('Clear Cookies & Local Storage', () =>{
       LoadLoginPage.clearCookie()
       LoadLoginPage.clearLocalStorag()
   })

   it('logiin account', () =>{
        LoginAccount.login('bezdgore@gmail.com','DCRvx1000eMK!')
    })

    it('logout account', () =>{
        LogoutAccount.logout()
    })
})

/*npx cypress run --spec="cypress/integration/myTests/LoginLogout.js" */

