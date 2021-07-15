export default function callDrag() {
  const draggables = document.querySelectorAll('.item-div');
  const container = document.getElementById('list-items');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    });
  });
}