describe('Get into Sign Up', () => {
    it('Get into Sign Up', () => {
        cy.visit('https://pushpushgo.com/')
        cy.wait(5000)
        cy.get("[class='icon-menu main-menu-toggle']").click()
        cy.get("[class='btn--medium sign-up-btn btn register']").click()
        cy.wait(2000)
        cy.xpath('/html/body/main/div/div/div/div/div/div[2]/div/form/div[1]/div/input').click().type('Piotr')
        cy.xpath('/html/body/main/div/div/div/div/div/div[2]/div/form/div[2]/div/input').click().type('Testerowicz')
        cy.xpath('/html/body/main/div/div/div/div/div/div[2]/div/form/div[3]/div/input').click().type('piotraleksandrowicz@pushpushgo.com')
        cy.xpath('/html/body/main/div/div/div/div/div/div[2]/div/form/div[4]/div/input').click().type('piotraleksandrowicz@pushpushgo.com')
        cy.get('#ppg-app>div>div>div>div>div>div.auth-panel-column--right>div>form>div:nth-child(5)>div>div').click().type('DCRvx1000eMK!')
        cy.get('#ppg-app>div>div>div>div>div>div.auth-panel-column--right>div>form>div:nth-child(6)>div>div').click().type('DCRvx1000eMK!')   
    })  
  })

  /*describe('Fill register form', () => {
    it('Fill register form', () => {
        cy.xpath('/html/body/main/div/div/div/div/div/div[2]/div/form/div[1]/div/input').click()
        cy.xpath('/html/body/main/div/div/div/div/div/div[2]/div/form/div[2]/div/input').click().type('Aleksandrowic')
        cy.xpath('/html/body/main/div/div/div/div/div/div[2]/div/form/div[3]/div/input').click().type('piotraleksandrowicz@pushpushgo.com')
        cy.xpath('/html/body/main/div/div/div/div/div/div[2]/div/form/div[4]/div/input').click().type('piotraleksandrowicz@gmail.com')
        })  
  })*/