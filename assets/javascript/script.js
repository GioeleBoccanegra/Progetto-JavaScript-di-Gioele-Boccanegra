const container = document.querySelector("[data-container]");
//container.innerHTML = "ciao";


container.classList.add("container");


const counterDiv = document.createElement("div");
counterDiv.className = "counter-container";
container.appendChild(counterDiv);

const buttonMeno = document.createElement("button");
buttonMeno.className = "buttons";
counterDiv.appendChild(buttonMeno);
buttonMeno.innerHTML = "-";

const counter = document.createElement("p");
counter.className = "counter";
counterDiv.appendChild(counter);
counter.innerHTML = "0";

const buttonPiu = document.createElement("button");
buttonPiu.className = "buttons";
counterDiv.appendChild(buttonPiu);
buttonPiu.innerHTML = "+";

const resetDiv = document.createElement("div");
resetDiv.className = "reset-container";
container.appendChild(resetDiv);

const buttonReset = document.createElement("button");
buttonReset.className = "button-reset";
resetDiv.appendChild(buttonReset);
buttonReset.innerHTML = "-";
