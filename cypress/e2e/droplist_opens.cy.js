//Test-6

describe('Test Droplist Opens', () => {
    before(() => {
       
       cy.visit('https://www.cooppank.ee/kodulaen', {
          onBeforeLoad(win) {
             win.jQuery = win.$ = require('jquery');
          },
       });
    });
 
    it('should open cooppank page', () => {
       cy.get('.btn-primary.agree-button').contains('Nõustun kõigi küpsistega').click();

       cy.get('#edit-monthly-income').clear();

       const numberToEnter = 9000;
      cy.get('#edit-monthly-income').type(numberToEnter);
  
      
      cy.get('#edit-monthly-income').should('have.value', numberToEnter.toString());

       cy.get('#edit-dependants-number').select('5 või rohkem');

       cy.wait(2000);

       cy.get('#edit-dependants-number').should('have.class', 'form-select-open');

    });
 });
 