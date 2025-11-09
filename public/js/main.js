document.addEventListener('DOMContentLoaded', function() {
    // 1. Menu Fixo / Sticky Header (Opcional: Muda cor/tamanho ao rolar)
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled'); // Adiciona uma classe para estilos diferentes
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Exemplo de CSS para a classe .scrolled (adicione em style.css):
    /*
    .main-header.scrolled {
        background: rgba(255, 255, 255, 0.95);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        padding: 10px 0;
    }
    */

    // 2. Animação de Scroll Suave (Smooth Scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Verifica se o href é apenas '#' para não causar erro
            if (this.getAttribute('href') === '#') return;

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 3. (Futuro) Inicialização de Slider/Carrossel para Cases
    // Se você usar uma biblioteca como Swiper.js ou Slick.js
    // Exemplo:
    // if (document.querySelector('.case-gallery')) {
    //     new Swiper('.case-gallery', {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //         // Outras opções...
    //     });
    // }
});