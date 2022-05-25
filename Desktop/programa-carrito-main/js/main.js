const inputnombr = document.querySelector(".nombre "),
  inputprecio = document.querySelector(".precio"),
  inputhambu = document.querySelector("hambu"),
  inputimagen = document.querySelector(".img"),
  botonn = document.querySelector(".boton");

const contenedor = document.getElementById("contenedor");

const productos = [];

class producto {
  constructor(precio, nombre, img) {
    this.nombr = nombre;
    this.precio = precio;
    this.imagen = img;
  }
}
function cargarproducto(producto) {
  return productos.push(producto);
}
function crearproducto(nombre, precio, img) {
  nombre = inputnombr.value;
  precio = inputprecio.value;
  img = inputimagen.value;
  return new producto(nombre, precio, img);
}
function crearhtml() {
  let html;
  for (const producto of productos) {
    html = `
  <div class="card" style="width: 18rem;">
  <img src=${producto.img} class="card-img-top" alt="...">
  <div class="card-body">
  <p>${producto.nombre}</p>
    <p class="card-text">el precio  es ${producto.precio}</p>
  </div>
</div>`;
  }

  contenedor.innerHTML += html;
}
botonn.addEventListener("click", () => {
  const producto = crearproducto(nombr, precio, img);

  cargarproducto(producto);
  crearhtml(productos);
});
/* /et datos = prompt("ingrese su nombre y apellido ");

let direccion = prompt("indique la direccion de su domicilio");
console.log("envio para " + datos + " ala direccion " + direccion);

class producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const hambur = new producto("hamburguesa", 450);
const papa = new producto("papas", 200);
const pancho = new producto("panchos", 150);
const pizza = new producto("pizzas", 500);
const empanadas = new producto("empanadas", 600);
const product = [hambur, papa, pancho, empanadas, pizza];
console.log(product);

// return nombre;

const mostrarlista = () => {
  let texto = "estos son nuestros precios\n";
  product.forEach((element) => {
    texto += `${element.nombre} ${element.precio}$ \n`;
  });
  alert(texto);
};

mostrarlista();

let productos = prompt(
  "ingresa un producto de nuestra lista " +
    "\nhamburguesas" +
    "\nmilanesas gigantes" +
    "\npapas " +
    "\npizzas" +
    "\nempanadas"
);
while (productos === "") {
  productos = prompt(
    "ingresa un producto de nuestra lista " +
      "\nhamburguesas" +
      "\nmilanesas gigantes" +
      "\npapas " +
      "\npizzas" +
      "\nempanadas"
  );
}

let cantidad = parseInt(prompt("que cantidad quiere ? "));
console.log(cantidad + " " + productos);
let vuelto = parseInt(prompt("indique con cuanto va a abonar"));

let total;
switch (productos) {
  case "hamburguesas":
    total = cantidad * 450;

  case "milanesas gigantes":
    total = cantidad * 1000;

    break;
  case "papas":
    total = cantidad * 200;
    break;
  case "pizzas":
    total = cantidad * 500;

    break;
  case "empanadas":
    total = cantidad * 600;
    break;

  default:
    alert("esa opcion no esta disponible");
    break;
}

console.log("el precio es $" + total);

console.log("el cliente va a abonar con $" + vuelto);

if (vuelto === total) {
  console.log("el cliente abona con la plata justa");
  alert("muchas grasias el pedido esta en proceso");
}
if (vuelto > total) {
  console.log(
    "nuesto delivery devera llevar un total de $",
    vuelto - total,
    "para darle cambio al cliente"
  );
  alert("muchas grasias por elegirnos su pedido esta en proceso");
}
if (vuelto < total) {
  console.log("el cliente indico un monto menos al precio del producto ");
  alert(
    `indicaste ${vuelto} por lo tanto no te alcanza para pagar el producto`
  );
}

//class producto {
//constructor(nombre, precio, id) {
//this.nombre = nombre;
//this.precio = precio;
//this.id = id;

//const hamburguesas = new hamburguesas("hamburguesas", 450, 1234);
//const pizzas = new pizzas("pizza", 600, 2223);
//const papas = new papas("papas", 200, 2044);
//const empanadas = new empanadas("empanadas");
//const milanesas = new milanesas("milanesas gigantes");
//const prod = [hamburguesas, pizzas, papas, empanadas, milanesas];
//  console.log(prod);
//}
//}

//este es el fin del programa golomax

//arrays funcionando

/*  
class producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const hambur = new producto("hamburguesa", 450);
const papa = new producto("papas", 200);
const pancho = new producto("panchos", 150);
const productos = [hambur, papa, pancho];
console.log(productos);

const saludar = () => {
  let nombre = prompt("bienvenidos a pelis plus , indique su nombre");
  while (nombre === "") {
    nombre = prompt("bienvenidos a pelis plus , indique su nombre");
  }
  // return nombre;
};

const mostrarlista = () => {
  let texto = "";
  productos.forEach((element) => {
    texto += `${element.nombre} ${element.precio} \n`;
  });
  alert(texto);
};

saludar();
mostrarlista(); */
