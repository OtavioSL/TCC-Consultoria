document.addEventListener('DOMContentLoaded', function() {

    // 1. Menu Mobile Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const menuOverlay = document.querySelector('.menu-overlay');
    const navLinks = document.querySelectorAll('.main-nav a');
    
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
        
        // Controlar autoplay do carrossel
        if (window.carouselControls) {
            if (mainNav.classList.contains('active')) {
                window.carouselControls.stop();
            } else {
                window.carouselControls.start();
            }
        }
    }
    
    function closeMenu() {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reiniciar autoplay do carrossel
        if (window.carouselControls) {
            window.carouselControls.start();
        }
    }
    
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    // Fechar menu ao clicar no overlay
    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }
    
    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });

    // 2. Menu Fixo / Sticky Header
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled'); // Adiciona uma classe para estilos diferentes
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Animação de Scroll Suave (Smooth Scroll)
    document.querySelectorAll('a[href^="#home"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Tratamento para #home e outros IDs
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            } else if (targetId === '#') {
                // Se o link for apenas '#', volta para o topo
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
});