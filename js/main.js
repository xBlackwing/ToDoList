//Variables
const dateDay = document.querySelector(".date__day");
const dateMonth = document.querySelector(".date__month");
const formInput = document.querySelector(".form__input");
const buttonAdd = document.querySelector(".button--add");
const tasks = document.querySelector(".tasks");

const days = [
  "Domenica",
  "Lunedi",
  "Martedi",
  "Mercoledi",
  "Giovedi",
  "Venerdi",
  "Sabato",
];

const months = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

let currentDate = new Date();
dateDay.textContent = `${days[currentDate.getDay()]} ${currentDate.getDate()}`;
dateMonth.textContent = `${months[currentDate.getMonth()]}`;

//Event listeners
buttonAdd.addEventListener("click", createTask);
tasks.addEventListener("click", deleteTask);

//Functions
function createTask(e) {
  e.preventDefault();
  //If text input is empty
  if (!formInput.value == "") {
    //Create task div
    const task = document.createElement("div");
    task.classList.add("task");
    tasks.appendChild(task);
    //Create li
    const taskItem = document.createElement("li");
    taskItem.classList.add("task__item");
    taskItem.innerHTML = formInput.value;
    task.appendChild(taskItem);
    //Create complete button
    const buttonComplete = document.createElement("button");
    buttonComplete.classList.add("button", "button--complete");
    buttonComplete.innerHTML = `<i class="button__icon fas fa-check"></i>`;
    task.appendChild(buttonComplete);
    //Create delete button
    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("button", "button--delete");
    buttonDelete.innerHTML = `<i class="button__icon fas fa-trash"></i>`;
    task.appendChild(buttonDelete);
    //Clear text from input
    formInput.value = "";
  }
}

function deleteTask(e) {
  //If target is complete button
  if (e.target.classList.contains("button--complete")) {
    //Toggle completed
    e.target.parentNode.classList.toggle("task--complete");
  } //If target is delete button
  else if (e.target.classList.contains("button--delete")) {
    //Remove the entire parent div
    e.target.parentNode.remove();
  }
}
