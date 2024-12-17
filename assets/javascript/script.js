const container = document.querySelector("[data-container]");
container.classList.add("container");

const counterDiv = document.createElement("div");
counterDiv.className = "counter-container";
container.appendChild(counterDiv);

const buttonMeno = document.createElement("button");
buttonMeno.className = "buttons";
buttonMeno.innerHTML = "-";
counterDiv.appendChild(buttonMeno);

const counter = document.createElement("p");
counter.className = "counter";
counter.innerHTML = "0";
counterDiv.appendChild(counter);

const buttonPiu = document.createElement("button");
buttonPiu.className = "buttons";
buttonPiu.innerHTML = "+";
counterDiv.appendChild(buttonPiu);

const resetDiv = document.createElement("div");
resetDiv.className = "reset-container";
container.appendChild(resetDiv);

const buttonReset = document.createElement("button");
buttonReset.className = "button-reset";
buttonReset.innerHTML = "Reset";
resetDiv.appendChild(buttonReset);

function aumenta() {
  counter.textContent = parseInt(counter.textContent) + 1;
}

function diminuisci() {
  counter.textContent = parseInt(counter.textContent) - 1;
}

function resetta() {
  counter.textContent = 0;
}

buttonPiu.addEventListener("click", aumenta);
buttonMeno.addEventListener("click", diminuisci);
buttonReset.addEventListener("click", resetta);
