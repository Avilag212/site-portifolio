document.addEventListener('DOMContentLoaded', () => {
  // Atualiza o ano no rodapé automaticamente
  const yearSpan = document.getElementById('current-year');
  const now = new Date();
  yearSpan.textContent = now.getFullYear();
  
  // Opção: adicionar pequeno efeito de scroll suave para âncoras internas
  const links = document.querySelectorAll('a[href^="#"]');
  for (let link of links) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        targetElem.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
