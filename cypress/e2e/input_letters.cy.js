//Test-5

describe('Test Input Letters', () => {
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

       const letterToEnter = 'e';
      cy.get('#edit-monthly-income').type(letterToEnter);
  
      
      cy.get('#edit-monthly-income').should('have.value', '');
      cy.get('#edit-monthly-income').should('have.css', 'border-color', 'rgb(85, 85, 85)'); //Tekib punane joon
    });
 });
 