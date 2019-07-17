document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector('#create-task-form')
  document.addEventListener("submit", function(e) {
    e.preventDefault();
    const newTaskDescription = document.querySelector('#new-task-description');
    makeTask(newTaskDescription)
  })
  
  const userNameLabel = document.createElement('label');
  userNameLabel.innerText = "User:"
  const userNameField = document.createElement('input');
  userNameField.innerText = 'text';
  taskForm.insertBefore(userNameLabel, taskForm.childNodes[0]);
  taskForm.insertBefore(userNameField, taskForm.childNodes[1]);
});

function makeTask(newTaskDescription) {
  const newTaskItem = document.createElement('li');
  const listTasks = document.querySelector('#list');
  listTasks.appendChild(newTaskItem);
  newTaskItem.innerText = newTaskDescription.value;
  newTaskDescription.value = '';
}

