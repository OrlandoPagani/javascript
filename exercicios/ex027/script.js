function iniciar() {
    let num = document.querySelector('input#txtn');
    let n = Number(num.value);
    let res = document.querySelector('div#res');

    res.innerHTML = `<h2>Tabuada de ${n}</h2>`;

    for (let c = 1; c <= 10; c++) {
        res.innerHTML += `${n} x ${c} = <strong>${n * c}</strong><br>`
    }
}