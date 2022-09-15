let resp = window.document.getElementById('saida');

function acao1() {
    resp.innerHTML += '<p>Clicou no primeiro botão</p>';
}

function acao2() {
    resp.innerHTML += '<p>Clicou no segundo botão</p>';
}

function acao3() {
    resp.innerHTML += '<p>Clicou no terceiro botão</p>';
}

function acao4() {
    resp.innerHTML += '<p>Clicou no quarto botão</p>';
}

function limpar () {
    resp.innerHTML = '<p>Aqui vou registrar suas ações com os botões acima</p>';
}