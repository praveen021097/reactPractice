import {sum ,mul} from "./calc";
import "./index.css"
import React from "react";
import reactDom from "react-dom";
console.log(sum(5,5))
console.log(mul(4,5))



const h1=React.createElement("h1",{"className":"blacktext"},"hello Pk");

reactDom.render(h1,document.getElementById("root"));

// let h1 = document.createElement("h1");
// h1.innerText="hello world";
// h1.classList.add("redText");
// root.appendChild(h1);