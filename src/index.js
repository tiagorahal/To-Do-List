import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';

const list = [
  {
    description: 'Make eggplant lasagna for lunch',
    completed: true,
    index: 0,
  },
  {
    description: 'Finishing the to do list project',
    completed: true,
    index: 1,
  },
  {
    description: 'Take a shower',
    completed: false,
    index: 2,
  },
];

function displayTask() {
  const sortedList = list.sort((a, b) => a.index - b.index);
  for (let i = 0; i <= list.length; i += 1) {
    document.getElementById('list-items').insertAdjacentHTML('beforeend', `<div class="item-div"><div class="start-task"><input type="checkbox" id="item-${i}"><p class="task-description">${sortedList[i].description}</p></div><a href="#"><i class="fas fa-ellipsis-v"></i></a></div>`);
  }
}

window.onload = displayTask();