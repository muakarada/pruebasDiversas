//Primer componente 
Vue.component('saludo', {
    //'<h1>{{saludo}}</h1>',  Comillas simples para una sola línea
    //Puedes insertar en template antes de comillas //html para que puedas escribir en html
    template:  ` 
    <div>
        <h1>Hola Kelly</h1>
        <h3>Desde Vue</h3>
        <h5>Qué tal!</h5>
    </div>
    
    `, 
    //Comillas  invertidas `` alt + ]

    data(){ //data en función y retorna datos
        return{
            saludo: 'Hola desde Vue'
        }
    }

})

