class LoginAccountPage {
    static login(userMail,userPassword){
        cy.get("[id='t-login-username']").type(userMail)
        cy.get("[id='t-login-password']").type(userPassword)
        cy.get('button[type="submit"]').click()
    }
}
export default LoginAccountPage