function dragstart() {
  console.log('DRAG START!');
}

function drag() {
  console.log('DRAGGING!');
}

function dragend() {
  console.log('DRAG END!');
}

export default function callDrag() {
  const draggable = document.querySelectorAll('.item-div');

  draggable.forEach((item) => {
    item.addEventListener('dragstart', dragstart);
    item.addEventListener('drag', drag);
    item.addEventListener('dragend', dragend);
  });
}
