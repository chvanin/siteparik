document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.button');

  setInterval(() => {
    button.classList.toggle('shake');
  }, 3000);
});