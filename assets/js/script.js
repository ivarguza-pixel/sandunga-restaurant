if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sandunga-restaurant/sw.js', { scope: '/sandunga-restaurant/' })
      .then((reg) => console.log('Service Worker registrado con éxito para Sandunga:', reg.scope))
      .catch((err) => console.error('Fallo en el registro del Service Worker:', err));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('menuPrincipal');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
});
