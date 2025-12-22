
export  class CounterStorage {

    constructor(key){
        this.key = key
    }

    get(){
        const value = localStorage.getItem(this.key)
        return value !== null ? Number(value) : 0
    }

    set(value){
        localStorage.setItem(this.key, value)
    }
    reset (){
        localStorage.removeItem(this.key)
    }
}