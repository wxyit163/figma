document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const indicators = document.querySelectorAll('.carousel-indicator');
    let currentIndex = 0;
    const slideCount = 3;
    const slideWidth = 100; // 100%

    function updateCarousel() {
        carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        
        // 更新指示器状态
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
                indicator.classList.remove('bg-white/50');
                indicator.classList.add('bg-white');
            } else {
                indicator.classList.remove('active');
                indicator.classList.add('bg-white/50');
                indicator.classList.remove('bg-white');
            }
        });
    }

    // 自动轮播
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
    }, 3000);

    // 点击指示器切换
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
}); 