//Test-7
describe('Test Submit Button', () => {
    before(() => {
       
       cy.visit('https://www.cooppank.ee/kodulaen', {
          onBeforeLoad(win) {
             win.jQuery = win.$ = require('jquery');
          },
       });
    });
 
    it('should open cooppank page', () => {
       cy.get('.btn-primary.agree-button').contains('Nõustun kõigi küpsistega').click();

       cy.get('.btn-primary.btn-full-width:contains("Esita taotlus")').should('be.visible').first().click({force: true});
       cy.wait(2000);
       cy.contains('Palun tuvasta ennast').should('exist');

    });
 });
 