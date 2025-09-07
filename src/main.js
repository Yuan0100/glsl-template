import vert from "./shaders/quad.vert";
import frag from "./shaders/main.frag";
import { createGL, renderLoop } from "./renderer.js";

const canvas = document.getElementById("c");
const state = { start: performance.now(), mouse: [0,0], scale: 1.0, speed: 1.0 };

const h = createGL(canvas, vert, frag);

canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  state.mouse = [e.clientX - rect.left, rect.height - (e.clientY - rect.top)];
});

renderLoop(h, state);
