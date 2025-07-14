# SGHSS - Sistema de Gestão Hospitalar e de Serviços de Saúde (Frontend)

Este projeto é um sistema de gestão hospitalar com foco em uma interface web simples, funcional e responsiva. O objetivo é fornecer um ambiente unificado para o cadastro de pacientes, profissionais de saúde, agendamentos, atendimentos por telemedicina e gestão administrativa.

## Funcionalidades

- Cadastro de pacientes (com validação de CPF e plano de saúde)
- Cadastro de profissionais com CRM e especialidade médica
- Agendamentos de consultas presenciais
- Telemedicina com data, horário e plataforma de videoconferência
- Administração hospitalar e geração de relatórios

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Cypress (para testes automatizados)
- Live Server (ambiente local via VSCode)

## Estrutura de Arquivos

```
sghss-frontend
 ┣ index.html
 ┣ dashboard.html
 ┣ script.js
 ┣ styles.css
 ┣ cypress/
 ┃ ┣ e2e/
 ┃ ┃ ┗ form_test.cy.js
 ┣ package.json
 ┗ README.md
```

## Executando o Projeto

1. Instale o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VSCode.
2. Clique com o botão direito no arquivo `index.html` > **"Open with Live Server"**
3. O navegador abrirá em `http://localhost:5500` (ou porta similar).

## Testes Automatizados com Cypress

### Instalação

```bash
npm install cypress --save-dev
```

### Rodando os testes

```bash
npx cypress open
# ou com script do package.json:
npm run test
```

### Script no package.json

```json
"scripts": {
  "test": "cypress open"
}
```

### Casos de Teste Implementados

| Código | Descrição                              | Resultado Esperado                       |
| ------ | -------------------------------------- | ---------------------------------------- |
| CT001  | Cadastro de paciente com dados válidos | Alerta "Formulário enviado com sucesso!" |
| CT002  | Impedir cadastro sem informar CPF      | Impedir envio e destacar campo inválido  |

### Trecho de Teste Automatizado

```js
describe("Testes do SGHSS", () => {
  it("CT001 - Cadastro de paciente com dados válidos", () => {
    cy.visit("http://localhost:5500");
    cy.contains("Pacientes").click();
    cy.get("input[type=text]").eq(0).type("João da Silva");
    cy.get("input[type=date]").type("1990-01-01");
    cy.get(".cpf").type("12345678901");
    cy.get("select").eq(0).select("Amil");
    cy.get("select").eq(1).select("Cardiologia");
    cy.get("button[type=submit]").click();
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("Formulário enviado com sucesso");
    });
  });

  it("CT002 - Impedir cadastro sem CPF", () => {
    cy.visit("http://localhost:5500");
    cy.contains("Pacientes").click();
    cy.get("input[type=text]").eq(0).type("Maria Oliveira");
    cy.get("input[type=date]").type("1985-06-15");
    cy.get(".cpf").clear();
    cy.get("select").eq(0).select("Bradesco Saúde");
    cy.get("select").eq(1).select("Dermatologia");
    cy.get("button[type=submit]").click();
    cy.get(".cpf:invalid").should("exist");
  });
});
```

---

## Observações

- Este projeto simula o frontend com dados estáticos e entradas via formulário
- Pode ser facilmente acoplado a uma API ou backend em Node.js, Python, etc
- Testes básicos garantem funcionalidade e usabilidade das principais seções
