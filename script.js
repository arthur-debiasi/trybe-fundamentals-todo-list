const main = document.createElement('main');
document.body.appendChild(main);
const header = document.createElement('header');
main.appendChild(header);
const headerTitle = document.createElement('h1');
header.appendChild(headerTitle);
headerTitle.innerText = 'Minha Lista de Tarefas';

const funcionamento = document.createElement('h2');
funcionamento.innerText =
  'Clique duas vezes em um item para marcá-lo como completo';
funcionamento.id = 'funcionamento';
header.appendChild(funcionamento);

const inputTarefa = document.createElement('input');
main.appendChild(inputTarefa);
inputTarefa.type = 'text';
inputTarefa.id = 'texto-tarefa';

const buttonCriarTarefa = document.createElement('button');
buttonCriarTarefa.id = 'criar-tarefa';
buttonCriarTarefa.innerText = 'Criar Tarefa';
main.appendChild(buttonCriarTarefa);

const oList = document.createElement('ol');
oList.id = 'lista-tarefas';
main.appendChild(oList);

function criarTarefa(event) {
  if (event.target.id === 'criar-tarefa') {
    const tarefaTexto = inputTarefa.value;
    console.log(tarefaTexto);
    inputTarefa.value = '';
    const novaTarefa = document.createElement('li');
    novaTarefa.innerText = tarefaTexto;
    novaTarefa.className = 'tarefa';
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
