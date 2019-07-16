document.addEventListener("DOMContentLoaded", function(e) {
  const newForm = document.querySelector('#create-task-form');
  newForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const newTaskText = document.querySelector('#new-task-description');
    console.log(e);
    makeTask(newTaskText.value);
    newTaskText.value = '';
  });

  const dateDueLabel = document.createElement('label')
  dateDueLabel.innerText = "Date Due:"

  const dateDueInput = document.createElement('input')
  dateDueInput.type = "text"

  newForm.insertBefore(dateDueInput, newForm.childNodes[0])
  newForm.insertBefore(dateDueLabel, newForm.childNodes[0])

});

function makeTask(newTaskText) {
  const ul = document.getElementById('tasks')
  const li = document.createElement('li')
  li.id = newTaskText;
  li.innerText = newTaskText;
  ul.appendChild(li);
  const button = document.createElement('button');
  li.appendChild(button);
  button.innerText = 'Philip was here'
  button.addEventListener("click", function(e) {
    ul.removeChild(li);
  })
};


//
//   function newItem() {
//     // create item space, a list item
//
//   }
//
//   var ul = document.createElement('ul')
//
// for (let i = 0; i < 3; i++) {
//   let li = document.createElement('li')
//   li.innerHTML = (i + 1).toString()
//   ul.appendChild(li)
// }
//
// element.appendChild(ul)
