function contar() {
    let inicio = document.querySelector('input#txti');
    let final = document.querySelector('input#txtf');
    let i = Number(inicio.value);
    let f = Number(final.value);
    let res = document.querySelector('div#res');
    res.innerHTML += `<h2>Contando de ${i} até ${f}</h2>`;

    if (i == f) {
        res.innerHTML += 'Não é possível contar, pois os números são iguais'
    } else if (i > f) {
        for (let c = i; c >= f; c--) {
            res.innerHTML += `${c} \u{1F449}`
        }
    } else if (i < f) {
        for (let c = i; c <= f; c++) {
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}