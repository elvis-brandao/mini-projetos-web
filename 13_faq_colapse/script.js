const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toogle => {
    toogle.addEventListener('click', () => {
        toogle.parentNode.classList.toggle('active');
    });
});