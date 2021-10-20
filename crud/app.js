//console.log('funciona');

//var globales
const formUI = document.querySelector('#formula');
const listaActUI = document.getElementById('listaActividades');
let arrayAc = [];

//funciones
const CrearItem = (compra) =>{
    let item = {
        compra: compra,
        estado: false,
    }
    arrayAc.push(item);
    return item;
}

const GuardarData = (compra) =>{
    localStorage.setItem('lista', JSON.stringify(arrayAc));

    LeerData();
}

const LeerData = () => {
    listaActUI.innerHTML = '';
    arrayAc = JSON.parse(localStorage.getItem('lista'));
    if(arrayAc === null){
        arrayAc = [];
    }else{
        arrayAc.forEach(element => {
            if(element.estado){
                listaActUI.innerHTML += `<div class="alert alert-success" 
                role="alert"><span class="material-icons float-left 
                mr-4">shopping_cart</span><b>${element.compra}</b> -${element.estado}
                <span class="float-right"><span class="material-icons">done</span>
                <span class="material-icons">delete</span></span></div>`
            }else{
                listaActUI.innerHTML += `<div class="alert alert-danger" 
                role="alert"><span class="material-icons float-left 
                mr-4">shopping_cart</span><b>${element.compra}</b> -${element.estado}
                <span class="float-right"><span class="material-icons">done</span>
                <span class="material-icons">delete</span></span></div>`
            } 
        });
    }
}

const EliminarLista = (compra) => {
    let indexArray;
    arrayAc.forEach((dato, index) =>{
    if(dato.compra === compra){
            indexArray = index;
        }
    });
    arrayAc.splice(indexArray,1);

    GuardarData();
}

const EditarLista = (compra) => {
    let indexArray = arrayAc.findIndex((dato) => dato.compra === 
    compra);
    console.log(arrayAc[indexArray]);

    arrayAc[indexArray].estado = true;

    GuardarData();
}

//event listeners
formUI.addEventListener('submit', (e) => {
    e.preventDefault();
    let compraUI = document.querySelector('#compra').value;
    CrearItem(compraUI);
    GuardarData();

    formUI.reset();
});

//Se genera cuando se carga el html, lo del localstorage se carga
document.addEventListener('DOMContentLoaded', LeerData);

listaActUI.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){
        let texto = e.path[1].childNodes[2].innerHTML;
        if(e.target.innerHTML === 'delete'){
            EliminarLista(texto);
        }
        if(e.target.innerHTML === 'done'){
            EditarLista(texto);
        }
    }
});