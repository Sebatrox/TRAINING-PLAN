function showSection(id) {
  // Ocultar todas las secciones
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  
  // Desactivar todos los botones de navegación
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  
  // Mostrar la sección seleccionada
  document.getElementById(id).classList.add('active');
  
  // Marcar el botón correspondiente como activo
  const btns = document.querySelectorAll('.nav-btn');
  const map = ['overview','lunes','martes','miercoles','jueves','viernes','sabado','domingo','progresion','nutricion','errores'];
  const index = map.indexOf(id);
  
  if (index !== -1) {
    btns[index].classList.add('active');
  }
  
  // Scroll suave al inicio de la página
  window.scrollTo({ top: 0, behavior: 'smooth' });
}