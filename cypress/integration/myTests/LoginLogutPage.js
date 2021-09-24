class ClearCookiesLocalStorage {
    static clearCookie(){
        cy.ClearCookies()
    }
    static clearLocalStorag(){
        cy.clearLocalStorage()
    }
}

class LoadLoginPage extends ClearCookiesLocalStorage{
    static load(page){
        cy.visit(page)
    }
}

class LoginAccount {
    static login (userMail,userPassword){
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
}3