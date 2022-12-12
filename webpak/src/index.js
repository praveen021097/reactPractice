import {sum ,mul} from "./calc";
import "./index.css"
console.log(sum(5,5))
console.log(mul(4,5))

let root = document.getElementById("root");

let h1 = document.createElement("h1");
h1.innerText="hello world";
h1.classList.add("redText");
root.appendChild(h1);