function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('image')
var data = new Date()
var hora = data.getHours()
//var hora = 22
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    //Bom dia!
    img.src = 'manhã.jpg'
    document.body.style.background = '#e2cd9f'
}else if (hora >= 12 && hora < 18){
    //Boa tarde!
    img.src = 'tarde.jpg'
    document.body.style.background = '#b9846f'
}else if (hora >= 18 && hora < 24){
    //Boa noite!
    img.src = 'noite.jpg'
    document.body.style.background = '#515154'
}
}