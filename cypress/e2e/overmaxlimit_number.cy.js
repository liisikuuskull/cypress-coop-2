//Test-4

describe('Test Over Maxlimit Number', () => {
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

       const numberToEnter = 11000;
      cy.get('#edit-monthly-income').type(numberToEnter);
  
      
      cy.get('#edit-monthly-income').should('have.css', 'border-color', 'rgb(85, 85, 85)'); //Tekib punane joon
    });
 });
 