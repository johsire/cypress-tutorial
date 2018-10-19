
describe('can visit site and cick things', () => {
 it('can visit the site', () => {
  cy.visit('http://localhost:3000')
  cy.title().should('include', 'React App')
  })
 })
