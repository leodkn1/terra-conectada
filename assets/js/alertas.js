const form = document.getElementById('alertaForm');

form.addEventListener('submit', function(event){

    event.preventDefault();

    document.getElementById('sucesso').textContent =
    '✅ Alerta enviado com sucesso para os dispositivos cadastrados.';

});