
describe('can visit site and cick things', () => {
  it('can visit the site', () => {
   cy.visit('https://example.cypress.io')
   cy.title().should('include', 'Kitchen Sink')
  })

  it('can click a link', () => {
   cy.get('a').contains('type').click();
   cy.get('#email1').type('rasjoh@gmail.com{enter}');
   cy.get('#email1').should('have.value', '');
  })
});
