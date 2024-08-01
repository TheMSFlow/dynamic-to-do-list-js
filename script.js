document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  let tasks = [];
  loadTasks();

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if(storedTasks == null){
      return;
    } 

      storedTasks.map(taskText => {
        const list = document.createElement('li');
        list.textContent = taskText;
        const newBtn = document.createElement('button');
        newBtn.textContent = 'Remove';
        newBtn.classList.add('remove-btn');
        list.appendChild(newBtn);
        taskList.appendChild(list);
  
       // Removing a task
       newBtn.addEventListener("click", () => {
        list.remove(); // Remove it from DOM
        
        // Remove item from array
        index = storedTasks.indexOf(taskText);
        storedTasks.splice(index, 1);
    
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
    
        console.log(storedTasks);
      });
 });
}

  function addTask(taskText) {
   taskText = taskInput.value.trim();
    if (taskText === '') {
      alert("Please enter a task");
      return;
    } else {
      const list = document.createElement('li');
      list.textContent = taskText;
      const newBtn = document.createElement('button');
      newBtn.textContent = 'Remove';
      newBtn.classList.add('remove-btn');
      list.appendChild(newBtn);
      taskList.appendChild(list);

      // push new task to task array
      tasks.push(taskText);

      //save in local storage
      storedTasks = localStorage.setItem('tasks', JSON.stringify(tasks));

      // Resets the input field
      taskInput.value = '';

      // Removing a task
       newBtn.addEventListener("click", () => {
        list.remove(); // Remove it from DOM
        
        // Remove it from tasks array
        index = tasks.indexOf(taskText);
        tasks.splice(index, 1);
    
        localStorage.setItem("tasks", JSON.stringify(tasks));
    
      });
    }
  };

  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', event => {
    if(event.key === 'Enter'){
      event.preventDefault();
      addTask();
    } 
  });
});

 

  

 


