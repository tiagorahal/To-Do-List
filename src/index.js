import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';

const list = [
  {
    description: 'testingOne',
    completed: true,
    index: 0,
  },
  {
    description: 'testingTwo',
    completed: true,
    index: 1,
  },
  {
    description: 'testingTres',
    completed: false,
    index: 2,
  }
];

function displayTask() {
 const sortedList = list.sort((a, b) => a.index - b.index);
  for (let i = 0; i <= list.length; i += 1) {
    document.getElementById('list-items').insertAdjacentHTML('beforeend', `<div class="item-div"><input type="checkbox" id="item-${i}"><p class="task-description">${sortedList[i].description}</p><a href="#"><i class="fas fa-ellipsis-v"></i></a></div>`);
  }
}

window.onload = displayTask();