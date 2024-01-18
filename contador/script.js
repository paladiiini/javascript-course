var inicio = document.getElementById('inicio');
var fim = document.getElementById('fim');
var passo = document.getElementById('passo');
var res = document.createElement('res')
res.setAttribute('id', 'res')

function contar() {
    var i = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passo.value);
    var r = '';

    if (i < f) {
        for (var c = i; c <= f; c += p) {
            r += c + ' \u{1F449} ';
        }
    } else {
        for (var c = i; c >= f; c -= p) {
            r += c + ' \u{1F449} ';
        }
    }

    r += ' \u{1F3C1} ';
    res.innerHTML = r;
    
    document.getElementById('resultado').appendChild(res);
}