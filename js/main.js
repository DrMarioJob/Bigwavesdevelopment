// Mobile nav
document.querySelector('.mobileHeadBtn').addEventListener('click', () => {
    document.querySelector('.navigation').classList.toggle('active');
    document.querySelector('.mobileHeadBtn').classList.toggle('active');
});

// Section scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.sec');

    const handleScroll = () => {
        const triggerBottom = window.innerHeight / 1.2;

        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();
});