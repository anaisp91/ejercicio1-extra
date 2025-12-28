//@ts-check

import {CounterStorage} from "./LocalStore.js"

document.addEventListener('DOMContentLoaded', () =>{


const botonIncremento = document.getElementById('incrementar')
const botonDecremento = document.getElementById('decrementar')
const botonReset = document.getElementById('reset')
const numeroContador = document.getElementById('numeroContador')


//Instancia de la clase
const storage = new CounterStorage('contador')

/** @type {number} */
let contador = storage.get()

if(!numeroContador){
    throw new Error ('No se ha encontrado el número contador')
}

numeroContador.textContent = String(contador)


botonIncremento?.addEventListener('click', onIncrementNumber)
botonDecremento?.addEventListener('click', onDecrementNumber)
botonReset?.addEventListener('click', onResetNumber)



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
    if(!numeroContador){
        throw new Error ('No se ha encontardo el numero contador')
    }
    numeroContador.textContent = String(contador)
    storage.set(contador)
}


})