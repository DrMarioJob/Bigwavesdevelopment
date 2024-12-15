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

document.addEventListener('DOMContentLoaded', function () {
    const formGroups = document.querySelectorAll('.formGroupContainer');

    formGroups.forEach(container => {
        const mediaInputs = container.querySelectorAll('.mediaInput');
        const usernameField = container.querySelector('.usernameField');
        const formGroupGrid2 = container.querySelector('.formGroupGrid2'); // Находим элемент для добавления класса

        if (mediaInputs.length > 0 && usernameField) {
            mediaInputs.forEach(input => {
                input.addEventListener('change', function () {
                    if (this.value === 'Telegram' && this.checked) {
                        usernameField.style.display = 'flex';
                        if (formGroupGrid2) {
                            formGroupGrid2.classList.add('active'); // Добавляем класс
                        }
                    } else {
                        usernameField.style.display = 'none';
                        if (formGroupGrid2) {
                            formGroupGrid2.classList.remove('active'); // Удаляем класс
                        }
                    }
                });
            });
        }
    });
});
