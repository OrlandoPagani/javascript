function iniciar() {
    let n = parseInt(prompt('Digite um número:'));
    let res = document.querySelector('div#res');
    if (n % 2 == 0) {
        res.innerHTML = `<p>O número ${n} que foi digitado é <strong>PAR!</strong></p>`
    } else (
        res.innerHTML = `<p>O número ${n} que foi digitado é <strong>ÍMPAR!</strong></p>`
    )
}