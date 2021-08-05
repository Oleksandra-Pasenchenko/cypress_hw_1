describe('Successful login', () => {
  it('Log in on the conduit website with valid credentials', () => {
    cy.visit('http://localhost:1667/#/login');

    cy.get(':nth-child(1) > .form-control').type('asdfghj12@test.com');
    cy.get(':nth-child(2) > .form-control').type('Asdfghj12');

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').contains('Atque aut culpa poss').should('exist');
  })
})
