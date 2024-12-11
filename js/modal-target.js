document.addEventListener('DOMContentLoaded', () => {
    const showModalButtons = document.querySelectorAll('.showModal');
    const formSourceInput = document.querySelector('#formSource');

    showModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const source = button.getAttribute('data-source') || 'unknown';
            formSourceInput.value = source;
        });
    });
});
