//@ts-check
const botonIncremento = document.getElementById('incrementar')
const botonDecremento = document.getElementById('decrementar')
const botonReset = document.getElementById('reset')
const numeroContador = document.getElementById('numeroContador')

botonIncremento?.addEventListener('click', onIncrementNumber)
botonDecremento?.addEventListener('click', onDecrementNumber)
botonReset?.addEventListener('click', onResetNumber)



function onIncrementNumber(){
    /**
     *  @type {any} valor
     * */
    // @ts-ignore
    let valor = numeroContador.innerText
    valor++
    valor= Number(numeroContador?.innerText)

}

function onDecrementNumber(){

    let valor = Number(numeroContador?.innerHTML)
    
    if(valor > 0){
       valor--
       // @ts-ignore
       numeroContador.textContent = valor
    }

}

function onResetNumber(){
    /**
     * @type {number}
     */
    // @ts-ignore
    numeroContador.innerText = 0

}
