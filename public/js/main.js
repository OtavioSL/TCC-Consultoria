document.addEventListener('DOMContentLoaded', function() {

    // 1. Menu Fixo / Sticky Header
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled'); // Adiciona uma classe para estilos diferentes
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Animação de Scroll Suave (Smooth Scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

    // 3. Inicialização do Swiper Carousel
    const swiperContainer = document.querySelector('.mySwiper');

    if (swiperContainer) { // Verifica se o carrossel existe na página
        new Swiper('.mySwiper', {
            loop: true, // Faz o carrossel girar infinitamente
            autoplay: {
                delay: 5000, // 5 segundos de espera
                disableOnInteraction: false, // Continua o autoplay mesmo após interação manual
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // Usando 'slide' conforme sua configuração, mas removendo a configuração 'fade' conflitante
            effect: 'slide', 
            speed: 800, // Velocidade da transição em ms
        });
    }
});