import LoadPage from '../Pages/LoadPage.js'
import LoginAccountPage from '../Pages/LoginAccountPage.js'
import LogoutAccountPage from '../Pages/LogoutAccountPage.js'
import ClearCookiesLocalStoragePage from '../Pages/ClearCookiesLocalStoragePage.js'


describe('logiin and logout account',() =>{

    it('Load Page', () =>{
        LoadPage.load('https://app.master1.qappg.co/login')
    })

    it('Clear Cookies & Local Storage', () =>{
        LoadPage.clearLocalStorag()
        LoadPage.clearCookie()
    })

    it('Login account', () =>{
        LoginAccountPage.login('bezdgore@gmail.com', 'DCRvx1000eMK!!')
    })

    it('Logout account', () =>{
        LogoutAccountPage.logout()
        
    })
 })

/*npx cypress run --spec="cypress/integration/myTests/LoginLogout.js" */

