const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");
const numeroId = document.getElementById("numero-id");
const botonBuscar = document.getElementById("buscar");
const botonBuscarTodas = document.getElementById("buscar-todas");
const botonBuscarEconomicas = document.getElementById("buscar-economicas");
const containerCards = document.querySelector(".div_cards");

let impares = [];
let precioMenor = [];
let nombresPizzas = [];
let precioPizzas = [];
let precioDetallado = [];


let pizzas = [
    {
        id: 1,
        nombre: "Muzza",
        ingredientes: ["Salsa", "Queso muzza", "Oregano"],
        precio: 500,
        URL: "https://www.cucinare.tv/wp-content/uploads/2019/03/Queso-en-la-pizza.jpg",
    },
    {
        id: 2,
        nombre: "Napolitana",
        ingredientes: ["Salsa", "Queso muzza", "Tomate", "Oregano"],
        precio: 599,
        URL:"https://cocinaconlaura.es/wp-content/uploads/2013/10/Pizza-Napolitana-apaisada.jpg"
    }
    ,
    {
        id: 3,
        nombre: "Marinera",
        ingredientes: ["Salsa", "Queso muzza", "Oregano", "Aceite de Oliva", "Albahaca"],
        precio: 650,
        URL:"https://jetextramar.com/wp-content/uploads/2021/10/receta-de-preparado-para-pizza-Jet-Extramar.jpg"
    },
    {
        id: 4,
        nombre: "Fugazzeta",
        ingredientes: ["Salsa", "Queso muzza", "Cebolla"],
        precio: 550,
        URL:"https://www.clarin.com/img/2019/09/07/la-fugazzetta-es-un-invento___JhNHCzxP-_1200x630__1.jpg"
    },
    {
        id: 5,
        nombre: "Cuatro Quesos",
        ingredientes: ["Salsa","Muzza", "Gorgonzola","Parmesano", "Fontina"],
        precio: 700,
        URL:"https://www.supermercedes.com.ar/napoles/wp-content/uploads/2020/04/pizza_cuatro_quesos.jpg"
    },
    {
        id: 6,
        nombre: "Hawaiana",
        ingredientes: ["Salsa","Queso muzza","Ananá","Jamon","Tomate"],
        precio: 650,
        URL:"https://www.cardamomo.news/__export/1644422142162/sites/debate/img/2022/02/09/pizza_hawaiana_crop1644421835991.jpeg_242310155.jpeg"
    },
    {
        id: 7,
        nombre: "Vegetariana",
        ingredientes: ["Salsa","Calabacin", "Espinacas", "Berenjena"],
        precio: 650,
        URL:"https://static.americadigital.com/wp-content/uploads/2021/02/america_digital_pizza_vegetariana_faciles_2021-2.jpg"
    },
    {
        id: 8,
        nombre: "Pizza con Pollo",
        ingredientes: ["Salsa","Queso muzza","Pollo","Aceitunas","Champiñones", "Oregano"],
        precio: 650,
        URL:"http://assets.kraftfoods.com/recipe_images/opendeploy/136150_640x428.jpg"
    }
]

localStorage.setItem("pizzas", JSON.stringify(pizzas));

const mostrarPrecio = id=>{
    console.log(`El precio de la ${pizzas[id].nombre} es $${pizzas[id].precio}`)
}


for(let i=0;i<pizzas.length;i++){
    if(pizzas[i].id%2!==0){
        impares.push(pizzas[i].nombre);
    }
    if(pizzas[i].precio<600){
        precioMenor.push(pizzas[i].nombre); 
    }

    nombresPizzas.push(pizzas[i].nombre)
    

    precioPizzas.push("$"+pizzas[i].precio);
   
    mostrarPrecio(i);
}

console.log("Las pizzas con id impar son: "+impares);
console.log(`Las pizzas ${precioMenor} cuestan menos de $600`);
console.log(`Los nombres de todas las pizzas son: ${nombresPizzas}`);
console.log(`Los precios de las pizzas son: ${precioPizzas}`)


//EJERCICIO JS3 EDUFLOW

botonBuscar.addEventListener("click",()=>{
    let numeroIngresado = numeroId.value;
    for(let pizza in pizzas){
        if(pizzas[pizza].id == numeroIngresado){
            nombre.innerHTML = pizzas[pizza].nombre;
            precio.innerHTML = pizzas[pizza].precio;
            nombre.style.color="black";
            containerCards.innerHTML=`<div class="card" style="width: 18rem;">
                <div class="card-body">
                <div class="imagen-pizza mb-2"> <img class="card-img-top" src=${pizzas[pizza].URL} alt=""></div> 
                <h5 class="card-title">${pizzas[pizza].nombre}</h5>
                <p class="card-text">ID: ${pizzas[pizza].id}</p>
                <p class="card-text">$${pizzas[pizza].precio}</p>
                <a href="#" class="btn btn-primary">Ver Pizza</a>
                </div>
                </div>
                </div>`;
            return;
        } else {
            nombre.innerHTML = "Pizza no encontrada";
            nombre.style.color="red";
            precio.innerHTML = "";
            containerCards.innerHTML = "";
        }
    }
    
})

const buscarEconomicas= ()=>{
    containerCards.innerHTML="";
    nombre.innerHTML = "";
    precio.innerHTML = "";
    for(let pizza in pizzas){
        if(pizzas[pizza].precio < 600){
            containerCards.innerHTML+=`<div class="card" style="width: 18rem;">
                <div class="card-body">
                <div class="imagen-pizza mb-2"> <img class="card-img-top" src=${pizzas[pizza].URL} alt=""></div> 
                <h5 class="card-title">${pizzas[pizza].nombre}</h5>
                <p class="card-text">ID: ${pizzas[pizza].id}</p>
                <p class="card-text">$${pizzas[pizza].precio}</p>
                <a href="#" class="btn btn-primary">Ver Pizza</a>
                </div>
                </div>
                </div>`;
        } 
    }
}

const buscarTodas = ()=>{
    containerCards.innerHTML="";
    nombre.innerHTML = "";
    precio.innerHTML = "";
    for(let pizza in pizzas){
        containerCards.innerHTML+=`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <div class="imagen-pizza mb-2"> <img class="card-img-top" src=${pizzas[pizza].URL} alt=""></div> 
          <h5 class="card-title">${pizzas[pizza].nombre}</h5>
          <p class="card-text">ID: ${pizzas[pizza].id}</p>
          <p class="card-text">$${pizzas[pizza].precio}</p>
          <a href="#" class="btn btn-primary">Ver Pizza</a>
        </div>
        </div>
        </div>`;
    }
}

botonBuscarTodas.addEventListener("click",buscarTodas);
botonBuscarEconomicas.addEventListener("click",buscarEconomicas);

