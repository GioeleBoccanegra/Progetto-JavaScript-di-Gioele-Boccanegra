const container = document.querySelector("[data-container]");
//container.innerHTML = "ciao";


container.classList.add("container");


const counterDiv = document.createElement("div");
counterDiv.className = "counter-container";
container.appendChild(counterDiv);

const buttonsDiv = document.createElement("div");
buttonsDiv.className = "buttons-container";
container.appendChild(buttonsDiv);

const buttonMeno = document.createElement("button");
buttonMeno.className = "buttons";
buttonsDiv.appendChild(buttonMeno);

const buttonPiu = document.createElement("button");
buttonPiu.className = "buttons";
buttonsDiv.appendChild(buttonPiu);