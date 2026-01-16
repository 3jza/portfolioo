// ===================================
// NAVIGATION ACTIVE LINK
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  // Mettre en surbrillance le lien actif dans la navigation
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ===================================
  // MOBILE MENU TOGGLE
  // ===================================
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navLinksContainer.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navLinksContainer.classList.remove('active');
      });
    });
  }

  // ===================================
  // SCROLL ANIMATIONS
  // ===================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observer les éléments à animer
  const animatedElements = document.querySelectorAll(
    '.project-card, .skill-category, .about-content, .fade-in'
  );
  
  animatedElements.forEach(el => {
    observer.observe(el);
  });

  // ===================================
  // FORMULAIRE DE CONTACT
  // ===================================
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Récupérer les valeurs du formulaire
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Validation simple
      if (!name || !email || !message) {
        alert('Veuillez remplir tous les champs du formulaire.');
        return;
      }
      
      // Validation email simple
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
      }
      
      // Simuler l'envoi du formulaire (à remplacer par un vrai traitement)
      alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
      contactForm.reset();
    });
  }

  // ===================================
  // SMOOTH SCROLL POUR LES ANCRES
  // ===================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // ===================================
  // ANIMATION HERO AU CHARGEMENT
  // ===================================
  const heroTitle = document.querySelector('.hero h1');
  const heroSubtitle = document.querySelector('.hero .subtitle');
  const heroIntro = document.querySelector('.hero-intro');
  
  if (heroTitle) {
    // Les animations CSS s'occupent de l'animation d'entrée
    // On s'assure juste que les éléments sont présents
    setTimeout(() => {
      if (heroTitle) heroTitle.style.opacity = '1';
      if (heroSubtitle) heroSubtitle.style.opacity = '1';
      if (heroIntro) heroIntro.style.opacity = '1';
    }, 100);
  }
});

// ===================================
// FERMER LE MENU AU SCROLL (mobile)
// ===================================
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (window.innerWidth <= 768) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (Math.abs(lastScrollTop - scrollTop) > 50) {
      if (menuToggle && navLinks) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    }
    lastScrollTop = scrollTop;
  }
});
