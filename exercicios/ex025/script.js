function iniciar() {
    let num = document.querySelector('input#txtn');
    let n = Number(num.value);
    let res = document.querySelector('div#res');
    res.innerHTML += `<h2>Contando de 0 até ${n}</h2>`;
    for (let c = 0; c <= n; c++) {
        res.innerHTML += `${c} \u{1F449} `
    }
    res.innerHTML += `\u{1F3C1}`
}