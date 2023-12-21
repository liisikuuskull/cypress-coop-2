
//Test-1
describe('Test Open Page', () => {
   before(() => {
      
      cy.visit('https://www.cooppank.ee/kodulaen', {
         onBeforeLoad(win) {
            win.jQuery = win.$ = require('jquery');
         },
      });
   });

   it('should open cooppank page', () => {
      cy.get('.btn-primary.agree-button').contains('Nõustun kõigi küpsistega').click();
   });
});

 