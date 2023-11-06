// const app = document.querySelector('#app');

// const hello = document.createElement("p");
// hello.textContent = "Hello";
// // document.body.appendChild(hello);
// app.appendChild(hello);

// const bonjour = document.createElement("p");
// bonjour.textContent = "Bonjour";
// app.appendChild(bonjour);

// const coucou = document.createElement("p");
// coucou.textContent = "Coucou";
// app.appendChild(coucou);

// const salut = document.createElement("p");
// salut.textContent = "Salut";
// app.appendChild(salut);

// const ola = document.createElement("p");
// ola.textContent = "Ola";
// app.appendChild(ola);




// Le même code en version simplifié
//                |
//               \ /


function createCustomElement(text, elementType) {
  const p = document.createElement(elementType);
  p.textContent = text;
  document.querySelector('#app').appendChild(p);
}

createCustomElement('Hello', 'span');
createCustomElement('Bonjour', 'p');
createCustomElement('Coucou', 'span');
createCustomElement('Salut', 'div');
createCustomElement('Ola', 'span');
createCustomElement('Bonjour', 1);

// ! La ligne n°43 ne marche pas car 1 est un chiffre et non pas une chaîne de charactère !