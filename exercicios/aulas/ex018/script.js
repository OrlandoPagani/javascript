let lista = [];
let tab = document.querySelector('select#seltab');
let dado = document.querySelector('input#txtn');
let res = document.querySelector('div#res');
let num = Number(dado.value);
let soma = 0;
let maior = 0;
let menor = 0;

function adicionar() {
    if (num < 1 || num > 100) {
        alert('Dado inválido, por favor, insira um número entre 1 e 100.');
    } else if (lista.indexOf(num) != -1) {
        alert('Este valor ja foi adicionado!')
    } else {
        lista.push(num);
        soma += num;
        let item = document.createElement('option');
        item.text = `Valor ${num} adicionado.`;
        item.value = `${num}`;
        tab.appendChild(item);
    }
}

function finalizar() {
    if (lista.length == 0) {
        alert('Insira dados antes de finalizar.')
    } else {
        for (let pos in lista) {
            if (pos == 0) {
                maior = lista[pos];
                menor = lista[pos];
            }
            if (lista[pos] > maior) {
                maior = lista[pos];
            }
            if (lista[pos] < menor) {
                menor = lista[pos];
            }
        }
        let media = soma / lista.length;
        res.innerHTML += 
        `<p>Ao todo, temos ${lista.length} números cadastrados.</p>
        <p>O maior valor informado foi ${maior}.</p> 
        <p>O menor valor informado foi ${menor}.</p>
        <p>Somando todos os valores, temos ${soma}.</p>
        <p>A média dos valores digitados é ${media}.</p>`;
    }
}