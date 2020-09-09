window.addEventListener("DOMContentLoaded", init);

("use strict");

const input = document.querySelector("input");

function init() {}

input.addEventListener("input", inputValue);

function inputValue() {
  console.log("Running inputValue", input.value);
  const hex = input.value;
  selectedColorData(hex);
}

function selectedColorData(hex) {
  console.log("Running selectedColorData:", hex);

  displayColor(hex);

  const hexString = hex.toUpperCase();
  console.log("HEX STRING:::::", hexString);

  const rgb = hexToRGB(hex);
  console.log("Return value from hexToRGB(hex):", rgb);

  const rgbString = makeRGBString(rgb);
  console.log("Return value from makeRGBString(rgb):", rgbString);

  const cssStr = rgbToCss(rgb);
  console.log(rgb);
  console.log("Return value from rgbToCss(rgb):", cssStr);

  const hsl = rgbToHsl(rgb);
  console.log("Return value from rgbToHsl(rgb):", hsl);

  const hslString = makeHSLString(hsl);
  console.log("Return value from makeHSLString(hsl):", hslString);

  showHEXValue(hexString);
  showRGBValue(rgbString);
  showHSLValue(hslString);
}

function hexToRGB(hex) {
  console.log("Running hexToRGB");
  console.log(hex);

  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  return { r, g, b };
}

function makeRGBString(rgb) {
  console.log("makeRGBString", rgb);
  rgbString = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
  return rgbString;
}

function rgbToHsl(rgb) {
  console.log("Running rgbToHsl", rgb);

  rgb.r /= 255;
  rgb.g /= 255;
  rgb.b /= 255;

  let h;
  let s;
  let l;

  const min = Math.min(rgb.r, rgb.g, rgb.b);
  const max = Math.max(rgb.r, rgb.g, rgb.b);

  if (max === min) {
    h = 0;
  } else if (max === rgb.r) {
    h = 60 * (0 + (rgb.g - rgb.b) / (max - min));
  } else if (max === rgb.g) {
    h = 60 * (2 + (rgb.b - rgb.r) / (max - min));
  } else if (max === rgb.b) {
    h = 60 * (4 + (rgb.r - rgb.g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }

  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  h = Number(h.toFixed(0));
  s = Number(s.toFixed(0));
  l = Number(l.toFixed(0));

  return { h, s, l };
}

function makeHSLString(hsl) {
  console.log("Running makeHSLString", hsl);
  const hslString = `HSL: ${hsl.h} ${hsl.s}% ${hsl.l}%`;
  return hslString;
}

function rgbToCss(rgb) {
  //console.log(rgb);
  console.log("Running rgbToCss");
  const str = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
  return str;
}

function showHEXValue(hexString) {
  console.log("Running showHEXValue");
  document.querySelector("#color3 .hex").textContent = hexString;
}

function showRGBValue(rgbString) {
  console.log("Running showRGBValue");
  document.querySelector("#color3 .rgb").textContent = rgbString;
}

function showHSLValue(hslString) {
  console.log("Running showHSLValue");
  document.querySelector("#color3 .hsl").textContent = hslString;
}

function displayColor(hex) {
  document.querySelector("#color_display3").style.backgroundColor = `${hex}`;
}
