// Inicialização e controle do Swiper Carousel
let swiper;

document.addEventListener('DOMContentLoaded', function() {
    const swiperContainer = document.querySelector('.mySwiper');

    if (swiperContainer) { // Verifica se o carrossel existe na página
        swiper = new Swiper('.mySwiper', {
            loop: true, // Faz o carrossel girar infinitamente
            // autoplay: {
            //     delay: 5000, // 5 segundos de espera
            //     disableOnInteraction: false, // Continua o autoplay mesmo após interação manual
            // },
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

// Função para parar o autoplay do carrossel
function stopCarouselAutoplay() {
    if (swiper && swiper.autoplay) {
        swiper.autoplay.stop();
    }
}

// Função para iniciar o autoplay do carrossel
function startCarouselAutoplay() {
    if (swiper && swiper.autoplay) {
        swiper.autoplay.start();
    }
}

// Exportar funções para uso em outros arquivos
window.carouselControls = {
    stop: stopCarouselAutoplay,
    start: startCarouselAutoplay
};
