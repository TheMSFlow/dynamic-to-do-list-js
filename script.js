document.addEventListener('DOMContentLoaded', addTask);
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText === '') {
      alert("Please enter a task");
      return;
    } else if(taskText !== '') {
      const list = document.createElement('li');
      list.textContent = taskText;
      const newBtn = document.createElement('button');
      newBtn.textContent = 'Remove';
      newBtn.classList.add('remove-btn');

      newBtn.addEventListener('click', () => {
        list.remove();
      });
      list.appendChild(newBtn);
      taskList.appendChild(list);

      taskText === '';
    }
  }

  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', event => {
    if(event.key === 'Enter'){
      event.preventDefault();
      addTask();
    } 
  });


