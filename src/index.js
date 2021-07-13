import _ from 'lodash';
import './style.css';

class Tasks {
  constructor(description, completed, index) {
    this.description = String(description);
    this.completed = Boolean(completed);
    this.index = Number(index)
    this.task = {task:this.description , complete:this.completed , number:this.index};
    this.list = [];
  }

  setList() {

  }
}

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());