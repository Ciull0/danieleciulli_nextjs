import { useState } from "react";
export default function Palette() {
  const [palette, updatePalette] = useState(generatePaletetteFromColor());
  const [color, updateColor] = useState("#ffc72c");
  const [type, updateType] = useState("hue");
  const [numberOfColors, updateNumberOfColors] = useState(5);
  function generatePaletetteFromColor(
    hexColor = "#ffc72c",
    numberOfColors = 5,
    type = "hue"
  ) {
    let hslColor = hexToHSL(hexColor);
    let palette = [];
    palette.push(hslColor);
    for (let i = 1; i < numberOfColors; i++) {
      palette.push({
        hue:
          type == "hue"
            ? (hslColor.hue + (360 / numberOfColors) * i) % 360
            : hslColor.hue,
        saturation:
          type == "saturation"
            ? (hslColor.saturation - (100 / numberOfColors) * i) % 100
            : hslColor.saturation*1.5,
        lightness:
          type == "lightness"
            ? (hslColor.lightness + (100 / numberOfColors) * i) % 100
            : hslColor.lightness*1.5,
        alpha: 1,
      });
    }

    switch (type) {
      case 'hue':
        return palette;
      case 'saturation':
        return palette.sort((a, b) => -a.saturation + b.saturation);
      case 'lightness':
        return palette.sort((a, b) => a.lightness - b.lightness);
    
      default:
        break;
    }
    setPaletteInCss(palette);

    return palette;
  }

  function setPaletteInCss(palette) {
    let root = document.querySelector(":root").style;
    console.log(root, palette);

    root.setProperty("--primary", "hsl(" + palette[0].hue + "," + palette[0].saturation + "%," + palette[0].lightness + "%)");
    root.setProperty("--secondary", "hsl(" + palette[parseInt(palette.length/2)].hue + "," + palette[parseInt(palette.length/2)].saturation + "%," + palette[parseInt(palette.length/2)].lightness + "%)");
    root.setProperty("--terziary", "hsl(" + palette[palette.length-1].hue + "," + palette[palette.length-1].saturation + "%," + palette[palette.length-1].lightness + "%)");
  }

  function hexToHSL(H) {
    // Convert hex to RGB first
    let r = 0,
      g = 0,
      b = 0;
    if (H.length == 4) {
      r = "0x" + H[1] + H[1];
      g = "0x" + H[2] + H[2];
      b = "0x" + H[3] + H[3];
    } else if (H.length == 7) {
      r = "0x" + H[1] + H[2];
      g = "0x" + H[3] + H[4];
      b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

    if (delta == 0) h = 0;
    else if (cmax == r) h = ((g - b) / delta) % 6;
    else if (cmax == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0) h += 360;

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return { hue: h, saturation: s, lightness: l };
  }

  return (
    <div className="palette">
      <div className="navbar__form">
        <input
          onChange={(e) => {
            updateColor(e.target.value);
            updatePalette(generatePaletetteFromColor(e.target.value, numberOfColors, type));
          }}
          value={color}
          type="color"
        />

        <div className="palette__type">
          <label htmlFor="palette[type][hue]">Hue</label>
          <input
            onChange={(e) => {
              updateType(e.target.value);
              updatePalette(
                generatePaletetteFromColor(color, numberOfColors, e.target.value)
              );
            }}
            type="radio"
            name="palette[type]"
            id="palette[type][hue]"
            value="hue"
            checked={type == "hue"}
          />
        </div>
        <div className="palette__number">
            <input onChange={(e)=>{
                updateNumberOfColors(e.target.value);
                updatePalette(generatePaletetteFromColor(color, e.target.value, type));
            }} type="range" min="3" max="10" />
        </div>
        <div className="palette__type">
          <label htmlFor="palette[type][saturation]">Saturation</label>
          <input
            onChange={(e) => {
              updateType(e.target.value);
              updatePalette(
                generatePaletetteFromColor(color, numberOfColors, e.target.value)
              );
            }}
            type="radio"
            name="palette[type]"
            id="palette[type][saturation]"
            value="saturation"
            checked={type == "saturation"}
          />
        </div>
        <div className="palette__type">
          <label htmlFor="palette[type][lightness]">Lightness</label>
          <input
            onChange={(e) => {
              updateType(e.target.value);
              updatePalette(
                generatePaletetteFromColor(color, numberOfColors, e.target.value)
              );
            }}
            type="radio"
            name="palette[type]"
            id="palette[type][lightness]"
            value="lightness"
            checked={type == "lightness"}
          />
        </div>
      </div>
      <div className="container">
        {palette.map((color, index) => {
          return (
            <div
              key={index}
              style={{
                width: "10rem",
                marginLeft: "auto",
                height: "10rem",
                background:
                  "hsl(" +
                  color.hue +
                  "," +
                  color.saturation +
                  "%," +
                  color.lightness +
                  "%)",
              }}
            ></div>
          );
        })}
      </div>

      <div className="container">
        <div style={{width: "15rem", height: "15rem", background:"var(--primary)"}}></div>
        <div style={{width: "15rem", height: "15rem", background:"var(--secomdary)"}}></div>
        <div style={{width: "15rem", height: "15rem", background:"var(--terziary)"}}></div>
      </div>
    </div>
  );
}
