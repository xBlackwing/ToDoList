//Variables
const taskInput = document.querySelector(".task-input");
const taskSubmit = document.querySelector(".task-submit");
const taskList = document.querySelector(".task-list");
const taskFilter = document.querySelector(".task-filter");

//Event listeners
taskSubmit.addEventListener("click", createTask);
taskList.addEventListener("click", deleteTask);
taskFilter.addEventListener("click", filterTask);

//Functions
function createTask(e) {
  e.preventDefault();
  //If text input is empty
  if (!taskInput.value == "") {
    //Create div
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskList.appendChild(taskDiv);
    //Create li
    const taskLi = document.createElement("li");
    taskLi.classList.add("task-item");
    taskLi.innerHTML = taskInput.value;
    taskDiv.appendChild(taskLi);
    //Create complete button
    const taskComplete = document.createElement("button");
    taskComplete.classList.add("task-complete", "btn");
    taskComplete.innerHTML = `<i class="fas fa-check"></i>`;
    taskDiv.appendChild(taskComplete);
    //Create delete button
    const taskDelete = document.createElement("button");
    taskDelete.classList.add("task-delete", "btn");
    taskDelete.innerHTML = `<i class="fas fa-trash"></i>`;
    taskDiv.appendChild(taskDelete);
    //Clear text from input
    taskInput.value = "";
  }
}

function deleteTask(e) {
  //If target is complete button
  if (e.target.classList.contains("task-complete")) {
    //Crossout list item text
    e.target.parentNode.style.textDecoration = "line-through";
    e.target.parentNode.classList.add("complete");
  } //If target is delete button
  else if (e.target.classList.contains("task-delete")) {
    //Remove the entire parent div
    e.target.parentNode.remove();
  }
}

function filterTask(e) {
  //Store each task in the task list in a tasks array
  const tasks = taskList.childNodes;
  tasks.forEach((task) => {
    switch (e.target.value) {
      //Show all tasks
      case "all":
        task.style.display = "flex";
        break;
      //Show only completed tasks
      case "completed":
        if (task.classList.contains("complete")) {
          task.style.display = "flex";
        } else {
          task.style.display = "none";
        }
        break;
      //Show only uncompleted tasks
      case "uncompleted":
        if (task.classList.contains("complete")) {
          task.style.display = "none";
        } else {
          task.style.display = "flex";
        }
        break;
    }
  });
}
