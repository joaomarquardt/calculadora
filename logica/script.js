var txt = ''
var result = 0
var ajuda = document.getElementById('ajuda')

/*function sleep(milliseconds) {
    let timeStart = new Date().getTime();
    while (true) {
        let elapsedTime = new Date().getTime() - timeStart;
        if (elapsedTime > milliseconds) {
            break;
        }
    }
}
*/

function btnclicado(botao) {
    var visor = document.calculadora.visor.value
    if (visor == 'Apagado!') {
        document.calculadora.visor.value = ''
    }
    
    if (visor == '' || visor == 'Apagado!' || visor == 'result') {
        if (botao=='+' || botao == '-' || botao == '*' || botao == '/' || botao == '<') {
            return
        }
    }


    if (visor == result) {
        document.calculadora.visor.value = ''
    }
    document.calculadora.visor.value += botao
    txt += botao
    
}

function limpa() {
    document.calculadora.visor.value = 'Apagado!'
    txt = ''
}

function volta() {
    txt = txt.substring(0, txt.length -1)
    document.calculadora.visor.value = txt
}

function resultado() {
    result = eval(txt)
    document.calculadora.visor.value = result
    txt = ''
}
