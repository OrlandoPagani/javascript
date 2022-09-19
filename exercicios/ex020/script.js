function iniciar() {
    let mes = prompt('Digite o mês por extenso (ex: Setembro)').toLowerCase();
    let res = document.querySelector('div#res');

    res.innerHTML = `No mês de <mark>${mes}</mark>, estamos na estação `

    if (mes == 'janeiro' || mes == 'fevereiro' || mes == 'março') {
        res.innerHTML += `<strong><mark>VERÃO</mark></strong>`
    } else if (mes == 'abril' || mes == 'maio' || mes == 'junho') {
        res.innerHTML += `<strong><mark>OUTONO</mark></strong>`        
    } else if (mes == 'julho' || mes == 'agosto' || mes == 'setembro') {
        res.innerHTML += `<strong><mark>INVERNO</mark></strong>`
    } else if (mes == 'outubro' || mes == 'novembro' || mes == 'dezembro') {
        res.innerHTML += `<strong><mark>PRIMAVERA</mark></strong>`       
    } else {
        res.innerHTML = 'Desculpe. Opção inválida...'
    }
}