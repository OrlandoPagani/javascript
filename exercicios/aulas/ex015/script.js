function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let formAno = document.getElementById('txtano');
    let res = document.getElementById('res');

    if (formAno.value.length == 0 || formAno.value > ano) {
        alert('[ERRO] Por favor, verifique os dados e tente novamente!');
    } else {
        let formSexo = document.getElementsByName('radsex');
        let idade = ano - Number(formAno.value);
        let gender = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (formSexo[0].checked) {
            gender = 'um <strong>Homem</strong>';
            if (idade <= 12) {
                // Criança
                img.setAttribute('src', 'imagens/homem-crianca.png');
            } else if (idade < 21) {
                // Adolescente
                img.setAttribute('src', 'imagens/homem-jovem.png');
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/homem-adulto.png');
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/homem-idoso.png');
            }
        } else if (formSexo[1].checked) {
            gender = 'uma <strong>Mulher</strong>';
            if (idade <= 12) {
                // Criança
                img.setAttribute('src', 'imagens/mulher-crianca.png');
            } else if (idade < 21) {
                // Adolescente
                img.setAttribute('src', 'imagens/mulher-jovem.png');
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/mulher-adulto.png');
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/mulher-idoso.png');
            }
        }
        res.innerHTML = `<p>Detectamos ${gender} com ${idade} anos de idade.</p>`;
        res.appendChild(img);
    }

    console.log(img);
}
