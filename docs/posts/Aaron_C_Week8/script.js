window.addEventListener('scroll', function() {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  
    const colors = [
      { color: '#ff0000', position: 25 },
      { color: '#00ff00', position: 50 },
      { color: '#0000ff', position: 75 }
    ];
  
    let colorIndex = 0;
    for (let i = 0; i < colors.length; i++) {
      if (scrollPercentage >= colors[i].position) {
        colorIndex = i;
      }
    }
  
    const currentColor = colors[colorIndex].color;
    const nextColor = colors[colorIndex + 1].color;
  
    const positionInRange = (scrollPercentage - colors[colorIndex].position) / (colors[colorIndex + 1].position - colors[colorIndex].position);
    const interpolatedColor = interpolateColor(currentColor, nextColor, positionInRange);

    document.getElementById('html').style.backgroundColor = interpolatedColor;
    document.getElementById('body').style.backgroundColor = interpolatedColor;
    document.getElementById('content').style.backgroundColor = interpolatedColor;
  });
  
  function interpolateColor(color1, color2, position) {
    const color1Rgb = hexToRgb(color1);
    const color2Rgb = hexToRgb(color2);
  
    const r = Math.round(color1Rgb.r + (color2Rgb.r - color1Rgb.r) * position);
    const g = Math.round(color1Rgb.g + (color2Rgb.g - color1Rgb.g) * position);
    const b = Math.round(color1Rgb.b + (color2Rgb.b - color1Rgb.b) * position);
  
    return rgbToHex(r, g, b);
  }
  
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }