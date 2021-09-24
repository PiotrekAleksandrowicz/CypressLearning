class ClearCookiesLocalStoragePage {
    static clearCookie(){
        cy.clearCookies()
    }
    static clearLocalStorag(){
        cy.clearLocalStorage()
    }
}
export default ClearCookiesLocalStoragePage