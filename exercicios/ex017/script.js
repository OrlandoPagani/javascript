function iniciar() {
    n = Math.floor(Math.random() * 100);
    let res = document.querySelector('div#res');
    res.innerHTML += `<p>Acabei de pensar no número <mark>${n}</mark>!</p>`
}

function limpar() {
    res.innerHTML = '<p>Cada vez que você aperta o botão acima, eu penso em um número entre 1 e 100.</p>'
}