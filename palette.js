window.addEventListener("DOMContentLoaded", init);

("use strict");

//Variables containing selectorer for user-inputs
const colorValue = document.querySelector("#colorInput");
const schemeValue = document.querySelectorAll("form>input");

//Variable for the chosen color harmony (analogous as default)
let harmony = "analogous";

function changeHarmony() {
  harmony = this.value;
}

function init() {
  console.log("Program running");
}

//Eventlisteners
colorValue.addEventListener("input", inputValue);
schemeValue.forEach((input) => {
  input.addEventListener("change", changeHarmony);
});

function inputValue() {
  //Function storing selected color-value (hex) from user and parsing it to function selectedColorData(hex)
  const hex = colorInput.value;
  selectedColorData(hex);
}

function selectedColorData(hex) {
  //Parsing the hex-code and returning the rgb-values
  const rgb = hexToRGB(hex);

  //Parsing the rgb-values and returning the HSL-values.
  const hsl = rgbToHsl(rgb);

  makeColorPalette(hsl);
}

function hexToRGB(hex) {
  //Converting the hex code to rgb and returning it
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  return { r, g, b };
}

function rgbToHsl(rgb) {
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

function showHexValues(hexArray) {
  //Displaying the hex-values (uppercase)
  document.querySelector(
    "#color1 .hex"
  ).textContent = `HEX: #${hexArray[0].r.toUpperCase()}${hexArray[0].g.toUpperCase()}${hexArray[0].b.toUpperCase()}`;
  document.querySelector(
    "#color2 .hex"
  ).textContent = `HEX: #${hexArray[1].r.toUpperCase()}${hexArray[1].g.toUpperCase()}${hexArray[1].b.toUpperCase()}`;
  document.querySelector(
    "#color3 .hex"
  ).textContent = `HEX: #${hexArray[2].r.toUpperCase()}${hexArray[2].g.toUpperCase()}${hexArray[2].b.toUpperCase()}`;
  document.querySelector(
    "#color4 .hex"
  ).textContent = `HEX: #${hexArray[3].r.toUpperCase()}${hexArray[3].g.toUpperCase()}${hexArray[3].b.toUpperCase()}`;
  document.querySelector(
    "#color5 .hex"
  ).textContent = `HEX: #${hexArray[4].r.toUpperCase()}${hexArray[4].g.toUpperCase()}${hexArray[4].b.toUpperCase()}`;
}

function showRgbValues(rgbArray) {
  //Displaying rgb values
  document.querySelector(
    "#color1 .rgb"
  ).textContent = `RGB: ${rgbArray[0].r}, ${rgbArray[0].g}, ${rgbArray[0].b}`;
  document.querySelector(
    "#color2 .rgb"
  ).textContent = `RGB: ${rgbArray[1].r}, ${rgbArray[1].g}, ${rgbArray[1].b}`;
  document.querySelector(
    "#color3 .rgb"
  ).textContent = `RGB: ${rgbArray[2].r}, ${rgbArray[2].g}, ${rgbArray[2].b}`;
  document.querySelector(
    "#color4 .rgb"
  ).textContent = `RGB: ${rgbArray[3].r}, ${rgbArray[3].g}, ${rgbArray[3].b}`;
  document.querySelector(
    "#color5 .rgb"
  ).textContent = `RGB: ${rgbArray[4].r}, ${rgbArray[4].g}, ${rgbArray[4].b}`;
}

function showHslValues(hslArray) {
  //Displaying the HSL Values from the hslArray.
  //Don't know why, but I had to use Math.round and multiply the s and l values by 100/
  //even though it should happen in rgbToHsl?

  document.querySelector("#color1 .hsl").textContent = `HSL: ${
    hslArray[0].h
  } ${Math.round(hslArray[0].s * 100)}% ${Math.round(hslArray[0].l * 100)}%`;
  document.querySelector("#color2 .hsl").textContent = `HSL: ${
    hslArray[1].h
  } ${Math.round(hslArray[1].s * 100)}% ${Math.round(hslArray[1].l * 100)}%`;
  document.querySelector("#color3 .hsl").textContent = `HSL: ${
    hslArray[2].h
  } ${Math.round(hslArray[2].s * 100)}% ${Math.round(hslArray[2].l * 100)}%`;
  document.querySelector("#color4 .hsl").textContent = `HSL: ${
    hslArray[3].h
  } ${Math.round(hslArray[3].s * 100)}% ${Math.round(hslArray[3].l * 100)}%`;
  document.querySelector("#color5 .hsl").textContent = `HSL: ${
    hslArray[4].h
  } ${Math.round(hslArray[4].s * 100)}% ${Math.round(hslArray[4].l * 100)}%`;
}

function displayColors(hexArray) {
  //Styling the color divs using the hex-array
  document.querySelector(
    "#color_display1"
  ).style.backgroundColor = `#${hexArray[0].r}${hexArray[0].g}${hexArray[0].b}`;
  document.querySelector(
    "#color_display2"
  ).style.backgroundColor = `#${hexArray[1].r}${hexArray[1].g}${hexArray[1].b}`;
  document.querySelector(
    "#color_display3"
  ).style.backgroundColor = `#${hexArray[2].r}${hexArray[2].g}${hexArray[2].b}`;
  document.querySelector(
    "#color_display4"
  ).style.backgroundColor = `#${hexArray[3].r}${hexArray[3].g}${hexArray[3].b}`;
  document.querySelector(
    "#color_display5"
  ).style.backgroundColor = `#${hexArray[4].r}${hexArray[4].g}${hexArray[4].b}`;
}

function makeColorPalette(hsl) {
  //Store the selected color value as hsl
  const hslValue = hsl;

  //Making the color-scheme from the input color (returning an Array of the full color-scheme (HSL))
  let hslArray;
  //Checking which harmony to make
  if (harmony == "analogous") {
    hslArray = analogous(hslValue);
  } else if (harmony == "monochromatic") {
    hslArray = monochromatic(hslValue);
  } else if (harmony == "triad") {
    hslArray = triad(hslValue);
  } else if (harmony == "complementary") {
    hslArray = complementary(hslValue);
  } else if (harmony == "compound") {
    hslArray = compound(hslValue);
  } else if (harmony == "shades") {
    hslArray = shades(hslValue);
  }
  //// -- BEFORE IF statements ////
  //const hslArray = monochromatic(hslValue);
  //const hslArray = triad(hslValue);
  //const hslArray = complementary(hslValue);
  //const hslArray = compound(hslValue);
  //const hslArray = shades(hslValue);

  //Converting the HSL color scheme into an array of the color scheme in RGB values
  const rgbArray = [];
  hslArray.forEach((obj) => {
    const rgbConvert = hslToRgb(obj);
    rgbArray.push(rgbConvert);
  });

  const hexArray = [];
  rgbArray.forEach((obj) => {
    const hexConvert = rgbToHex(obj);
    hexArray.push(hexConvert);
  });

  //Calling the display functions and parsing the needed data
  displayColors(hexArray);

  showHexValues(hexArray);

  showRgbValues(rgbArray);

  showHslValues(hslArray);
}

function analogous(hsl) {
  //Creating variables for the values h,s,l from the object
  let h = hsl.h;
  let s = hsl.s;
  let l = hsl.l;
  //Creating an Array with 5 objects. --> Array index[0,1,3,4] will then be set accordring to the harmoni
  const hslColors = [
    { h, s, l },
    { h, s, l },
    { h, s, l },
    { h, s, l },
    { h, s, l },
  ];

  //Const that defines the number of degrees each color is shifted.
  const numberOfDegreesShiftet = 25;

  //Changes to the harmoni
  hslColors[0].h = h - 2 * numberOfDegreesShiftet;
  hslColors[1].h = h - numberOfDegreesShiftet;
  hslColors[3].h = h + numberOfDegreesShiftet;
  hslColors[4].h = h + 2 * numberOfDegreesShiftet;

  //If statements that makes sure the value of Hue does not exceed 360 or isn't a negative number.
  if (hslColors[0].h < 0) {
    hslColors[0].h = h - 2 * numberOfDegreesShiftet + 360;
  }
  if (hslColors[1].h < 0) {
    hslColors[1].h = h - numberOfDegreesShiftet + 360;
  }
  if (hslColors[3].h > 360) {
    hslColors[3].h = h + numberOfDegreesShiftet - 360;
  }
  if (hslColors[4].h > 360) {
    hslColors[4].h = h + 2 * numberOfDegreesShiftet - 360;
  }

  return hslColors;
}

function monochromatic(hsl) {
  let h = hsl.h;
  let s = hsl.s;
  let l = hsl.l;

  const hslColors = [
    { h, s, l },
    { h, s, l },
    { h, s, l },
    { h, s, l },
    { h, s, l },
  ];

  //Making changes to the Lightness
  const percentageChange = 10;

  hslColors[0].l = l - 2 * percentageChange;
  hslColors[1].l = l - percentageChange;
  hslColors[3].l = l + percentageChange;
  hslColors[4].l = l + 2 * percentageChange;

  if (hslColors[0].l < 0) {
    hslColors[0].l = l - 2 * percentageChange + 100;
  }
  if (hslColors[1].l < 0) {
    hslColors[1].l = l - percentageChange + 100;
  }
  if (hslColors[3].l > 100) {
    hslColors[3].l = l + percentageChange + 100;
  }
  if (hslColors[4].l > 100) {
    hslColors[4].l = l + 2 * percentageChange + 100;
  }

  return hslColors;
}

function triad(hsl) {
  let h = hsl.h;
  let s = hsl.s;
  let l = hsl.l;
  const hslColors = [
    { h, s, l },
    { h, s, l },
    { h, s, l },
    { h, s, l },
    { h, s, l },
  ];

  const hueShiftFromBase = 120;
  const lightnessChange = 20;

  hslColors[0].h = h - hueShiftFromBase;
  hslColors[0].l = l - lightnessChange;
  hslColors[1].h = h - hueShiftFromBase;
  hslColors[3].h = h + hueShiftFromBase;
  hslColors[4].h = h + hueShiftFromBase;
  hslColors[4].l = l + lightnessChange;

  if (hslColors[0].h < 0) {
    hslColors[0].h = h - hueShiftFromBase + 360;
  }
  if (hslColors[0].l < 0) {
    hslColors[0].l = l - lightnessChange + 100;
  }
  if (hslColors[1].h < 0) {
    hslColors[1].h = h - hueShiftFromBase + 360;
  }
  if (hslColors[3].h > 360) {
    hslColors[3].h = h + hueShiftFromBase - 360;
  }
  if (hslColors[4].h > 360) {
    hslColors[4].h = h + hueShiftFromBase - 360;
  }
  if (hslColors[4].l > 100) {
    hslColors[4].l = l + lightnessChange - 100;
  }
  return hslColors;
}

function complementary(hsl) {
  let h = hsl.h;
  let s = hsl.s;
  let l = hsl.l;
  const hslColors = [
    { h, s, l },
    { h, s, l },
    { h, s, l },
    { h, s, l },
    { h, s, l },
  ];

  const complementaryShift = 180;
  const lightnessChange = 20;

  hslColors[0].h = h + complementaryShift;
  hslColors[0].l = l - lightnessChange;
  hslColors[1].h = h + complementaryShift;
  hslColors[3].h = h + complementaryShift;
  hslColors[3].l = l + 2 * lightnessChange;
  hslColors[4].h = h + complementaryShift;
  hslColors[4].l = l + 3 * lightnessChange;

  if (hslColors[0].h > 360) {
    hslColors[0].h = h + complementaryShift + 360;
  }
  if (hslColors[1].h > 360) {
    hslColors[1].h = h + complementaryShift + 360;
  }
  if (hslColors[3].h > 360) {
    hslColors[3].h = h + complementaryShift + 360;
  }
  if (hslColors[4].h > 360) {
    hslColors[4].h = h + complementaryShift + 360;
  }
  if (hslColors[0].l < 0) {
    hslColors[0].l = l - lightnessChange + 100;
  }
  if (hslColors[3].l > 100) {
    hslColors[3].l = l + 2 * lightnessChange - 100;
  }
  if (hslColors[4].l > 100) {
    hslColors[4].l = l + 3 * lightnessChange - 100;
  }

  return hslColors;
}

function compound(hsl) {
  let h = hsl.h;
  let s = hsl.s;
  let l = hsl.l;
  const hslColors = [
    { h, s, l },
    { h, s, l },
    { h, s, l },
    { h, s, l },
    { h, s, l },
  ];

  const complementaryShift = 180;
  const analogousShift = 20;

  hslColors[0].h = h + complementaryShift - analogousShift;
  hslColors[1].h = h + complementaryShift;
  hslColors[3].h = h + complementaryShift + analogousShift;
  hslColors[4].h = h + complementaryShift + 2 * analogousShift;

  if (hslColors[0].h < 0) {
    hslColors[0].h = h + complementaryShift - analogousShift + 360;
  }
  if (hslColors[1].h > 360) {
    hslColors[1].h = h + complementaryShift - 360;
  }
  if (hslColors[3].h < 0) {
    hslColors[3].h = h + complementaryShift + analogousShift - 360;
  }
  if (hslColors[4].h < 0) {
    hslColors[4].h = h + complementaryShift + analogousShift - 360;
  }

  return hslColors;
}

function shades(hsl) {
  let h = hsl.h;
  let s = hsl.s;
  let l = hsl.l;
  const hslColors = [
    { h, s, l },
    { h, s, l },
    { h, s, l },
    { h, s, l },
    { h, s, l },
  ];

  const lightnessChange = 15;
  hslColors[0].l = l + lightnessChange;
  hslColors[1].l = l + 2 * lightnessChange;
  hslColors[3].l = l + 3 * lightnessChange;
  hslColors[4].l = l + 4 * lightnessChange;

  if (hslColors[0].l > 100) {
    hslColors[0].l = l + lightnessChange - 100;
  }
  if (hslColors[1].l > 100) {
    hslColors[1].l = l + 2 * lightnessChange - 100;
  }
  if (hslColors[3].l > 100) {
    hslColors[3].l = l + 3 * lightnessChange - 100;
  }
  if (hslColors[4].l > 100) {
    hslColors[4].l = l + 4 * lightnessChange - 100;
  }

  return hslColors;
}

function hslToRgb(obj) {
  obj.h = obj.h;
  obj.s = obj.s / 100;
  obj.l = obj.l / 100;

  let c = (1 - Math.abs(2 * obj.l - 1)) * obj.s,
    x = c * (1 - Math.abs(((obj.h / 60) % 2) - 1)),
    m = obj.l - c / 2,
    r = 0,
    g = 0,
    b = 0;
  if (0 <= obj.h && obj.h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= obj.h && obj.h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= obj.h && obj.h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= obj.h && obj.h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= obj.h && obj.h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= obj.h && obj.h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return { r, g, b };
}

function rgbToHex(rgb) {
  //Converting the rgb object to a hex-string
  let r = rgb.r.toString(16);
  let g = rgb.g.toString(16);
  let b = rgb.b.toString(16);

  if (r.length < 2) {
    r = rgb.r.toString(16).padStart(2, "0");
  }
  if (g.length < 2) {
    g = rgb.g.toString(16).padStart(2, "0");
  }
  if (b.length < 2) {
    b = rgb.b.toString(16).padStart(2, "0");
  }

  return { r, g, b };
}
