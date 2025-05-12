// Animação de rolagem
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (window.scrollY + window.innerHeight >= section.offsetTop) {
      section.classList.add('visible');
    }
  });
});

// Limpar formulário antes de enviar (com redirecionamento)
document.getElementById('contact-form').addEventListener('submit', () => {
  setTimeout(() => {
    document.getElementById('contact-form').reset();
  }, 100); // Pequeno atraso para garantir envio antes de limpar
});
