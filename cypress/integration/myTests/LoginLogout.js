import LoadPage from '../myTests/LoginLogutPage.js'
import LoginAccount from '../myTests/LoginLogutPage.js'
import LogoutAccount from '../myTests/LoginLogutPage.js'


describe('logiin and logout account',() =>{
    it('Load Page', () =>{
        LoadPage.load('https://app.master1.qappg.co/login')
    })
    it('Clear Cookies & Local Storage', () =>{
        LoadPage.clearLocalStorag()
        LoadPage.clearCookie()
    })
    it('Login account', () =>{
        LoginAccount.login('bezdgore@gmail.com','DCRvx1000eMK!!')
    })
    it('Logout account', () =>{
        LogoutAccount.logout()
    })
 })

/*npx cypress run --spec="cypress/integration/myTests/LoginLogout.js" */

