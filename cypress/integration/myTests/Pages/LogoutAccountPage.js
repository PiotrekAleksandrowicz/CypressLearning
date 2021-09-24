class LogoutAccountPage {
    static logout(){
        cy.get('[class="avatar"]').click()
        cy.get('[class="icon-logout-badge"]').click()
    }
}
export default LogoutAccountPage