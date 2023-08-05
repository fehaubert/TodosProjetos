const showInfoButtons = document.querySelectorAll('.show-info');

showInfoButtons.forEach(button => { 
  const info = button.nextElementSibling;
  info.style.display = 'none';

  button.addEventListener('click', () => {
    if (info.style.display === 'none') {
      info.style.display = 'block';
      button.textContent = 'Esconder informações';
    } else {
      info.style.display = 'none';
      button.textContent = 'Mostrar informações';
    }
  });
});
