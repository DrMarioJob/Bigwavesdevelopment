// Mobile nav
document.querySelector('.mobileHeadBtn').addEventListener('click', () => {
    document.querySelector('.navigation').classList.toggle('active');
    document.querySelector('.mobileHeadBtn').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.sec'); // Все блоки с классом .sec

    const handleScroll = () => {
        const triggerBottom = window.innerHeight / 1.2; // Точка срабатывания

        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible'); // Добавляем класс видимости
            }
        });
    };

    window.addEventListener('scroll', handleScroll); // Слушаем прокрутку

    handleScroll(); // Проверяем начальное положение
});