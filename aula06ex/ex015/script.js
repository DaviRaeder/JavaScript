function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './imagens/foto-bebe-m.png')
            } else if(idade < 21) {
                // Jovem
                img.setAttribute('src', './imagens/foto-jovem-m.png')
            } else if(idade < 50) {
                // Adulto
                img.setAttribute('src', './imagens/foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', './imagens/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './imagens/foto-bebe-f.png')
            } else if(idade < 21) {
                // Jovem
                img.setAttribute('src', './imagens/foto-jovem-f.png')
            } else if(idade < 50) {
                // Adulto
                img.setAttribute('src', './imagens/foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', './imagens/foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}