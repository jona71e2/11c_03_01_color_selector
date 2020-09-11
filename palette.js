window.addEventListener("DOMContentLoaded", init);

("use strict");

//Variables containing selectorer for user-inputs
const colorValue = document.querySelector("#colorInput");
const schemeValue = document.querySelectorAll("form>input");

function init() {
  console.log("Program running");
}

//Eventlisteners on user-inputs
colorValue.addEventListener("input", inputValue);
schemeValue.forEach((input) => {
  //input.addEventListener("change", makeColorPalette);
  //   input.addEventListener("change", selectedColorData);
});

function inputValue() {
  //Function storing selected color-value (hex) from user and parsing it to function selectedColorData(hex)
  console.log("Running inputValue", colorInput.value);
  const hex = colorInput.value;
  selectedColorData(hex);
}

function selectedColorData(hex) {
  console.log("Running selectedColorData:", hex);
  //   displayColor(hex);
  const schemeTest = this.value;
  console.log("::: SCHEMEtest", schemeTest);

  //Parsing the hex-code and returning the rgb-values
  const rgb = hexToRGB(hex);
  console.log("Return value from hexToRGB(hex):", rgb);

  //Parsing the rgb-values and returning the HSL-values.
  const hsl = rgbToHsl(rgb);
  console.log("RETURN object hsl", hsl);

  makeColorPalette(hsl);
}

function hexToRGB(hex) {
  //   console.log("Running hexToRGB");
  //   console.log(hex);

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
  //console.log("Running showHEXValue");
  document.querySelector(
    "#color1 .hex"
  ).textContent = `HEX: #${hexArray[0].h.toUpperCase()}${hexArray[0].e.toUpperCase()}${hexArray[0].x.toUpperCase()}`;
  document.querySelector(
    "#color2 .hex"
  ).textContent = `HEX: #${hexArray[1].h.toUpperCase()}${hexArray[1].e.toUpperCase()}${hexArray[1].x.toUpperCase()}`;
  document.querySelector(
    "#color3 .hex"
  ).textContent = `HEX: #${hexArray[2].h.toUpperCase()}${hexArray[2].e.toUpperCase()}${hexArray[2].x.toUpperCase()}`;
  document.querySelector(
    "#color4 .hex"
  ).textContent = `HEX: #${hexArray[3].h.toUpperCase()}${hexArray[3].e.toUpperCase()}${hexArray[3].x.toUpperCase()}`;
  document.querySelector(
    "#color5 .hex"
  ).textContent = `HEX: #${hexArray[4].h.toUpperCase()}${hexArray[4].e.toUpperCase()}${hexArray[4].x.toUpperCase()}`;
}

function showRgbValues(rgbArray) {
  //console.log("Running showRGBValue");

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
  console.log("Running showHSLValue", hslArray);

  document.querySelector("#color1 .hsl").textContent = `HSL: ${hslArray[0].h} ${
    hslArray[0].s * 100
  }% ${hslArray[0].l * 100}%`;
  document.querySelector("#color2 .hsl").textContent = `HSL: ${hslArray[1].h} ${
    hslArray[1].s * 100
  }% ${hslArray[1].l * 100}%`;
  document.querySelector("#color3 .hsl").textContent = `HSL: ${hslArray[2].h} ${
    hslArray[2].s * 100
  }% ${hslArray[2].l * 100}%`;
  document.querySelector("#color4 .hsl").textContent = `HSL: ${hslArray[3].h} ${
    hslArray[3].s * 100
  }% ${hslArray[3].l * 100}%`;
  document.querySelector("#color5 .hsl").textContent = `HSL: ${hslArray[4].h} ${
    hslArray[4].s * 100
  }% ${hslArray[4].l * 100}%`;
}

function displayColors(hexArray) {
  console.log("RUNNING: displayColors", hexArray);
  document.querySelector(
    "#color_display1"
  ).style.backgroundColor = `#${hexArray[0].h}${hexArray[0].e}${hexArray[0].x}`;
  document.querySelector(
    "#color_display2"
  ).style.backgroundColor = `#${hexArray[1].h}${hexArray[1].e}${hexArray[1].x}`;
  document.querySelector(
    "#color_display3"
  ).style.backgroundColor = `#${hexArray[2].h}${hexArray[2].e}${hexArray[2].x}`;
  document.querySelector(
    "#color_display4"
  ).style.backgroundColor = `#${hexArray[3].h}${hexArray[3].e}${hexArray[3].x}`;
  document.querySelector(
    "#color_display5"
  ).style.backgroundColor = `#${hexArray[4].h}${hexArray[4].e}${hexArray[4].x}`;
}

function makeColorPalette(hsl) {
  console.log("Running makeColorPalette:");
  //Store the selected color value as hsl
  const hslValue = hsl;

  //Making the color-scheme from the input color (returning an Array of the full color-scheme (HSL))
  //   const hslArray = analogous(hslValue);
  //const hslArray = monochromatic(hslValue);
  const hslArray = triad(hslValue);

  //Converting the HSL color scheme into an array og the color scheme in RGB values
  const rgbArray = [];
  hslArray.forEach((obj) => {
    const rgbConvert = hslToRgb(obj);
    rgbArray.push(rgbConvert);
  });
  console.log("RGB ARRAY", rgbArray);

  const hexArray = [];
  rgbArray.forEach((obj) => {
    const hexConvert = rgbToHex(obj);
    hexArray.push(hexConvert);
  });
  console.log("HEX ARRAY", hexArray);

  //Calling the display functions parsing the needed data
  displayColors(hexArray);

  showHexValues(hexArray);

  showRgbValues(rgbArray);

  showHslValues(hslArray);
}

function analogous(hsl) {
  console.log("Running analogous:", hsl);
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
  console.log("hslColorsARRAY", hslColors);

  if (hsl.h >= 50) {
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
  console.log("HVAddd ER der sket?", hslColors);
  //return { h, s, l };
  return hslColors;
}

function monochromatic(hsl) {
  console.log("Running monochromatic:");
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

  hslColors[0].l = l - 20;
  hslColors[1].l = l - 10;
  hslColors[3].l = l + 10;
  hslColors[4].l = l + 20;

  return hslColors;
}

function triad(hsl) {
  console.log("Running triad:");
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

  hslColors[0].h = h - 120;
  hslColors[0].l = l - 10;
  hslColors[1].h = h - 120;
  hslColors[3].h = h + 120;
  hslColors[4].h = h + 120;
  hslColors[4].l = l + 10;

  return hslColors;
}

function complementary(hsl) {
  console.log("Running complementary:");
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

  hslColors[0].h = h - 120;
  hslColors[0].l = l - 10;
  hslColors[1].h = h - 120;
  hslColors[3].h = h + 120;
  hslColors[4].h = h + 120;
  hslColors[4].l = l + 10;

  return hslColors;
}

function compound(hsl) {
  console.log("Running compound:");
  const hslColors = [
    { h, s, l },
    { h, s, l },
    { h, s, l },
    { h, s, l },
    { h, s, l },
  ];
}

function shades(hsl) {
  console.log("Running shades:");
  const hslColors = [
    { h, s, l },
    { h, s, l },
    { h, s, l },
    { h, s, l },
    { h, s, l },
  ];
}

function hslToRgb(obj) {
  console.log("HVILKET OBJECT MODTAGES HER?", obj);
  //   schemeCreaterHsl.forEach(obj =>{  } )
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
  let h = rgb.r.toString(16);
  console.log("r:", h);
  let e = rgb.g.toString(16);
  console.log("g:", e);
  let x = rgb.b.toString(16);
  console.log("b:", x);
  if (h.length < 2) {
    h = rgb.r.toString(16).padStart(2, "0");
    console.log("IF r:", h);
  }
  if (e.length < 2) {
    e = rgb.g.toString(16).padStart(2, "0");
    console.log("IF g:", e);
  }
  if (x.length < 2) {
    x = rgb.b.toString(16).padStart(2, "0");
    console.log("IF b:", x);
  }

  return { h, e, x };
}
