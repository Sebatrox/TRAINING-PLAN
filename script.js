function showSection(id) {
  const sections = document.querySelectorAll('.section');
  const buttons = document.querySelectorAll('.nav-btn');

  sections.forEach(sec => sec.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(id).classList.add('active');

  const index = ['overview','lunes','martes'].indexOf(id);
  if (index !== -1) {
    buttons[index].classList.add('active');
  }
}