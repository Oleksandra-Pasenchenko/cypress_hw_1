let user;

describe('Successful registration', () => {
  before(function () {
    cy.task("freshUser").then((object) => {
      user = object;
    });
  });

  it('Sign up on Conduit website with faker', () => {
    cy.visit('http://localhost:1667/#/register');

    cy.get(':nth-child(1) > .form-control').type(user.username);
    cy.get(':nth-child(2) > .form-control').type(user.email);
    cy.get(':nth-child(3) > .form-control').type(user.password);

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').contains(user.username).should('exist');
  })
})