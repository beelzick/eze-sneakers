describe('add product', () => {
    it('user can log in add product', () => {
        cy.visit('/')
        cy.findByText(/log in/i).click()
        cy.findByRole('textbox').type('bob@gmail.com')
        cy.findByTestId('password').type('bob123')
        cy.findByRole('button', { name: /log in/i }).click()
        cy.findByText(/successfully logged in/i).should('be.visible')
        cy.findByRole('link', { name: /season/i }).click()
        cy.findByRole('img', { name: /nike pegasus 200/i }).click()
        cy.findByText(/eu 40\.5/i).click()
        cy.findByRole('button', { name: /add to cart/i }).click()
        cy.findByRole('link', { name: /shopping cart/i }).click()
        cy.findByRole('heading', { name: /nike pegasus 200/i }).should('be.visible')
    })
})