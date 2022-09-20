function iniciar() {
    let res = document.querySelector('div#res');
    res.innerHTML += '<h2>Contagem regressiva de 10 até 1</h2>'
    for (let c = 10; c >= 1; c--) {        
        res.innerHTML += `${c} \u{1F449} `        
    }
    res.innerHTML += `\u{1F3C1}`
}