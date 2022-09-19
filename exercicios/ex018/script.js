let n = Math.floor(Math.random() * 100);

function iniciar() {
    let res = document.querySelector('div#res');
    let tentativa = parseInt(prompt('Qual é o seu palpite?'));
    if (tentativa > n) {
        res.innerHTML += `<p>Você falou ${tentativa}. Meu número é <strong>MENOR!</strong></p>`;
    } else if (tentativa < n) {
        res.innerHTML += `<p>Você falou ${tentativa}. Meu número é <strong>MAIOR!</strong></p>`;
    } else {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${n}!</p>`;
        let botao = document.querySelector('input#botao');
        botao.style.visibility = 'hidden';
    }
}