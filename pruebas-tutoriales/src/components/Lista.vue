<template>
    <div>
    <ol class="list-group ">
        <li v-for="(item, index) of array" :key="item.id" @click="(aumentar, index)" 
        class="list-group-item d-flex justify-content-between align-items-start">
            {{index}} - {{item.nombre}}
            <span class="badge bg-primary rounded-pill">{{item.cantidad}}</span>
        </li>
    </ol>
    <button class="btn btn-warning btn-block" @click="reiniciar">Reiniciar</button>
    </div>

</template>

<script>
    import {mapState, mapMutations} from 'vuex';

    export default{
        name: 'Lista',
        computed:{
            ...mapState(['frutas']),
            array(){
                return this.frutas.sort( (a, b) => b.cantidad - a.cantidad)
            }
        },
        methods:{
            ...mapMutations(['aumentar', 'reiniciar'])
        }
    }

</script>