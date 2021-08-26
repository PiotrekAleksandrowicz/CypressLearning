describe('Get into Sign Up', () => {
    it('Get into Sign Up', () => {
        cy.visit('https://pushpushgo.com/')
        cy.wait(5000)
        cy.get("[class='icon-menu main-menu-toggle']").click()
        cy.get("[class='btn--medium sign-up-btn btn register']").click()
        })  
  })

  describe('Fill register form', () => {
    it('Fill register form', () => {
        cy.
        cy.xpath('/html/body/main/div/div/div/div/div/div[2]/div/form/div[1]/div/input').click().type('Piotr')
        cy.xpath('/html/body/main/div/div/div/div/div/div[2]/div/form/div[2]/div/input').click().type('Aleksandrowic')
        cy.xpath('/html/body/main/div/div/div/div/div/div[2]/div/form/div[3]/div/input').click().type('piotraleksandrowicz@pushpushgo.com')
        cy.xpath('/html/body/main/div/div/div/div/div/div[2]/div/form/div[4]/div/input').click().type('piotraleksandrowicz@gmail.com')
        })  
  })