document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.sec1, .sec2, .sec3, .sec4, .sec5');
    const dots = document.querySelectorAll('.scroll-indicator .dot');

    // Set the first dot as active on page load
    dots[0].classList.add('active');

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            sections[index].scrollIntoView({ behavior: 'smooth' });
        });
    });

    window.addEventListener('scroll', () => {
        let currentIndex = 0;

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentIndex = index;
            }
        });

        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    });
});