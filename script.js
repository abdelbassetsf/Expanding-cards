const panels = document.querySelectorAll('.panel');

function removeActiveClasses() {
  Array.from(panels).map(panel => {
    panel.classList.remove('active');
  });
}

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();

    panel.classList.add('active');
  });
});
