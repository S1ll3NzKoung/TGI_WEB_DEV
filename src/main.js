const addTaskButton = document.getElementById('add-task-button');
const todotaskcontainer = document.getElementById('todo-task-container');

addTaskButton.addEventListener('click', () => {
  todotaskcontainer.dataset;
  console.log(todotaskcontainer.dataset.showform);
  todotaskcontainer.dataset.showform = 'true';
  console.log(todotaskcontainer.dataset.showform);
});