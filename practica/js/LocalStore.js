//@ts-check

/** @module CounterStorage */

export  class CounterStorage {
    
    /** @param {*} key  */
    constructor(key){
        this.key = key
        this.value = Number(localStorage.getItem(this.key)) || 0
    }

    get(){
        const value = localStorage.getItem(this.key)
        return value !== null ? Number(value) : 0
    }
 /**
  * 
  * @param {*} value 
  */
    set(value){
        localStorage.setItem(this.key, value)
    }
    reset (){
        localStorage.removeItem(this.key)
    }
}