function dragstart() {
  console.log('DRAG START!');
}

function drag() {
  console.log('DRAGGING!');
}

function dragend() {
  console.log('DRAG END!');
}

/* Where gonna drop the draggable */

function dragenter() {
  console.log('ENTER THE ZONE!');
}

function dragover() {
  console.log('IN THE ZONE!');
}

function dragleave() {
  console.log('LEAVE THE ZONE!');
}

function drop() {
  console.log('DROP IN THE ZONE!');
}

export default function callDrags() {
  const draggable = document.querySelectorAll('.inside-box');
  const dropzones = document.querySelectorAll('.item-div');

  draggable.forEach((item) => {
    item.addEventListener('dragstart', dragstart);
    item.addEventListener('drag', drag);
    item.addEventListener('dragend', dragend);
  });

  dropzones.forEach((dropzone) => {
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);
  });
}
