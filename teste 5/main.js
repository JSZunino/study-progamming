function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('idad').value;
    var res = document.getElementById('res');

    if (fano.length == 0 || fano > ano) {
        window.alert('Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'Homem';
            if (fano == 1782) {
                // Homem nascido em 1782
                img.setAttribute('src', 'img/easter_egg_site.jpg');
                img.style.width = '600px';
                img.style.height = 'auto';
            } else if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/bebe_menino.jpg');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem_homem.jpg');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adulto_homem.jpg');
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso_homem.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/bebe_menina.jpg');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem_mulher.jpg');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adulto_mulher.jpg');
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso_mulher.jpg');
            }
        }
        res.innerHTML = `Você é ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}