
//Test-8
describe('Test Period Scale', () => {
    before(() => {
       
       cy.visit('https://www.cooppank.ee/kodulaen', {
          onBeforeLoad(win) {
             win.jQuery = win.$ = require('jquery');
          },
       });
    });
 
    it('should open cooppank page', () => {
       cy.get('.btn-primary.agree-button').contains('Nõustun kõigi küpsistega').click();

       cy.get('#loan-tab.tab-pane.loan-tab-item-wrapper-1').invoke('css', 'display', 'block').scrollIntoView().should('be.visible');

       cy.get('.ui-slider-handle')
            .first()
            .should('be.visible')
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove', { clientX: 1000, clientY: 100 })
            .trigger('mouseup')
            .then(($handle) => {
                // Logige skaala käepideme praegune stiil
                const currentStyle = $handle.attr('style');
                cy.log('Current style:', currentStyle);
            });

            cy.wait(5000);
            cy.get('.ui-slider-handle').first().invoke('attr', 'style').then((currentStyle) => {
                cy.log('Current style:', currentStyle);
            
                // Veenduge, et stiil sisaldab oodatud väärtust (asukoht võib olla erinev)
                expect(currentStyle).to.include('left: 48%');
            });
            
            // Oodake, kuni tekst "15 aastat" on nähtav
            cy.contains('15 aastat', { timeout: 5000 }).should('be.visible');

    });
 });
 