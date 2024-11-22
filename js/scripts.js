/*Usando este HTML, haz que al hacer click en el botón se vayan añadiendo items con el texto Item 1, Item 2, Item 3,... Los item deben llevar el número correspondiente independiente de con cuantos item empiece la lista

```html
<button>Añadir Elementos</button>
<ul>
  <li>Item 1</li>
</ul>
```
*/

const buttonElement = document.getElementById("button");
const itemlistElement = document.getElementById("itemlist");
let numero = 2;
const insert = () => {
  const newItem = document.createElement("li");
  newItem.textContent = "Item" + numero++;
  itemlistElement.append(newItem);
};
buttonElement.addEventListener("click", insert);

/*
- Usando el input range que te doy haz un generador de encabezados. El input te permite seleccionar un número del 1 al 6, en función de cual elijas ser generará un encabezado con la etiqueta correspondiente. Si elijes un 3, al hacer click en el botón se generará un h3 con el texto "soy un h3", si elijes un 5 un h5 con el texto "soy un h5" y así para todos.*/

const rangeElement = document.getElementById("range");
const labelElmeent = document.getElementById("label");
const buttongenElement = document.getElementById("buttongen");
const hContainerElement = document.getElementById("hContainer");

/*rangeElement.value es el numero del input*/

const rangeValue = () => {
  labelElmeent.textContent = rangeElement.value;
};

const hGen = () => {
  const newH = document.createElement(`h${rangeElement.value}`);
  newH.textContent = `Soy un h${rangeElement.value}`;
  hContainerElement.append(newH);
};

buttongenElement.addEventListener("click", hGen);
rangeElement.addEventListener("input", rangeValue);

/*
```html
<div>
  <label>1</label>
  <input type="range" id="range" min="1" max="6" step="1" value="1" />
  <button>Generar Encabezado</button>
</div>
``` */

/*Inserción múltiple*/

/*- Con este HTML consigue que al introducir un número POSITIVO y MAYOR de 0 se genere la tabla de multiplicar de ese número del 0 al 10 como elementos de la lista. En el caso de que el número no sea correcto o no haya número, el botón estará desactivado.

```html
<label>Introduce un número</label>
<input type="number" />
<button>Imprimir tabla de multiplicar</button>
<ul></ul>
```
*/

const numInput = document.getElementById("numInput");
const botontablaElement = document.getElementById("botontabla");
const tablaContainerElement = document.getElementById("tablaContainer");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*primero desactivamos los botones*/
const buttonActive = () => {
  if (numInput.value >= 0) {
    botontablaElement.disabled = false;
  } else {
    botontablaElement.disabled = true;
  }
};

const tablaGen = () => {
  const fragment = document.createDocumentFragment();
  numbers.forEach((number) => {
    const tabla = document.createElement("p");
    tabla.textContent = `${numInput.value} x ${number} = ${
      number * numInput.value
    }`;

    fragment.append(tabla);
  });

  tablaContainerElement.append(fragment);
};

numInput.addEventListener("input", buttonActive);
botontablaElement.addEventListener("click", tablaGen);

/* Con este objeto debes crear tarjetas de usuario que muestren todos los datos, el diseño es libre, lo importante es que muestren toda la información del usuario y la imagen de perfil. Crea una función que genere todas las tarjetas de usuario y las inserte en el DOM*/

const USERS = [
  {
    name: "Josep Flores",
    age: 77,
    username: "Josep85",
    email: "Josep_Flores@hotmail.com",
    profileImage: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    name: "Ricardo Rosas",
    age: 43,
    username: "Ricardo_Rosas",
    email: "Ricardo_Rosas22@yahoo.com",
    profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
  },
  {
    name: "Iván Tamayo",
    age: 40,
    username: "tamayo87",
    email: "Ivan_Tamayo61@yahoo.com",
    profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
    job: "Lead Communications Designer",
  },
  {
    name: "Maica Villanueva",
    age: 64,
    username: "Maica.Villanueva18",
    email: "Maica.Villanueva1@yahoo.com",
    profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Pedro Estrada",
    age: 77,
    username: "Pedro29",
    email: "Pedro_Estrada22@hotmail.com",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
    job: "Central Directives Liaison",
  },
  {
    name: "Jorge Cedillo",
    age: 33,
    username: "Jorge_Cedillo",
    email: "Jorge.Cedillo2@yahoo.com",
    profileImage: "https://randomuser.me/api/portraits/men/88.jpg",
  },
];

const divtarjetas = document.getElementById("tarjetas-cointainer");

const fragment = document.createDocumentFragment();
USERS.forEach((user) => {
  const newDivCard = document.createElement("div");
  newDivCard.classList.add("card");

  const newName = document.createElement("h2");
  newName.textContent = user.name;
  newName.classList.add("h2");

  const newAge = document.createElement("h3");
  newAge.textContent = user.age;
  newAge.classList.add("h3");

  const newUser = document.createElement("h3");
  newUser.textContent = user.username;
  newUser.classList.add("h3");

  const newEmail = document.createElement("h3");
  newEmail.textContent = user.email;
  newEmail.classList.add("h3");

  const newImage = document.createElement("img");
  newImage.src = user.profileImage;
  newImage.classList.add("img");

  newDivCard.append(newName, newAge, newUser, newEmail, newImage);

  fragment.append(newDivCard);
});

divtarjetas.append(fragment);
