const search = document.querySelector('.search');
const bnt = document.querySelector('.btn');
const input = document.querySelector('.input');

bnt.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
})