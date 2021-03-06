import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        frutas: [
            {nombre: 'Naranja', cantidad:0},
            {nombre: 'Fresa', cantidad:0},
            {nombre: 'Uva', cantidad:0},
        ]
    },
    mutations:{
        aumentar(state, index){
            state.frutas[index].cantidad ++
        },
        reiniciar(state){
            state.frutas.forEach(elemento =>{
                elemento.cantidad = 0
            })
        }

    },
    actions:{

    }
})