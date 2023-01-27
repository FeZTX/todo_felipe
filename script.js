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
  criaTarefa();
  descricao.value = "";
}

function criaTarefa() {
  // criou o obj tarefa
  let tarefa = {
    id: "",
    descricao: descricao.value,
  };

  tar.push(tarefa);
  console.log(tar);

  criaTagLi(tarefa);
  id++;
}

function criaTagLi(tarefa) {
  let liTarefa = document.createElement("ul");
  liTarefa.innerHTML = `${tarefa.descricao}`;
  liTarefa.classList.add("containerTarefa");
  containerTarefa.appendChild(liTarefa);
}
