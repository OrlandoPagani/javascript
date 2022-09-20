function contar() {
    let inicio = document.querySelector('input#inicio');
    let fim = document.querySelector('input#fim');
    let passo = document.querySelector('input#passo');
    let res = document.querySelector('div#res');

    if (inicio.value.length == 0 || fim.value.length == 0 || inicio.value == fim.value) {
        if (inicio.value.length == 0) {
            alert('Não é possível contar sem definir o início da contagem');
        } else if (fim.value.length == 0) {
            alert('Não é possível contar sem definir o final da contagem');
        } else if (inicio.value == fim.value) {
            alert('Não é possível contar se os valores de início e final são iguais');
        }
    } else {
        res.innerHTML = 'Contando: '
        if (passo.value == 0) {
            alert('Impossível contar com passo 0, considerando passo 1');
            passo.value = 1;
        }
        if (passo.value < 0) {
            passo.value *= (-1);
        }
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (i > f) {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            for (let c = i; c <= f; c += p) {
                console.log(i, inicio.value, fim.value, passo.value);
                res.innerHTML += `${c} \u{1F449} `;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }
}