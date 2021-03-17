//Variables
const formInput = document.querySelector(".form__input");
const formDropdown = document.querySelector(".form__dropdown");
const buttonAdd = document.querySelector(".button--add");
const tasks = document.querySelector(".tasks");

//Event listeners
buttonAdd.addEventListener("click", createTask);
tasks.addEventListener("click", deleteTask);
formDropdown.addEventListener("click", filterTask);

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
    //Crossout li text
    e.target.parentNode.style.textDecoration = "line-through";
    e.target.parentNode.classList.add("task--complete");
  } //If target is delete button
  else if (e.target.classList.contains("button--delete")) {
    //Remove the entire parent div
    e.target.parentNode.remove();
  }
}

function filterTask(e) {
  /* Store each task in a tasks array using the spread operator (otherwise 
    using just .children produces an HTML collection which cannot be itered over with forEach) */
  const tasksArray = [...tasks.children];
  tasksArray.forEach((task) => {
    switch (e.target.value) {
      //Show all tasks
      case "all":
        task.style.display = "flex";
        break;
      //Show only completed tasks
      case "completed":
        if (task.classList.contains("task--complete")) {
          task.style.display = "flex";
        } else {
          task.style.display = "none";
        }
        break;
      //Show only uncompleted tasks
      case "uncompleted":
        if (!task.classList.contains("task--complete")) {
          task.style.display = "flex";
        } else {
          task.style.display = "none";
        }
        break;
    }
  });
}
