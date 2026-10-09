const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.links');
toggle.addEventListener('click', () => {
  const isOpen = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.textContent = isOpen ? '✕' : '☰';
});
document.querySelectorAll('.links a').forEach(link => link.addEventListener('click', () => {
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();
