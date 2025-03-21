// Declaração de variáveis
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

// array para armazenar tarefas
let tarefas = [];

// função para adicionar tarefas
function addTarefas() {
  if (inputElement.value === "") {
    alert("Digite alguma tarefa!");
  } else {
    let novaTarefa = inputElement.value;
    tarefas.push(novaTarefa);
    // limpeza do campo input
    inputElement.value = "";
  }
}
// adicionando evento no botão registrar
buttonElement.onclick = addTarefas;
