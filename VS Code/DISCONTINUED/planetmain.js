let ptxt = document.getElementById('ptxt');

window.addEventListener('scroll', () => {
    let value = window.scrollY

    ptxt.style.marginTop = value * 2.5 + 'px';
});