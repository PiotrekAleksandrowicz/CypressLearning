describe('Register Test', () => {

  it('Get into https://pushpushgo.com/', () => {
    cy.visit('https://pushpushgo.com/')
    cy.wait(5000) 
  }) 

  it('Get into span', () => {
    cy.get("[class='icon-menu main-menu-toggle']").click()
    cy.get("[class='btn--medium sign-up-btn btn register']").click()  
  })

  it('Pause dabug', () => {
    cy.pause()
  })

  it('Check register form url' , () => {
    cy.url().should('include', '/register')
  })

  it('Checking visibility of name form', () => {
    cy.get('h1',{ timeout: 10000 }).should('be.visible')
    
  })

  it('Fill register form', () => {
    cy.xpath('/html/body/main/div/div/div/div/div/div[2]/div/form/div[1]/div/input').click().type('Piotr')
    cy.xpath('/html/body/main/div/div/div/div/div/div[2]/div/form/div[2]/div/input').click().type('Testerowicz')
    cy.xpath('/html/body/main/div/div/div/div/div/div[2]/div/form/div[3]/div/input').click().type('piotraleksandrowicz@pushpushgo.com')
    cy.xpath('/html/body/main/div/div/div/div/div/div[2]/div/form/div[4]/div/input').click().type('piotraleksandrowicz@pushpushgo.com')
    cy.get('#ppg-app>div>div>div>div>div>div.auth-panel-column--right>div>form>div:nth-child(5)>div>div').click().type('DCRvx1000eMK!')
    cy.get('#ppg-app>div>div>div>div>div>div.auth-panel-column--right>div>form>div:nth-child(6)>div>div').click().type('DCRvx1000eMK!')   
  }) 
  
  it('Perform CREATE ACCOUNT AND LOGIN button', () => {
    cy.get("button[type='submit']").should('be.visible')
  })
})

  