function iniciar() {
    let res = document.querySelector('div#res');
    let data = new Date();
    let semana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    let meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    let diaSemana = data.getDay();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();
    res.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`;
    res.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`;
    res.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`;
    res.innerHTML += `<p>Dia da semana: <mark>${semana[diaSemana]}</mark></p>`;
    res.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`;
    res.innerHTML += `<p>Minutos: <mark>${minuto}</mark></p>`;
    res.innerHTML += `<p>Segundos: <mark>${segundo}</mark></p>`;
}