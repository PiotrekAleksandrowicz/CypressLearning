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
export default LoadPage

class LoginAccount {
    static login (userMail,userPassword){
        cy.wait(2000)
        cy.get("[id='t-login-username']").type(userMail)
        cy.get("[id='t-login-password']").type(userPassword)
        cy.get('button[type="submit"]').click()
    }
}
export default LoginAccount

class LogoutAccount {
    static logout(){
        cy.get('[class="avatar"]').click()
        cy.get('[class="icon-logout-badge"]').click()
    }
}
export default LogoutAccount