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

  //   displayColor(hex);

  const hexString = hex.toUpperCase();
  //console.log("HEX STRING:::::", hexString);

  const rgb = hexToRGB(hex);
  //console.log("Return value from hexToRGB(hex):", rgb);

  const rgbString = makeRGBString(rgb);
  //console.log("Return value from makeRGBString(rgb):", rgbString);

  const cssStr = rgbToCss(rgb);
  //console.log(rgb);
  //console.log("Return value from rgbToCss(rgb):", cssStr);

  const hsl = rgbToHsl(rgb);
  //console.log("Return value from rgbToHsl(rgb):", hsl);
  console.log("RETURN objectm hsl", hsl);

  const hslString = makeHSLString(hsl);
  console.log("RETURN VALUE:::::", hslString);
  //console.log("Return value from makeHSLString(hsl):", hslString);

  showHEXValue(hexString);
  showRGBValue(rgbString);
  showHSLValue(hslString);

  displayColorFromHsl(hslString);
}

function hexToRGB(hex) {
  console.log("Running hexToRGB");
  console.log(hex);

  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  //   const rgbColors = [
  //     { r, g, b },
  //     { r, g, b },
  //     { r, g, b },
  //     { r, g, b },
  //     { r, g, b },
  //   ];
  //   console.log(rgbColors);

  return { r, g, b };
}

function makeRGBString(rgb) {
  //console.log("makeRGBString", rgb);
  rgbString = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
  return rgbString;
}

function rgbToHsl(rgb) {
  //console.log("Running rgbToHsl", rgb);

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

  const hslColors = [
    { h, s, l },
    { h, s, l },
    { h, s, l },
    { h, s, l },
    { h, s, l },
  ];

  if (h >= 50) {
    console.log(h, "h");
    hslColors[0].h = h - 50;
    hslColors[1].h = h - 25;
    hslColors[3].h = h + 25;
    hslColors[4].h = h + 50;
    console.log(hslColors, "if 10");
  } else if (h >= 6) {
    hslColors[0].h = h - 6;
    hslColors[1].h = h - 3;
    hslColors[3].h = h + 3;
    hslColors[4].h = h + 6;
    console.log(hslColors, "if 6");
  } else {
    hslColors[0].h = h + 5;
    hslColors[1].h = h + 10;
    hslColors[3].h = h + 15;
    hslColors[4].h = h + 20;
    console.log(hslColors, "else");
  }
  //console.log(hslColors);
  //return { h, s, l };
  return hslColors;
}

function makeHSLString(hsl) {
  //console.log("Running makeHSLString", hsl);
  //console.log(hsl);
  const hslStringArray = [];
  hsl.forEach((color) => {
    //console.log(color);
    const hslString = `hsl(${color.h}, ${color.s}%, ${color.l}%)`;
    hslStringArray.push(hslString);

    //return hslString;
  });
  return hslStringArray;
  //   const hslString = `HSL: ${hsl.h} ${hsl.s}% ${hsl.l}%`;
  //   return hslString;
}

function rgbToCss(rgb) {
  //console.log(rgb);
  //console.log("Running rgbToCss");
  const str = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
  return str;
}

function showHEXValue(hexString) {
  //console.log("Running showHEXValue");
  document.querySelector("#color3 .hex").textContent = hexString;
}

function showRGBValue(rgbString) {
  //console.log("Running showRGBValue");
  document.querySelector("#color3 .rgb").textContent = rgbString;
}

function showHSLValue(hslString) {
  console.log("Running showHSLValue", hslString);
  document.querySelector("#color1 .hsl").textContent = hslString[0];
  document.querySelector("#color2 .hsl").textContent = hslString[1];
  document.querySelector("#color3 .hsl").textContent = hslString[2];
  document.querySelector("#color4 .hsl").textContent = hslString[3];
  document.querySelector("#color5 .hsl").textContent = hslString[4];
}

// function displayColor(hex) {
//   //document.querySelector("#color_display3").style.backgroundColor = `${hex}`;
// }

function displayColorFromHsl(hslString) {
  document.querySelector(
    "#color_display1"
  ).style.backgroundColor = `${hslString[0]}`;
  document.querySelector(
    "#color_display2"
  ).style.backgroundColor = `${hslString[1]}`;
  document.querySelector(
    "#color_display3"
  ).style.backgroundColor = `${hslString[2]}`;
  document.querySelector(
    "#color_display4"
  ).style.backgroundColor = `${hslString[3]}`;
  document.querySelector(
    "#color_display5"
  ).style.backgroundColor = `${hslString[4]}`;
}

function makeColorPalette(hsl) {
  const hslColors = [
    { h, s, l },
    { h, s, l },
    { h, s, l },
    { h, s, l },
    { h, s, l },
  ];

  //ANALOGOS:
  if (h >= 50) {
    console.log(h, "h");
    hslColors[0].h = h - 50;
    hslColors[1].h = h - 25;
    hslColors[3].h = h + 25;
    hslColors[4].h = h + 50;
    console.log(hslColors, "if 10");
  } else if (h >= 6) {
    hslColors[0].h = h - 6;
    hslColors[1].h = h - 3;
    hslColors[3].h = h + 3;
    hslColors[4].h = h + 6;
    console.log(hslColors, "if 6");
  } else {
    hslColors[0].h = h + 5;
    hslColors[1].h = h + 10;
    hslColors[3].h = h + 15;
    hslColors[4].h = h + 20;
    console.log(hslColors, "else");
  }

  return hslColors;
}
