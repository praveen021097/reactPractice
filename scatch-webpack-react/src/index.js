

import {add,mult} from "./calc"
import "./index.css";
import React from "react";
import reactDom from "react-dom";
console.log(add(4,7))
console.log(mult(6,0))

// const h1 = document.createElement("h1");
// h1.innerText="hello webpack";

// h1.classList.add("redtext");

reactDom.render(<h1 className="redtext">hello Babel</h1>,document.querySelector("body"))
