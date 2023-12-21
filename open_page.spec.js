describe('Open Page Test', () => {
    it('should open the Coop Pank page', () => {
      cy.visit('https://www.cooppank.ee/kodulaen');
      cy.url().should('include', 'kodulaen');
    });
  });
  