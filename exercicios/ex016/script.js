function iniciar() {
    let nasc = parseInt(prompt('Em que ano você nasceu?'))
    let data = new Date();
    let ano = data.getFullYear();
    let res = document.querySelector('div#res');
    let idade = Number(ano) - Number(nasc);
    res.innerHTML = `<p>Quem nasceu em ${nasc} vai completar <strong>${idade} anos</strong> em ${ano}.</p>`
}