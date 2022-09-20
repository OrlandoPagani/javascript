function tabuada() {
    let num = document.querySelector('input#txtn');
    let tab = document.querySelector('select#seltab');

    if (num.value.length == 0) {
        alert('Por favor, digite um número')
    } else {
        tab.innerHTML = '';
        let n = Number(num.value);
        let c = 1;
        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${c} x ${n} = ${c*n}`;
            item.value = `tab${c}`
            tab.appendChild(item);
            c++;
        }
    }
}