function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            if (idade >= 0 && idade < 10) {
                genero = 'Menino'
                img.setAttribute('src', 'img/bebe-m.jpg')
            } else if (idade < 21) {
                genero = 'Jovem'
                img.setAttribute('src', 'img/jovem-m.jpg')
            } else if (idade < 50) {
                genero = 'Homem'
                img.setAttribute('src', 'img/adulto-m.jpg')
            } else {
                genero = 'Idoso'
                img.setAttribute('src', 'img/idoso-m.jpg')
            }  
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                genero = 'Menina'
                img.setAttribute('src', 'img/bebe-f.jpg')
            } else if (idade < 21) {
                genero = 'Jovem'
                img.setAttribute('src', 'img/jovem-f.jpg')
            } else if (idade < 50) {
                genero = 'Mulher'
                img.setAttribute('src', 'img/adulto-f.jpg')
            } else {
                genero = 'Idosa'
                img.setAttribute('src', 'img/idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}