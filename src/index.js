import React from "react";
import ReactDOM from "react-dom";
// import { addPropertyControls } from "framer";

// import VercelButton from "https://framer.com/m/VercelButton-YAlC.js";
import clamp from "https://unpkg.com/lodash-es@4.17.21/clamp.js";
import Hero from "https://framerusercontent.com/modules/oAIH4mJYirnv3yiamFCy/Ngp0r25dJiSrUBitTI8U/YWpZD78b2.js";
// import "https://framerusercontent.com/modules/Ls5TtvcjYKLmXc4cuzTO/mYmOr0ZdXyip9iACGqkb/App.js"
// import "https://framerusercontent.com/modules/KwOtA6b0ogSzRFfWSHTd/Mr3NHJVI1X1PD0yOPe5r/NoDeps.js"
// import "https://framerusercontent.com/modules/XQdhG0jHrUF42WGdfalY/meyI4kCgf562tScKJvOQ/WithDep.js";

import { foo } from "./a.js";

console.log({ clamp, foo, Hero });

function App() {
  return React.createElement(
    "div",
    {
      style: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    React.createElement(Hero)
  );
}

ReactDOM.render(React.createElement(App), document.getElementById("app"));
