// Declaração de variáveis
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

// array para armazenar tarefas
let tarefas = [];
// Função para renderizar as tarefas em tela
function renderTarefas() {
  listElement.innerHTML = "";

  tarefas.map((todo) => {
    let liElement = document.createElement("li");
    let tarefaText = document.createTextNode(todo);

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");
    let linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);
    
  

    linkElement.setAttribute("onclick",  "deletarTarefas()")

    
    liElement.appendChild(tarefaText);
    liElement.appendChild(linkElement);
    listElement.appendChild(liElement);
  });
}
// função para adicionar tarefas
function addTarefas() {
  if (inputElement.value === "") {
    alert("Digite alguma tarefa!");
  } else {
    let novaTarefa = inputElement.value;
    tarefas.push(novaTarefa);
    // limpa o campo input
    inputElement.value = "";

    // chamada para função para renderizar as tarefas em tela
    renderTarefas();
  }
}
// adicionando evento no botão registrar
buttonElement.onclick = addTarefas;

function deletarTarefas(){
  alert("Deletando tarefa!!!")
}


