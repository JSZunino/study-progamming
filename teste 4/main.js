function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'img/Design_sem_nome-removebg-preview.png'
        document.body.style.background = '#18bdf0'
    }
    else if (hora >=12 && hora < 18) {
        //BOA TARDE!
        img.src = 'img/Design_sem_nome_1_-removebg-preview.png'
        document.body.style.background = '#ffc115'
    } else {
        //BOA NOITE!
        img.src = 'img/Design_sem_nome_2_-removebg-preview.png'
        document.body.style.background = '#303bd8'
    }
}

