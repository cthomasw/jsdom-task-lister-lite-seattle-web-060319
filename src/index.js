const newItemForm = document.querySelector('#create-task-form');
let dueDateLabel = document.createElement('label');
dueDateLabel.innerText = "Due date:";
let dueDateField = document.createElement('input');
dueDateField.setAttribute('id', 'new-task-due');
dueDateField.setAttribute('placeholder', 'due date');
dueDateField.setAttribute('type', 'text');
newItemForm.insertBefore(dueDateField, newItemForm.childNodes[0]);
newItemForm.insertBefore(dueDateLabel, newItemForm.childNodes[0]);



newItemForm.addEventListener('submit', function(e){
  e.preventDefault();
  let dateDue = (e.target[0].value);
  let item = (e.target[1].value);
  makeNewItem(item, dateDue);
  e.target[0].value = '';
  e.target[1].value = '';
});

function makeNewItem(item, dateDue) {
  let ul = document.querySelector('#tasks');
  let li = document.createElement('li');

  li.innerText = `${item} Due: ${dateDue}`;
  ul.appendChild(li);
  const itemComplete = document.createElement('button');
  itemComplete.innerText = 'Done!';
  li.appendChild(itemComplete);
  itemComplete.addEventListener('click', function(e){
    ul.removeChild(li);
  })
};