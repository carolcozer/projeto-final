describe('Testes do SGHSS', () => {
  it('CT001 - Cadastro de paciente com dados válidos', () => {
    cy.visit('http://localhost:5500');
    cy.contains('Pacientes').click();
    cy.get('input[type=text]').eq(0).type('João da Silva');
    cy.get('input[type=date]').type('1990-01-01');
    cy.get('.cpf').type('12345678901');
    cy.get('select').eq(0).select('Amil');
    cy.get('select').eq(1).select('Cardiologia');
    cy.get('button[type=submit]').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Formulário enviado com sucesso');
    });
  });

  it('CT002 - Impedir cadastro sem CPF', () => {
    cy.visit('http://localhost:5500');
    cy.contains('Pacientes').click();
    cy.get('input[type=text]').eq(0).type('Maria Oliveira');
    cy.get('input[type=date]').type('1985-06-15');
    cy.get('.cpf').clear();
    cy.get('select').eq(0).select('Bradesco Saúde');
    cy.get('select').eq(1).select('Dermatologia');
    cy.get('button[type=submit]').click();
    cy.get('.cpf:invalid').should('exist');
  });
});
