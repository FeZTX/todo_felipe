let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");
let res = document.getElementById("resultado");
const header = document.getElementById("header");
const containerTarefa = document.getElementById("containerTarefa");
const modal = document.getElementById("backgroundModal");
const descricao = document.getElementById("descricao");
const date = document.getElementById("date");
let tar = [];
console.log(tar);
let id = 1;

function mostrar() {
  var num1 = Number(input1.value);
  var num2 = Number(input2.value);

  if (num1 && num2 != "") {
    var soma = num1 + num2;
    res.innerText = "= " + soma;
  } else {
    alert("Digite ambos os campos para somar");
  }

  input1.value = "";
  input2.value = "";
}

// Muda cor do background

function changeTheme() {
  document.body.style.setProperty("--backgroundColor  ", "#fefefa");
  header.classList.toggle("mudaHeader");
}

// ToDoList

function mostraModal() {
  modal.classList.add("mostraModal");
}

function submit() {
  modal.classList.remove("mostraModal");
  if (descricao.value == "") {
    alert("Por favor insira uma descrição para a tarefa!");
  } else if (date.value == "") {
    alert("Por favor insira a data da tarefa!");
  } else {
    criaTarefa();
    descricao.value = "";
  }
}

function criaTarefa() {
  // criou o obj tarefa
  let tarefa = {
    id: "",
    descricao: descricao.value,
    date: date.value,
  };

  tar.push(tarefa);
  console.log(tar);

  criaTagLi(tarefa);
  id++;
}

function criaTagLi(tarefa) {
  let ulTarefa = document.createElement("ul");
  ulTarefa.classList.add("containerTarefa");
  containerTarefa.appendChild(ulTarefa);
  
  let liTarefa = document.createElement('li');
  liTarefa.classList.add("ultarefa");
  ulTarefa.appendChild(liTarefa)
  liTarefa.innerHTML = `<h1>${tarefa.descricao}</h1><p>${tarefa.date}</p>`;
}
