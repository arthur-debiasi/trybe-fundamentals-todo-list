const main = document.createElement('main');
main.classList.add('container-sm');
document.body.classList.add('bg-dark');
document.body.classList.add('bg-opacity-25');
document.body.appendChild(main);
const header = document.createElement('header');
main.appendChild(header);
const headerTitle = document.createElement('h1');
header.appendChild(headerTitle);
headerTitle.innerText = 'Minha Lista de Tarefas';
headerTitle.classList.add('display-1');

const funcionamento = document.createElement('h2');
funcionamento.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
funcionamento.id = 'funcionamento';
header.appendChild(funcionamento);

const inputTarefa = document.createElement('input');
main.appendChild(inputTarefa);
inputTarefa.type = 'text';
inputTarefa.id = 'texto-tarefa';
inputTarefa.classList.add('form-control');

const buttonCriarTarefa = document.createElement('button');
buttonCriarTarefa.id = 'criar-tarefa';
buttonCriarTarefa.innerText = 'Criar Tarefa';
buttonCriarTarefa.type = 'button';
buttonCriarTarefa.classList.add('btn');
buttonCriarTarefa.classList.add('btn-outline-primary');
main.appendChild(buttonCriarTarefa);

const buttonLimparTarefas = document.createElement('button');
buttonLimparTarefas.id = 'apaga-tudo';
buttonLimparTarefas.innerText = 'Limpar Tarefas';
buttonLimparTarefas.classList.add('btn');
buttonLimparTarefas.classList.add('btn-outline-secondary');
main.appendChild(buttonLimparTarefas);

const buttonTarefasConcluidas = document.createElement('button');
buttonTarefasConcluidas.id = 'remover-finalizados';
buttonTarefasConcluidas.innerText = 'Remover Tarefas Concluídas';
buttonTarefasConcluidas.classList.add('btn');
buttonTarefasConcluidas.classList.add('btn-outline-danger');
main.appendChild(buttonTarefasConcluidas);

const oList = document.createElement('ol');
oList.id = 'lista-tarefas';
oList.className = 'list-group list-group-numbered';
main.appendChild(oList);

function criarTarefa(event) {
  if (event.target.id === 'criar-tarefa') {
    const tarefaTexto = inputTarefa.value;
    console.log(tarefaTexto);
    inputTarefa.value = '';
    const novaTarefa = document.createElement('li');
    novaTarefa.innerText = tarefaTexto;
    novaTarefa.className = 'tarefa';
    novaTarefa.classList.add('list-group-item');
    oList.appendChild(novaTarefa);
  }
}
document.addEventListener('click', criarTarefa);

function tarefasClicadas(event) {
  if (event.target.classList.contains('tarefa')) {
    const tarefas = document.querySelectorAll('.tarefa');
    for (let i = 0; i < tarefas.length; i += 1) {
      tarefas[i].classList.remove('tarefa-clicada');
    }
    event.target.classList.add('tarefa-clicada');
  }
}

document.addEventListener('click', tarefasClicadas);

function tarefasConcluidas(event) {
  if (event.target.classList.contains('tarefa')) {
    const concluida = 'completed';
    if (event.target.classList.contains(concluida)) {
      event.target.classList.remove(concluida);
    } else {
      event.target.classList.add(concluida);
    }
  }
}

document.addEventListener('dblclick', tarefasConcluidas);

function limparTarefas() {
  const tarefas = document.querySelectorAll('.tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].remove();
  }
}

buttonLimparTarefas.addEventListener('click', limparTarefas);

function removerConcluidas() {
  const completed = document.querySelectorAll('.completed');
  for (let i = 0; i < completed.length; i += 1) {
    completed[i].remove();
  }
}

buttonTarefasConcluidas.addEventListener('click', removerConcluidas);
