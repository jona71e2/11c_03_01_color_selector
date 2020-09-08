window.addEventListener("DOMContentLoaded", init);

("use strict");

const input = document.querySelector("input");

function init() {}

input.addEventListener("input", inputValue);

function inputValue() {
  console.log("Running inputValue", input.value);
  let selectedColor = input.value;
  hexToRGB(selectedColor);

  document.querySelector("#color3").style.backgroundColor = `${selectedColor}`;
  document.querySelector(
    "#color3 .hex"
  ).textContent = `HEX: ${selectedColor.toString()}`;
}

function hexToRGB(selectedColor) {
  console.log("Running hexToRGB");
  console.log(selectedColor);
  const red = selectedColor.substring(1, 3);
  console.log(red);
  const green = selectedColor.substring(3, 5);
  console.log(green);
  const blue = selectedColor.substring(5);
  console.log(blue);

  const r = parseInt(red, 16);
  const g = parseInt(green, 16);
  const b = parseInt(blue, 16);

  console.log("RGB", r, g, b);

  let rgbString = `Red:${r.toString()}, Green:${g.toString()}, Blue:${b.toString()}`;
  console.log(rgbString);
  //document.querySelector(".rgb").textContent = `${rgbString}`;
  document.querySelector(
    "#color3 .rgb"
  ).textContent = `RGB: ${r.toString()}, ${g.toString()}, ${b.toString()}`;

  rgbToHsl(r, g, b);
}

function rgbToHsl(r, g, b) {
  console.log("Running rgbToHsl", r, g, b);

  r /= 255;
  g /= 255;
  b /= 255;

  let h;
  let s;
  let l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  console.log("MIN, MAX", min, max);

  if (max === min) {
    h = 0;
    console.log("h: max = min", h);
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
    console.log("h: max = r", h);
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
    console.log("h: max = g", h);
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
    console.log("h: max = b", h);
  }

  if (h < 0) {
    h = h + 360;
    console.log("h < 0", h);
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  //console.log("s:", s);

  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  h = h.toFixed(0);
  s = s.toFixed(0);
  l = l.toFixed(0);

  // s = Math.floor(s);
  // l = Math.floor(l);

  console.log("s:", s);
  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing

  let hslString = `HSL: ${h} ${s}% ${l}%`;
  console.log(hslString);

  document.querySelector("#color3 .hsl").textContent = hslString;
}
