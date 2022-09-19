function calcular() {
    let nome = prompt('Qual é o nome do aluno?');
    let n1 = prompt(`Qual foi a primeira nota de ${nome}?`);
    let n2 = prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`);
    let media = (Number(n1) + Number(n2)) / 2;
    let res = document.querySelector('div#res');
    res.innerHTML = `<p>Calculando a média final de <span id="destaque">${nome}</span>.</p>`;
    res.innerHTML += `<p>As notas obtidas foram <span id="destaque">${n1}</span> e <span id="destaque">${n2}</span>.</p>`;
    res.innerHTML += `<p>A média final será <span id="destaque">${media}</span>.</p>`;
    if (media >= 6) {
        res.innerHTML += '<p>A mensagem que temos é: <span id="status">Meus parabéns!</span></p>';
    } else {
        res.innerHTML += '<p>A mensagem que temos é: <span id="status">Estude um pouco mais!</span></p>'
    }
}