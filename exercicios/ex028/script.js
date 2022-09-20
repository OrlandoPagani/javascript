function iniciar() {
    let num = document.querySelector('input#txtn');
    let n = Number(num.value);
    let res = document.querySelector('div#res');

    let fat = 1;
    
    if (n <= 21 && n > 0) {        
        res.innerHTML += `<h2>Calculando ${n}!</h2>`;
        for (let c = n; c >= 1; c--) {
            fat *= c;
            if (c != 1) {
                res.innerHTML += `${c} x `;
            } else {
                res.innerHTML += `${c} = `
            }
        }
        res.innerHTML += `<strong>${fat}</strong>`
    } else {
        alert('Por favor, utilize um número entre 1 e 21')
    }
}