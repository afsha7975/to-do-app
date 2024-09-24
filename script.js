
window.onload = function() {
  displayTasks();
};
function addTask() {
  const newTask = document.getElementById('newTask').value.trim();
  if (newTask) {
    let tasks = localStorage.getItem('tasks');
    tasks = tasks ? JSON.parse(tasks) : [];
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
    document.getElementById('newTask').value = ''; 
  } else {
    alert('Please enter a task!');
  }
}
function removeTask(index) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
}
function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  let tasks = localStorage.getItem('tasks');
  tasks = tasks ? JSON.parse(tasks) : [];
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = function() {
      removeTask(index);
    };
    li.appendChild(removeBtn);
    taskList.appendChild(li);
  });
}
