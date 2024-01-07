// Código para mostrar el aviso de derechos de autor cuando el usuario ha bajado todo el contenido
window.addEventListener('scroll', function() {
    var scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    var scrollPosition = window.innerHeight + window.scrollY;

    if (scrollPosition >= scrollHeight) {
        document.getElementById('aviso-derechos').style.display = 'block';
    } else {
        document.getElementById('aviso-derechos').style.display = 'none';
    }
});
