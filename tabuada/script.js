let num = document.getElementById('numero');
let mul = document.getElementById('multiplo');

function gerarTabuada() {
    var inputNum = Number(num.value);
    var inputMul = Number(mul.value);
    if (inputNum == 0 || inputMul == 0) {
        alert('Preencha os campos corretamente!');
        return;
    }
    var res = document.getElementById('resultado');
    if (res == null) {
        res = document.createElement('div');
        res.setAttribute('id', 'resultado');
        document.getElementById('final').appendChild(res);
    }
    for (var i = 1; i <= inputMul; i++) {
        res.innerHTML = '';
        var item = document.createElement('option');
        item.text = `${inputNum} x ${i} = ${inputNum * i}`;
        item.value = `tab${i}`;
        res = item.text;
        var textNode = document.createTextNode(res);
        document.getElementById('resultado').appendChild(textNode); 
        document.getElementById('resultado').appendChild(document.createElement("br")); 
    }
}