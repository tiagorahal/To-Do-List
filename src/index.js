import './style.css';

let task = {
  description: '',
  completed: false,
  index: undefined,
};

let list = [
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
 let sortedList = list.sort((a, b) => a.index - b.index);
  for(let i = 0 ; i <= list.length ; i++) {
    document.getElementById('list-items').insertAdjacentHTML('beforeend', `<p class="item-index">${sortedList[i].index}&nbsp;${sortedList[i].description}&nbsp;${sortedList[i].completed}</p>`);
  }
}

window.onload = displayTask();