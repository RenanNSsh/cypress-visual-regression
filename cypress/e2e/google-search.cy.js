describe('Teste Visual de Regressão', () => {
  it('verificar que a página continua a mesma', () => {
      cy.visit('/')
      cy.compareSnapshot('home', {
          capture: 'fullPage',
          errorThreshold: 0.0
        });
  });
});