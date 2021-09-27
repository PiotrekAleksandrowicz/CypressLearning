import ClearCookiesLocalStoragePage from '../Pages/ClearCookiesLocalStoragePage.js'

class LoadPage extends ClearCookiesLocalStoragePage{
    static load(page){
        cy.visit(page)
    }
}
export default LoadPage