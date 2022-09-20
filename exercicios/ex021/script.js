function iniciar() {
    let res = document.querySelector('div#res');
    res.innerHTML += '<h2>Contando de 1 até 10</h2>'
    for (let c = 0; c <= 10; c++) {
        res.innerHTML += `${c} \u{1F449} `
    }
    res.innerHTML += `\u{1F3C1}`
}