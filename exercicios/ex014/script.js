function iniciar() {
    let res = document.querySelector('div#res');
    let data = new Date();
    res.innerHTML = `<p>O que eu recebi do sistema foi <mark>${data}</mark></p>`
}