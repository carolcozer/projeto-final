// Constantes globais
const ESPECIALIDADES = [
  "Cardiologia", "Cirurgia Geral", "Clínica Médica", "Dermatologia",
  "Endocrinologia", "Gastroenterologia", "Geriatria", "Ginecologia",
  "Neurologia", "Obstetrícia", "Oftalmologia", "Ortopedia",
  "Pediatria", "Psiquiatria", "Reumatologia", "Traumatologia", "Urologia"
];

const PLANOS_SAUDE = [
  "Alice Saúde", "Allianz Saúde", "Amil", "Bradesco Saúde",
  "Care Plus", "Hapvida", "NotreDame Intermédica",
  "Porto Seguro Saúde", "Seguros Unimed", "SulAmérica Saúde",
  "Unimed Vale dos Sinos"
];

const HOSPITAIS = [
  "Clínica VidaMais", "Hospital Aurora", "Hospital Bem Viver",
  "Hospital Central Vida", "Hospital Esperança", "Hospital Horizonte",
  "Hospital Luz do Sol", "Hospital Nova Saúde", "Hospital Primavera",
  "Hospital ProVida", "Hospital São Rafael", "Hospital Vida e Saúde",
  "Instituto Médicos do Bem", "Santa Casa Harmonia",
  "Unidade Médica Horizonte"
];

const ESTADOS = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
  "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
  "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

const PLATAFORMAS_TELEMEDICINA = ["Zoom", "Meet", "Teams"];

// Função principal para carregar conteúdo
function loadContent(section) {
  const main = document.getElementById("mainContent");

  let form = "";
  switch (section) {
    case "pacientes":
      form = getPacientesForm();
      break;
    case "profissionais":
      form = getProfissionaisForm();
      break;
    case "agendamentos":
      form = getAgendamentosForm();
      break;
    case "telemedicina":
      form = getTelemedicinaForm();
      break;
    case "admin":
      form = getAdminForm();
      break;
    default:
      form = getHomeContent();
  }

  main.innerHTML = form;
  initFormEvents();
}

// Funções para gerar os formulários
function getHomeContent() {
  return `
    <h2>Bem-vindo(a)</h2>
    <p>Selecione uma funcionalidade no menu abaixo.</p>
  `;
}

function getPacientesForm() {
  return `
    <h2>Cadastro de Pacientes</h2>
    <form id="formPacientes" class="form-card">
      <label for="nome">Nome Completo:</label>
      <input type="text" id="nome" name="nome" required pattern="[A-Za-zÀ-ÿ ]+">
      <small class="hint">Apenas letras e espaços</small>
      
      <label for="dataNasc">Data de Nascimento:</label>
      <input type="date" id="dataNasc" name="dataNasc" required max="${new Date().toISOString().split('T')[0]}">
      
      <label for="cpf">CPF:</label>
      <input type="text" id="cpf" name="cpf" class="cpf" placeholder="000.000.000-00" required>
      <small class="hint">Formato: 000.000.000-00</small>
      
      <label for="plano">Plano de Saúde:</label>
      <select id="plano" name="plano" required>
        <option value="">Selecione</option>
        ${PLANOS_SAUDE.map(plano => `<option>${plano}</option>`).join('')}
      </select>
      
      <label for="especialidade">Especialidade:</label>
      <select id="especialidade" name="especialidade" required>
        <option value="">Selecione</option>
        ${ESPECIALIDADES.map(esp => `<option>${esp}</option>`).join('')}
      </select>
      
      <label for="hospital">Hospital:</label>
      <select id="hospital" name="hospital" required>
        <option value="">Selecione</option>
        ${HOSPITAIS.map(hosp => `<option>${hosp}</option>`).join('')}
      </select>
      
      <button type="submit">Cadastrar</button>
    </form>
    <button onclick="loadContent('inicio')" class="btn-voltar">Voltar</button>
  `;
}

function getProfissionaisForm() {
  return `
    <h2>Cadastro de Profissionais</h2>
    <form id="formProfissionais" class="form-card">
      <label for="nome">Nome Completo:</label>
      <input type="text" id="nome" name="nome" required pattern="[A-Za-zÀ-ÿ ]+">
      <small class="hint">Apenas letras e espaços</small>
      
      <label for="uf">UF do CRM:</label>
      <select id="uf" name="uf" required>
        <option value="">Selecione</option>
        ${ESTADOS.map(uf => `<option>${uf}</option>`).join('')}
      </select>
      
      <label for="crm">Número do CRM:</label>
      <input type="text" id="crm" name="crm" required pattern="\\d{4,}">
      <small class="hint">Mínimo 4 dígitos</small>
      
      <label for="especialidade">Especialidade:</label>
      <select id="especialidade" name="especialidade" required>
        <option value="">Selecione</option>
        ${ESPECIALIDADES.map(esp => `<option>${esp}</option>`).join('')}
      </select>
      
      <button type="submit">Salvar</button>
    </form>
    <button onclick="loadContent('inicio')" class="btn-voltar">Voltar</button>
  `;
}

function getAgendamentosForm() {
  return `
    <h2>Agendamento de Consulta</h2>
    <form id="formAgendamento" class="form-card">
      <label for="paciente">Paciente:</label>
      <input type="text" id="paciente" name="paciente" required pattern="[A-Za-zÀ-ÿ ]+">
      <small class="hint">Apenas letras e espaços</small>
      
      <label for="data">Data da Consulta:</label>
      <input type="date" id="data" name="data" required min="${new Date().toISOString().split('T')[0]}">
      
      <label for="especialidade">Especialidade:</label>
      <select id="especialidade" name="especialidade" required>
        <option value="">Selecione</option>
        ${ESPECIALIDADES.map(esp => `<option>${esp}</option>`).join('')}
      </select>
      
      <label for="hospital">Hospital/Clínica:</label>
      <select id="hospital" name="hospital" required>
        <option value="">Selecione</option>
        ${HOSPITAIS.map(hosp => `<option>${hosp}</option>`).join('')}
      </select>
      
      <button type="submit">Agendar</button>
    </form>
    <button onclick="loadContent('inicio')" class="btn-voltar">Voltar</button>
  `;
}

function getTelemedicinaForm() {
  return `
    <h2>Agendamento de Teleconsulta</h2>
    <form id="formTelemedicina" class="form-card">
      <label for="paciente">Paciente:</label>
      <input type="text" id="paciente" name="paciente" required pattern="[A-Za-zÀ-ÿ ]+">
      <small class="hint">Apenas letras e espaços</small>
      
      <label for="data">Data:</label>
      <input type="date" id="data" name="data" required min="${new Date().toISOString().split('T')[0]}">
      
      <label for="hora">Horário:</label>
      <input type="time" id="hora" name="hora" required>
      
      <label for="plataforma">Plataforma:</label>
      <select id="plataforma" name="plataforma" required>
        <option value="">Selecione</option>
        ${PLATAFORMAS_TELEMEDICINA.map(plat => `<option>${plat}</option>`).join('')}
      </select>
      
      <label for="especialidade">Especialidade:</label>
      <select id="especialidade" name="especialidade" required>
        <option value="">Selecione</option>
        ${ESPECIALIDADES.map(esp => `<option>${esp}</option>`).join('')}
      </select>
      
      <button type="submit">Agendar Teleconsulta</button>
    </form>
    <button onclick="loadContent('inicio')" class="btn-voltar">Voltar</button>
  `;
}

function getAdminForm() {
  return `
    <h2>Administração Hospitalar</h2>
    <form id="formAdmin" class="form-card">
      <label for="hospital">Hospital:</label>
      <select id="hospital" name="hospital" required>
        <option value="">Selecione</option>
        ${HOSPITAIS.map(hosp => `<option>${hosp}</option>`).join('')}
      </select>
      
      <label for="tipoRelatorio">Tipo de Relatório:</label>
      <select id="tipoRelatorio" name="tipoRelatorio" required>
        <option value="">Selecione</option>
        <option>Financeiro</option>
        <option>Suprimentos</option>
        <option>Internações</option>
        <option>Atendimentos</option>
      </select>
      
      <label for="periodo">Período:</label>
      <select id="periodo" name="periodo" required>
        <option value="">Selecione</option>
        <option>Últimos 7 dias</option>
        <option>Últimos 30 dias</option>
        <option>Este mês</option>
        <option>Mês anterior</option>
        <option>Este ano</option>
      </select>
      
      <button type="submit">Gerar Relatório</button>
    </form>
    <button onclick="loadContent('inicio')" class="btn-voltar">Voltar</button>
  `;
}

// inicializa eventos dos formulários
function initFormEvents() {
  document.querySelectorAll('.cpf').forEach(input => {
    input.addEventListener('input', aplicarMascaraCPF);
  });

  const forms = {
    'formPacientes': validarFormPacientes,
    'formProfissionais': validarFormProfissionais,
    'formAgendamento': validarFormAgendamento,
    'formTelemedicina': validarFormTelemedicina,
    'formAdmin': validarFormAdmin
  };

  for (const [formId, handler] of Object.entries(forms)) {
    const form = document.getElementById(formId);
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        handler.call(this, e);
      });
    }
  }
}

// Funções de validação específicas pra cada from
function validarFormPacientes(e) {
  const form = e.target;
  const cpf = form.querySelector('#cpf').value;

  if (!isCpfValido(cpf)) {
    alert('CPF inválido. Verifique e tente novamente.');
    form.querySelector('#cpf').focus();
    return;
  }

  mostrarSucesso('Paciente cadastrado com sucesso!');
}

function validarFormProfissionais(e) {
  const form = e.target;
  const uf = form.querySelector('#uf').value;
  const crm = form.querySelector('#crm').value.trim();

  if (!uf) {
    alert('Selecione o UF do CRM.');
    return;
  }

  if (!/^\d{4,}$/.test(crm)) {
    alert('CRM inválido. Digite apenas números (mínimo 4 dígitos).');
    form.querySelector('#crm').focus();
    return;
  }

  mostrarSucesso(`Profissional cadastrado com sucesso!\nCRM: ${uf}-${crm}`);
}

function validarFormAgendamento(e) {
  const form = e.target;
  const data = new Date(form.querySelector('#data').value);
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  if (data < hoje) {
    alert('A data da consulta não pode ser no passado.');
    return;
  }

  mostrarSucesso('Consulta agendada com sucesso!');
}

function validarFormTelemedicina(e) {
  const form = e.target;
  const data = form.querySelector('#data').value;
  const hora = form.querySelector('#hora').value;

  if (!data || !hora) {
    alert('Preencha todos os campos de data e horário.');
    return;
  }

  mostrarSucesso(`Teleconsulta agendada com sucesso para ${data} às ${hora}`);
}

function aplicarMascaraCPF(e) {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length > 11) value = value.slice(0, 11);

  let formatted = value;
  if (value.length >= 4 && value.length <= 6) {
    formatted = value.replace(/(\d{3})(\d+)/, '$1.$2');
  } else if (value.length > 6 && value.length <= 9) {
    formatted = value.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
  } else if (value.length > 9) {
    formatted = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  e.target.value = formatted;
}

function isCpfValido(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = 11 - (soma % 11);
  let digito1 = resto >= 10 ? 0 : resto;

  if (parseInt(cpf.charAt(9)) !== digito1) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = 11 - (soma % 11);
  let digito2 = resto >= 10 ? 0 : resto;

  return parseInt(cpf.charAt(10)) === digito2;
}

function mostrarSucesso(mensagem) {
  alert(mensagem);
  loadContent('inicio');
}

// Inicialização
document.addEventListener('DOMContentLoaded', function () {
  loadContent('inicio');
});


function getAdminForm() {
  return `
    <h2>Administração Hospitalar</h2>
    <div class="admin-options">
      <button onclick="showAdminSection('pacientes')" class="admin-btn">
        <i class="fas fa-user-injured"></i> Gerenciar Pacientes
      </button>
      <button onclick="showAdminSection('profissionais')" class="admin-btn">
        <i class="fas fa-user-md"></i> Gerenciar Profissionais
      </button>
      <button onclick="showAdminSection('relatorios')" class="admin-btn">
        <i class="fas fa-file-alt"></i> Gerar Relatórios
      </button>
    </div>
    <div id="adminContent"></div>
    <button onclick="loadContent('inicio')" class="btn-voltar">Voltar</button>
  `;
}

function showAdminSection(section) {
  const adminContent = document.getElementById('adminContent');

  switch (section) {
    case 'pacientes':
      adminContent.innerHTML = getAdminPacientes();
      break;
    case 'profissionais':
      adminContent.innerHTML = getAdminProfissionais();
      break;
    case 'relatorios':
      adminContent.innerHTML = getAdminRelatorios();
      break;
  }

  if (section === 'pacientes') initPacientesTable();
  if (section === 'profissionais') initProfissionaisTable();
}

function getAdminPacientes() {
  const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];

  return `
    <h3>Pacientes Cadastrados</h3>
    ${pacientes.length === 0 ?
      '<p>Nenhum paciente cadastrado ainda.</p>' :
      `
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Data Nasc.</th>
              <th>Plano de Saúde</th>
              <th>Hospital</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody id="pacientesTableBody">
            ${pacientes.map((paciente, index) => `
              <tr>
                <td>${paciente.nome}</td>
                <td>${paciente.cpf}</td>
                <td>${formatarData(paciente.dataNasc)}</td>
                <td>${paciente.plano}</td>
                <td>${paciente.hospital}</td>
                <td>
                  <button onclick="editarPaciente(${index})" class="table-btn edit">
                    Editar
                  </button>
                  <button onclick="excluirPaciente(${index})" class="table-btn delete">
                    Apagar
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      `
    }
    <button onclick="exportarPacientesCSV()" class="export-btn">
       Exportar para CSV
    </button>
  `;
}

function getAdminProfissionais() {
  const profissionais = JSON.parse(localStorage.getItem('profissionais')) || [];

  return `
    <h3>Profissionais de Saúde</h3>
    ${profissionais.length === 0 ?
      '<p>Nenhum profissional cadastrado ainda.</p>' :
      `
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>CRM</th>
              <th>Especialidade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody id="profissionaisTableBody">
            ${profissionais.map((profissional, index) => `
              <tr>
                <td>${profissional.nome}</td>
                <td>${profissional.uf}-${profissional.crm}</td>
                <td>${profissional.especialidade}</td>
                <td>
                  <button onclick="editarProfissional(${index})" class="table-btn edit">
                    Editar
                  </button>
                  <button onclick="excluirProfissional(${index})" class="table-btn delete">
                   Apagar
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      `
    }
    <button onclick="exportarProfissionaisCSV()" class="export-btn">
      Exportar para CSV
    </button>
  `;
}

function getAdminRelatorios() {
  return `
    <h3><i class="fas fa-file-alt"></i> Relatórios Administrativos</h3>
    <form id="formRelatorio" class="form-card">
      <label for="tipoRelatorio">Tipo de Relatório:</label>
      <select id="tipoRelatorio" name="tipoRelatorio" required>
        <option value="">Selecione</option>
        <option value="financeiro">Financeiro</option>
        <option value="suprimentos">Suprimentos</option>
        <option value="atendimentos">Atendimentos</option>
        <option value="internacoes">Internações</option>
      </select>
      
      <label for="periodo">Período:</label>
      <select id="periodo" name="periodo" required>
        <option value="">Selecione</option>
        <option value="7dias">Últimos 7 dias</option>
        <option value="30dias">Últimos 30 dias</option>
        <option value="mes_atual">Este mês</option>
        <option value="mes_anterior">Mês anterior</option>
        <option value="ano_atual">Este ano</option>
      </select>
      
      <label for="hospital">Hospital (opcional):</label>
      <select id="hospital" name="hospital">
        <option value="">Todos</option>
        ${HOSPITAIS.map(hosp => `<option>${hosp}</option>`).join('')}
      </select>
      
      <button type="submit">
        <i class="fas fa-chart-bar"></i> Gerar Relatório
      </button>
    </form>
  
  `;
}

function salvarPaciente(paciente) {
  let pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
  pacientes.push(paciente);
  localStorage.setItem('pacientes', JSON.stringify(pacientes));
}

function editarPaciente(index) {
  const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
  const paciente = pacientes[index];

  const novoNome = prompt("Editar nome:", paciente.nome);
  if (novoNome && novoNome !== paciente.nome) {
    pacientes[index].nome = novoNome;
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
    showAdminSection('pacientes');
  }
}

function excluirPaciente(index) {
  if (confirm('Tem certeza que deseja excluir este paciente?')) {
    let pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
    pacientes.splice(index, 1);
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
    showAdminSection('pacientes');
  }
}

function exportarPacientesCSV() {
  const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
  if (pacientes.length === 0) {
    alert('Não há pacientes para exportar.');
    return;
  }

  let csv = 'Nome,CPF,Data Nascimento,Plano de Saúde,Especialidade,Hospital\n';
  pacientes.forEach(p => {
    csv += `"${p.nome}","${p.cpf}","${p.dataNasc}","${p.plano}","${p.especialidade}","${p.hospital}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'pacientes.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function salvarProfissional(profissional) {
  let profissionais = JSON.parse(localStorage.getItem('profissionais')) || [];
  profissionais.push(profissional);
  localStorage.setItem('profissionais', JSON.stringify(profissionais));
}

function editarProfissional(index) {
  const profissionais = JSON.parse(localStorage.getItem('profissionais')) || [];
  const profissional = profissionais[index];

  const novoNome = prompt("Editar nome:", profissional.nome);
  if (novoNome && novoNome !== profissional.nome) {
    profissionais[index].nome = novoNome;
    localStorage.setItem('profissionais', JSON.stringify(profissionais));
    showAdminSection('profissionais');
  }
}

function excluirProfissional(index) {
  if (confirm('Tem certeza que deseja excluir este profissional?')) {
    let profissionais = JSON.parse(localStorage.getItem('profissionais')) || [];
    profissionais.splice(index, 1);
    localStorage.setItem('profissionais', JSON.stringify(profissionais));
    showAdminSection('profissionais');
  }
}

function exportarProfissionaisCSV() {
  const profissionais = JSON.parse(localStorage.getItem('profissionais')) || [];
  if (profissionais.length === 0) {
    alert('Não há profissionais para exportar.');
    return;
  }

  let csv = 'Nome,CRM,Especialidade\n';
  profissionais.forEach(p => {
    csv += `"${p.nome}","${p.uf}-${p.crm}","${p.especialidade}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'profissionais.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function formatarData(dataString) {
  if (!dataString) return '';
  const data = new Date(dataString);
  return data.toLocaleDateString('pt-BR');
}

function validarFormPacientes(e) {
  const form = e.target;
  const cpf = form.querySelector('#cpf').value;

  if (!isCpfValido(cpf)) {
    alert('CPF inválido. Verifique e tente novamente.');
    form.querySelector('#cpf').focus();
    return;
  }

  const paciente = {
    nome: form.querySelector('#nome').value,
    dataNasc: form.querySelector('#dataNasc').value,
    cpf: cpf,
    plano: form.querySelector('#plano').value,
    especialidade: form.querySelector('#especialidade').value,
    hospital: form.querySelector('#hospital').value
  };

  salvarPaciente(paciente);
  mostrarSucesso('Paciente cadastrado com sucesso!');
}

function validarFormProfissionais(e) {
  const form = e.target;
  const uf = form.querySelector('#uf').value;
  const crm = form.querySelector('#crm').value.trim();

  if (!uf) {
    alert('Selecione o UF do CRM.');
    return;
  }

  if (!/^\d{4,}$/.test(crm)) {
    alert('CRM inválido. Digite apenas números (mínimo 4 dígitos).');
    form.querySelector('#crm').focus();
    return;
  }

  const profissional = {
    nome: form.querySelector('#nome').value,
    uf: uf,
    crm: crm,
    especialidade: form.querySelector('#especialidade').value
  };

  salvarProfissional(profissional);
  mostrarSucesso(`Profissional cadastrado com sucesso!\nCRM: ${uf}-${crm}`);
}

function validarFormAdmin(e) {
  e.preventDefault();
  const form = e.target;
  const tipo = form.querySelector('#tipoRelatorio').value;
  const periodo = form.querySelector('#periodo').value;

  if (!tipo || !periodo ) {
    alert('Selecione o tipo e período do relatório.');
    return;
  }
}