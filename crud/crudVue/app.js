const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Tienda con vue',
        lista: [],
        nuevaLista: ''
    },
    methods: {
        agregarLista: function(){
            //console.log('Diste click', this.nuevaLista);
            this.lista.push({
                nombre: this.nuevaLista,
                estado: false
            });
            this.nuevaLista = '';
            localStorage.setItem('tienda-vue', JSON.stringify(this.lista));
        },
        editarLista: function(index){
            this.lista[index].estado = true;
            localStorage.setItem('tienda-vue', JSON.stringify(this.lista));
        },
        eliminarLista: function(index){
            this.lista.splice(index, 1);
            localStorage.setItem('tienda-vue', JSON.stringify(this.lista));
        } 
    },
    created: function(){
        let dataLista = JSON.parse(localStorage.getItem('tienda-vue'));
        if(dataLista === null){
            this.lista = [];
        }else{
            this.lista = dataLista;
        }
    }
});