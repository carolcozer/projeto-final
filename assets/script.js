function validarFormulario(id) {
  alert("Formulário enviado com sucesso!");
}

document.addEventListener("DOMContentLoaded", function () {
  const cpfInputs = document.querySelectorAll(".cpf");

  cpfInputs.forEach(function (cpfInput) {
    cpfInput.addEventListener("input", function (e) {
      let value = e.target.value.replace(/\D/g, "");
      if (value.length > 11) value = value.slice(0, 11);
      let formatted = value;
      if (value.length >= 4 && value.length <= 6)
        formatted = value.replace(/(\d{3})(\d+)/, "$1.$2");
      else if (value.length > 6 && value.length <= 9)
        formatted = value.replace(/(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
      else if (value.length > 9)
        formatted = value.replace(
          /(\d{3})(\d{3})(\d{3})(\d{2})/,
          "$1.$2.$3-$4"
        );
      e.target.value = formatted;
    });
  });
});

function loadContent(section) {
  const main = document.getElementById("mainContent");
  const estados = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];
  const hospitais = [
    "Clínica VidaMais",
    "Hospital Aurora",
    "Hospital Bem Viver",
    "Hospital Central Vida",
    "Hospital Esperança",
    "Hospital Horizonte",
    "Hospital Luz do Sol",
    "Hospital Nova Saúde",
    "Hospital Primavera",
    "Hospital ProVida",
    "Hospital São Rafael",
    "Hospital Vida e Saúde",
    "Instituto Médicos do Bem",
    "Santa Casa Harmonia",
    "Unidade Médica Horizonte",
  ];
  let form = "";

  switch (section) {
    case "pacientes":
      form = `
        <h2>Cadastro de Pacientes</h2>
        <form id="formPacientes" class="form-card">
          <label>Nome Completo:</label>
          <input type="text" required pattern="[A-Za-zÀ-ÿ ']+">
          <label>Data de Nascimento:</label>
          <input type="date" required max="2025-12-31">
          <label>CPF:</label>
          <input type="text" class="cpf" placeholder="000.000.000-00" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" required>
          <label>Plano de Saúde:</label>
          <select required>
            <option value="">Selecione</option>
            <option>Alice Saúde</option>
            <option>Allianz Saúde</option>
            <option>Amil</option>
            <option>Bradesco Saúde</option>
            <option>Care Plus</option>
            <option>Hapvida</option>
            <option>NotreDame Intermédica</option>
            <option>Porto Seguro Saúde</option>
            <option>Seguros Unimed</option>
            <option>SulAmérica Saúde</option>
            <option>Unimed Vale dos Sinos</option>
          </select>
          <label>Especialidade:</label>
          <select required>
            <option value="">Selecione</option>
            <option>Cardiologia</option>
            <option>Cirurgia Geral</option>
            <option>Clínica Médica</option>
            <option>Dermatologia</option>
            <option>Endocrinologia</option>
            <option>Gastroenterologia</option>
            <option>Geriatria</option>
            <option>Ginecologia</option>
            <option>Neurologia</option>
            <option>Obstetrícia</option>
            <option>Oftalmologia</option>
            <option>Ortopedia</option>
            <option>Pediatria</option>
            <option>Psiquiatria</option>
            <option>Reumatologia</option>
            <option>Traumatologia</option>
            <option>Urologia</option>
          </select>
      <button type="submit">Cadastrar</button>
    </form>
    <button onclick="loadContent('inicio')" class="btn-voltar">Voltar</button>`;
      break;

    case "telemedicina":
      form = `
        <h2>Telemedicina</h2>
        <form class="form-card">
          <label>Paciente:</label>
          <input type="text">
          <label>Data da Consulta:</label>
          <input type="date">
          <label>Horário da Consulta:</label>
          <input type="time">
          <label>Plataforma:</label>
          <select>
            <option>Zoom</option>
            <option>Meet</option>
            <option>Teams</option>
          </select>
          <button type="submit">Agendar Teleconsulta</button>
        </form>
        <button onclick="loadContent('inicio')" class="btn-voltar">Voltar</button>`;
      break;

    case "admin":
      form = `
        <h2>Administração Hospitalar</h2>
        <form class="form-card">
          <label for="hospital">Nome do Hospital:</label>
          <select id="hospital" name="hospital" required>
            <option value="">Selecione</option>
            ${hospitais.map((h) => `<option>${h}</option>`).join("")}
          </select>
          <label for="tipoRelatorio">Tipo de Relatório:</label>
          <select id="tipoRelatorio" name="tipoRelatorio">
            <option>Financeiro</option>
            <option>Suprimentos</option>
            <option>Internações</option>
          </select>
          <button type="submit">Gerar Relatório</button>
        </form>
        <button onclick="loadContent('inicio')" class="btn-voltar">Voltar</button>`;
      break;

    default:
      form = `<h2>Bem-vindo(a)</h2><p>Selecione uma funcionalidade.</p>`;
  }

  main.innerHTML = form;
  setTimeout(() => {
    const f = main.querySelector("form");
    if (f) {
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        validarFormulario(f.id);
      });

      const newCpfInputs = main.querySelectorAll(".cpf");
      newCpfInputs.forEach(function (cpfInput) {
        cpfInput.addEventListener("input", function (e) {
          let value = e.target.value.replace(/\D/g, "");
          if (value.length > 11) value = value.slice(0, 11);

          let formatted = value;
          if (value.length >= 4 && value.length <= 6)
            formatted = value.replace(/(\d{3})(\d+)/, "$1.$2");
          else if (value.length > 6 && value.length <= 9)
            formatted = value.replace(/(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
          else if (value.length > 9)
            formatted = value.replace(
              /(\d{3})(\d{3})(\d{3})(\d{2})/,
              "$1.$2.$3-$4"
            );

          e.target.value = formatted;
        });
      });
    }
  }, 0);
}
