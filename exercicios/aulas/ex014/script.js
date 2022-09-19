function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    console.log(data, hora);
    msg.innerHTML = `Agora são ${hora}:${minuto} `;
    if (hora >= 5 && hora < 12) {
        // Bom dia
        img.src = 'imagens/morning.png';
        document.body.style.background = '#f1e0c3';
        msg.innetHTML += 'da manhã.';
    } else if (hora >= 12 && hora < 19) {
        // Boa tarde
        img.src = 'imagens/evening.png';
        document.body.style.background= '#fd9c24';
        msg.innerHTML += 'da tarde.';
    } else {
        // Boa noite
        img.src = 'imagens/night.png';
        document.body.style.background = '#1f5969';
        if (hora < 5) {
            msg.innerHTML += 'da madrugada.'
        } else {
            msg.innerHTML += 'da noite.';
        }
    }
}

