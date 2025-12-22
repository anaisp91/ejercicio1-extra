import {CounterStorage} from "./LocalStore.js"

document.addEventListener('DOMContentLoaded', () =>{


const botonIncremento = document.getElementById('incrementar')
const botonDecremento = document.getElementById('decrementar')
const botonReset = document.getElementById('reset')
const numeroContador = document.getElementById('numeroContador')


//Instancia de la clase
const storage = new CounterStorage('contador')

//estado inicial




botonIncremento?.addEventListener('click', onIncrementNumber)
botonDecremento?.addEventListener('click', onDecrementNumber)
botonReset?.addEventListener('click', onResetNumber)



let contador = storage.get()
numeroContador.textContent = contador

function onIncrementNumber(){
   contador++
    actualizar()

}

function onDecrementNumber(){

    if(contador > 0){
       contador--
    }

    actualizar()

}

function onResetNumber(){

    contador = 0
    resetear()

}

function resetear (){
    contador = 0
    actualizar()
}

function actualizar (){
    numeroContador.textContent = contador
    storage.set(contador)
}


})