// Configuração inicial
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar AOS com configurações otimizadas
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100,
    delay: 0
  });

  // Smooth scrolling para navegação
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Ajuste para navbar fixa
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Formulário de contato melhorado
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Mostrar loading
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;
      
      // Simular envio (substitua pela sua lógica real)
      setTimeout(() => {
        formMessage.textContent = 'Mensagem enviada com sucesso!';
        formMessage.style.color = '#39ff14';
        contactForm.reset();
        
        // Reset do botão
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Limpar mensagem após 3 segundos
        setTimeout(() => {
          formMessage.textContent = '';
        }, 3000);
      }, 1000);
    });
  }

  // Navegação por teclado melhorada
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      // Fechar qualquer modal ou menu aberto
      const activeElements = document.querySelectorAll('.active, .open');
      activeElements.forEach(el => el.classList.remove('active', 'open'));
    }
  });

  // Lazy loading para imagens
  const images = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.src; // Força o carregamento
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // Melhorar performance de scroll
  let ticking = false;
  function updateOnScroll() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        section.classList.add('visible');
      }
    });
    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(updateOnScroll);
      ticking = true;
    }
  });

  // Touch gestures para mobile
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  });

  document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      // Implementar navegação por swipe se necessário
      console.log('Swipe detected:', diff > 0 ? 'left' : 'right');
    }
  }

  // Melhorar acessibilidade
  const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
  focusableElements.forEach(element => {
    element.addEventListener('focus', function() {
      this.style.outline = '2px solid #39ff14';
    });
    
    element.addEventListener('blur', function() {
      this.style.outline = '';
    });
  });

  // Prevenir zoom em inputs no iOS
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
        this.style.fontSize = '16px';
      }
    });
  });

  // Service Worker para PWA (opcional)
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js')
        .then(function(registration) {
          console.log('SW registered: ', registration);
        })
        .catch(function(registrationError) {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }

  // Analytics básico (opcional)
  function trackEvent(eventName, data = {}) {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, data);
    }
    console.log('Event tracked:', eventName, data);
  }

  // Track clicks em links importantes
  const importantLinks = document.querySelectorAll('a[href^="http"], .btn');
  importantLinks.forEach(link => {
    link.addEventListener('click', function() {
      trackEvent('link_click', {
        link_text: this.textContent,
        link_url: this.href
      });
    });
  });

  console.log('Portfolio loaded successfully! 🚀');
});

// Função para detectar dispositivo móvel
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Função para detectar conexão lenta
function isSlowConnection() {
  return navigator.connection && 
         (navigator.connection.effectiveType === 'slow-2g' || 
          navigator.connection.effectiveType === '2g');
}

// Otimizações para conexões lentas
if (isSlowConnection()) {
  // Reduzir animações
  document.body.style.setProperty('--animation-duration', '0.1s');
  
  // Carregar imagens com menor qualidade
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (img.src.includes('unsplash')) {
      img.src = img.src + '&q=50&w=800';
    }
  });
}
