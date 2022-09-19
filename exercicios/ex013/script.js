function iniciar() {
    let n1 = parseInt(prompt('Digite um número:'));
    let n2 = parseInt(prompt('Digite outro número'));
    let res = document.querySelector('div#res');
    let maior = n1 > n2 ? n1 : n2;
    res.innerHTML = `<p>Analisando os valores ${n1} e ${n2}, o maior valor é <strong>${maior}</strong></p>`;
}