// Vanilla JS (imperative)

let rootEl = document.getElementById("root");

let newEl = document.createElement("h1");

newEl.textContent = "testing Vanilla js";
newEl.className = "header";

rootEl.appendChild(newEl);