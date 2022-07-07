const main = document.createElement('main');
document.body.appendChild(main);
const header = document.createElement('header');
main.appendChild(header);
const headerTitle = document.createElement('h1');
header.appendChild(headerTitle);
headerTitle.innerText = 'Minha Lista de Tarefas';

const funcionamento = document.createElement('h2');
funcionamento.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
funcionamento.id = 'funcionamento';
header.appendChild(funcionamento);

const inputTarefa = document.createElement('input');
main.appendChild(inputTarefa);
inputTarefa.type = 'text';
inputTarefa.id = 'texto-tarefa';

const oList = document.createElement('ol');
oList.id = 'lista-tarefas';
main.appendChild(oList);
