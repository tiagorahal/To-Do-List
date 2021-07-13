import './style.css';

const task = {
  description: '',
  completed: false,
  index: undefined,
};

function addTasks() {
  console.log('hello');
  console.log(task);
}

document.getElementById('input-button').addEventListener("click", addTasks);