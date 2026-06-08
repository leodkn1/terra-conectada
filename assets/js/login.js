const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event){

    event.preventDefault();

    const usuario =
    document.getElementById('usuario').value;

    const senha =
    document.getElementById('senha').value;

    const mensagem =
    document.getElementById('mensagemErro');

    if(usuario === 'admin' && senha === '1234'){

        window.location.href =
        'pages/painel.html';

    }else{

        mensagem.textContent =
        'Usuário ou senha inválidos.';

    }

});