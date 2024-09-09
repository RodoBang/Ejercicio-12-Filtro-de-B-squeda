document.getElementById('busqueda').addEventListener('input', function() {
    const filtro = this.value.toLowerCase();
    const items = document.querySelectorAll('#lista li');

    items.forEach(item => {
        const texto = item.textContent.toLowerCase();
        if (texto.includes(filtro)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});
