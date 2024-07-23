function calcular() {
    var txtv = window.document.getElementById('txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de ${vel}Km/h</p>`
    if (vel > 60) {
        res.innerHTML += `<p>Você está multado por excesso de velocidade</p>`
    } else {
        if (vel == 13) {
            res.innerHTML += `<p>tu é petista? fez o L é?</p>`
        }
    }
    res.innerHTML += `<p>Dirija sempre com sinto de segurança!</p>`
}

var agora = new Date()
var hora = agora.getHours()
document.write (`Agora são exatamente ${hora} horas`)