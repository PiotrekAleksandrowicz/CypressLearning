class ClearCookiesLocalStorage {
    static clearCookie(){
        cy.clearCookies()
    }
    static clearLocalStorag(){
        cy.clearLocalStorage()
    }
}

class LoadPage extends ClearCookiesLocalStorage{
    static load(page){
        cy.visit(page)
    }
}

class LoginAccount {
    static login (userMail,userPassword){
        cy.wait(2000)
        cy.get("[id='t-login-username']").type(userMail)
        cy.get("[id='t-login-password']").type(userPassword)
        cy.get('button[type="submit"]').click()
    }
}

class LogoutAccount {
    static logout(){
        cy.get('[class="avatar"]').click()
        cy.get('[class="icon-logout-badge"]').click()
    }
}

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
 
 