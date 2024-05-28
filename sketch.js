function setup() {
  createCanvas(800, 800);
  frameRate(30); 
}

function draw() {
  background(20, 84, 112); 
  drawTheseCircles();
}

function drawTheseCircles() {
  let circles = [

  {
      x: 720, y: 140, size: 210, color: color(255, 178, 102),
      dotCounts: [20, 30, 30, 35, 40],
      radiusFactor: [0.6, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(178, 102, 255), color(0, 76, 153), color(0, 76, 153), color(0, 76, 153), color(0, 76, 153)],
      drawRays: false,
      centerCircleColors: [color(0, 0, 0), color(178, 102, 255), color(0, 0, 0), color(102, 102, 102), color(51, 51, 51), color(255, 0, 0), color(255, 255, 255)],
      centerCircleSizes: [115, 105, 75, 65, 55, 40, 25, 15]
    }
  ];

  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size);

    if (circle.drawRays) {
      drawRays(circle.x, circle.y, circle.size, circle.numRays, circle.rayColor);
    }

    drawDots(circle.x, circle.y, circle.size, circle.dotCounts, circle.radiusFactor, circle.dotColors);
    drawCenterCircles(circle.x, circle.y, circle.centerCircleColors, circle.centerCircleSizes);
  }
}

function drawRays(x, y, diameter, numRays, rayColor) {
  stroke(rayColor);
  strokeWeight(6);
  for (let i = 0; i < numRays; i++) {
    let angle = TWO_PI / numRays * i;
    let startX = x + (diameter * 0.25) * cos(angle);
    let startY = y + (diameter * 0.25) * sin(angle);
    let endX = x + (diameter * 0.5) * cos(angle);
    let endY = y + (diameter * 0.5) * sin(angle);
    line(startX, startY, endX, endY);
  }
}

function drawDots(x, y, diameter, dotCounts, radiusFactor, dotColors) {
  let numRings = dotCounts.length;
  for (let ring = 0; ring < numRings; ring++) {
    let radius = (diameter / 2) * radiusFactor[ring];
    let numDots = dotCounts[ring];
    fill(dotColors[ring]);
    noStroke();
    for (let dot = 0; dot < numDots; dot++) {
      let angle = TWO_PI / numDots * dot;
      let offsetAngle = easing(frameCount * 0.05);
      let dotX = x + radius * cos(angle + offsetAngle); 
      let dotY = y + radius * sin(angle + offsetAngle); 
      ellipse(dotX, dotY, 8, 9);
    }
  }
}

function drawCenterCircles(x, y, centerCircleColors, centerCircleSizes) {
  for (let i = 0; i < centerCircleSizes.length; i++) {
    fill(centerCircleColors[i]);
    noStroke();
    ellipse(x, y, centerCircleSizes[i]);
  }
}

function easing(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}