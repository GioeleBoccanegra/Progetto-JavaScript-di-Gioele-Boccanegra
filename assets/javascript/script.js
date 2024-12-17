const container = document.querySelector("[data-container]");
container.classList.add("container");

const counterDiv = document.createElement("div");
counterDiv.className = "counter-container";
container.appendChild(counterDiv);

const buttonMeno = document.createElement("button");
buttonMeno.className = "buttons";
buttonMeno.setAttribute("data-action", "decrease");
buttonMeno.innerHTML = "-";
counterDiv.appendChild(buttonMeno);

const counter = document.createElement("p");
counter.className = "counter";
counter.innerHTML = "0";
counterDiv.appendChild(counter);

const buttonPiu = document.createElement("button");
buttonPiu.className = "buttons";
buttonPiu.setAttribute("data-action", "increase");
buttonPiu.innerHTML = "+";
counterDiv.appendChild(buttonPiu);

const resetDiv = document.createElement("div");
resetDiv.className = "reset-container";
container.appendChild(resetDiv);

const buttonReset = document.createElement("button");
buttonReset.className = "button-reset";
buttonReset.setAttribute("data-action", "reset");
buttonReset.innerHTML = "Reset";
resetDiv.appendChild(buttonReset);

function updateCounter(action) {
  const currentValue = parseInt(counter.textContent);
  switch (action) {
    case "increase":
      counter.textContent = currentValue + 1;
      break;
    case "decrease":
      counter.textContent = currentValue - 1;
      break;
    case "reset":
      counter.textContent = 0;
      break;
    default:
      break;
  }
}

container.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const action = event.target.getAttribute("data-action");
    updateCounter(action);
  }
});