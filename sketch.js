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
      x: 280, y: 280, size: 210, color: color(218, 243, 229),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      drawRays: false,
      rayColor: color(255, 130, 46),
      numRays: 36,
      centerCircleColors: [color(255, 74, 171), color(178, 102, 255), color(255, 128, 0), color(255, 255, 51), color(115, 172, 140), color(100, 100, 100), color(50, 50, 50), color(65, 119, 123), color(95, 255, 165)],
      centerCircleSizes: [113, 100, 90, 80, 70, 55, 40, 30, 20]
    },
    {
      x: 330, y: 40, size: 200, color: color(218, 243, 229),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      drawRays: true,
      rayColor: color(255, 165, 0),
      numRays: 36,
      centerCircleColors: [color(255, 74, 171), color(178, 102, 255), color(255, 128, 0), color(255, 255, 51), color(115, 172, 140), color(100, 100, 100), color(50, 50, 50), color(65, 119, 123), color(95, 255, 165)],
      centerCircleSizes: [113, 100, 90, 80, 70, 55, 40, 30, 20]
    },
    {
      x: 850, y: 580, size: 210, color: color(255, 153, 51),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76), color(0, 153, 76)],
      drawRays: true,
      rayColor: color(255, 165, 0),
      numRays: 36,
      centerCircleColors: [color(255, 74, 171), color(178, 102, 255), color(255, 128, 0), color(255, 255, 51), color(115, 172, 140), color(100, 100, 100), color(50, 50, 50), color(65, 119, 123), color(95, 255, 165)],
      centerCircleSizes: [113, 100, 90, 80, 70, 55, 40, 30, 20]
    },
    {
      x: -20, y: 560, size: 220, color: color(221, 252, 244),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(63, 133, 146), color(63, 133, 146), color(63, 133, 146), color(63, 133, 146), color(63, 133, 146)],
      drawRays: false,
      centerCircleColors: [color(0, 120, 51), color(178, 102, 255), color(0, 120, 51), color(178, 102, 255), color(255, 0, 0), color(128, 128, 128), color(96, 96, 96), color(32, 32, 32), color(0, 102, 0)],
      centerCircleSizes: [115, 105, 95, 85, 75, 60, 50, 40, 30]
    },
    {
      x: 120, y: 100, size: 210, color: color(153, 204, 255),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 0, 102), color(0, 0, 102), color(0, 0, 102), color(0, 0, 102), color(0, 0, 102)],
      drawRays: false,
      centerCircleColors: [color(0, 120, 51), color(178, 102, 255), color(0, 120, 51), color(178, 102, 255), color(255, 0, 0), color(128, 128, 128), color(96, 96, 96), color(32, 32, 32), color(0, 102, 0)],
      centerCircleSizes: [115, 105, 95, 85, 75, 60, 50, 40, 30]
    },
    {
      x: 40, y: 320, size: 210, color: color(255, 204, 153),
      dotCounts: [20, 30, 30, 35, 40],
      radiusFactor: [0.6, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(0, 128, 255), color(0, 128, 255), color(0, 128, 255), color(0, 128, 255), color(0, 128, 255)],
      drawRays: false,
      centerCircleColors: [color(0, 0, 0), color(255, 102, 178), color(0, 120, 51), color(0, 0, 0), color(255, 0, 0), color(255, 255, 255)],
      centerCircleSizes: [115, 109, 75, 45, 35, 20]
    },
    {
      x: 200, y: 500, size: 210, color: color(255, 213, 71),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(204, 102, 0), color(204, 102, 0), color(204, 102, 0), color(204, 102, 0), color(204, 102, 0)],
      drawRays: true,
      rayColor: color(255, 130, 46),
      numRays: 36,
      centerCircleColors: [color(255, 74, 171), color(178, 102, 255), color(255, 128, 0), color(255, 255, 51), color(115, 172, 140), color(100, 100, 100), color(50, 50, 50), color(65, 119, 123), color(95, 255, 165)],
      centerCircleSizes: [113, 100, 90, 80, 70, 55, 40, 30, 20]
    },
    {
      x: 440, y: 460, size: 220, color: color(240, 220, 216),
      dotCounts: [20, 30, 30, 35, 40],
      radiusFactor: [0.6, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(255, 0, 0), color(255, 0, 0), color(255, 0, 0), color(255, 0, 0), color(255, 0, 0)],
      drawRays: false,
      centerCircleColors: [color(223, 11, 89), color(255, 74, 171), color(112, 161, 133), color(223, 11, 89), color(51, 51, 51), color(102, 204, 0)],
      centerCircleSizes: [128, 118, 70, 55, 45, 25]
    },
    {
      x: 140, y: 740, size: 210, color: color(255, 250, 250),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.55, 0.65, 0.76, 0.85, 0.95],
      dotColors: [color(239, 41, 41), color(239, 41, 41), color(239, 41, 41), color(239, 41, 41), color(239, 41, 41)],
      drawRays: false,
      centerCircleColors: [color(204, 0, 204), color(255, 153, 255), color(102, 178, 255), color(255, 153, 255), color(141, 169, 144), color(0, 0, 0), color(76, 153, 0), color(255, 255, 255)],
      centerCircleSizes: [133, 125, 115, 105, 95, 75, 55, 30]
    },
    {
      x: 380, y: 680, size: 210, color: color(255, 167, 78),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.55, 0.65, 0.76, 0.85, 0.95],
      dotColors: [color(205, 33, 129), color(205, 33, 129), color(205, 33, 129), color(205, 33, 129), color(205, 33, 129)],
      drawRays: false,
      centerCircleColors: [color(204, 0, 204), color(255, 153, 255), color(162, 223, 122), color(125, 154, 122), color(51, 51, 51), color(255, 0, 0), color(255, 255, 255)],
      centerCircleSizes: [133, 125, 85, 65, 55, 35, 15]
    },
    {
      x: 540, y: 850, size: 195, color: color(255, 250, 250),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.55, 0.65, 0.76, 0.85, 0.95],
      dotColors: [color(239, 41, 41), color(239, 41, 41), color(239, 41, 41), color(239, 41, 41), color(239, 41, 41)],
      drawRays: false,
      centerCircleColors: [color(204, 0, 204), color(255, 153, 255), color(102, 178, 255), color(255, 153, 255), color(141, 169, 144), color(0, 0, 0), color(76, 153, 0), color(255, 255, 255)],
      centerCircleSizes: [133, 125, 115, 105, 95, 75, 55, 30]
    },
    {
      x: 620, y: 620, size: 210, color: color(245, 219, 116),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.55, 0.65, 0.76, 0.85, 0.98],
      dotColors: [color(41, 90, 132), color(41, 90, 132), color(41, 90, 132), color(41, 90, 132), color(41, 90, 132)],
      drawRays: false,
      centerCircleColors: [color(255, 74, 171), color(255, 114, 171), color(226, 3, 92), color(125, 154, 122), color(51, 51, 51), color(255, 0, 0), color(255, 255, 255)],
      centerCircleSizes: [133, 118, 5, 55, 45, 38, 25]
    },
    {
      x: 680, y: 380, size: 220, color: color(254, 255, 229),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.5, 0.6, 0.7, 0.8, 0.9],
      dotColors: [color(255, 135, 14), color(255, 135, 14), color(255, 135, 14), color(255, 135, 14), color(255, 135, 14)],
      drawRays: false,
      centerCircleColors: [color(204, 255, 153), color(255, 102, 255), color(102, 204, 0), color(255, 102, 255), color(102, 204, 0), color(153, 255, 255), color(153, 153, 153), color(102, 102, 102), color(102, 204, 0), color(255, 255, 255)],
      centerCircleSizes: [115, 100, 95, 85, 75, 60, 50, 40, 30, 18]
    },
    {
      x: 500, y: 220, size: 230, color: color(255, 169, 38),
      dotCounts: [20, 30, 30, 35, 40],
      radiusFactor: [0.58, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(204, 153, 255), color(204, 153, 255), color(204, 153, 255), color(204, 153, 255), color(204, 153, 255)],
      drawRays: false,
      centerCircleColors: [color(255, 51, 255), color(0, 255, 255), color(255, 51, 255), color(0, 255, 255), color(255, 51, 255), color(128, 128, 128), color(96, 96, 96), color(0, 255, 255), color(255, 0, 0), color(224, 224, 224)],
      centerCircleSizes: [125, 115, 105, 90, 75, 70, 60, 40, 35, 20]
    },
    {
      x: 550, y: -10, size: 210, color: color(255, 250, 250),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.55, 0.65, 0.76, 0.85, 0.95],
      dotColors: [color(239, 41, 41), color(239, 41, 41), color(239, 41, 41), color(239, 41, 41), color(239, 41, 41)],
      drawRays: false,
      centerCircleColors: [color(204, 0, 204), color(255, 153, 255), color(102, 178, 255), color(255, 153, 255), color(141, 169, 144), color(0, 0, 0), color(76, 153, 0), color(255, 255, 255)],
      centerCircleSizes: [133, 125, 115, 105, 95, 75, 55, 30]
    },
    {
      x: 760, y: 820, size: 210, color: color(245, 219, 116),
      dotCounts: [20, 23, 23, 25, 35],
      radiusFactor: [0.55, 0.65, 0.76, 0.85, 0.98],
      dotColors: [color(41, 90, 132), color(41, 90, 132), color(41, 90, 132), color(41, 90, 132), color(41, 90, 132)],
      drawRays: false,
      centerCircleColors: [color(255, 74, 171), color(255, 114, 171), color(226, 3, 92), color(125, 154, 122), color(51, 51, 51), color(255, 0, 0), color(255, 255, 255)],
      centerCircleSizes: [133, 118, 5, 55, 45, 38, 25]
    },
    {
      x: 720, y: 140, size: 210, color: color(255, 178, 102),
      dotCounts: [20, 30, 30, 35, 40],
      radiusFactor: [0.6, 0.68, 0.77, 0.86, 0.95],
      dotColors: [color(178, 102, 255), color(0, 76, 153), color(0, 76, 153), color(0, 76, 153), color(0, 76, 153)],
      drawRays: false,
      centerCircleColors: [color(0, 0, 0), color(178, 102, 255), color(0, 0, 0), color(102, 102, 102), color(51, 51, 51), color(255, 0, 0), color(255, 255, 255)],
      centerCircleSizes: [115, 105, 75, 65, 55, 40, 25, 15]
    },
    {
      x: 340, y: 40, size: 210, color: color(255, 255, 0),
      dotCounts: [10, 20, 30, 40, 50],
      radiusFactor: [0.5, 0.6, 0.7, 0.8, 0.9],
      dotColors: [color(255, 0, 0), color(0, 255, 0), color(0, 0, 255), color(255, 255, 0), color(255, 0, 255)],
      drawRays: false,
      centerCircleColors: [color(255, 255, 255), color(204, 204, 204), color(153, 153, 153), color(102, 102, 102), color(51, 51, 51)],
      centerCircleSizes: [60, 45, 30, 15, 5]
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
      let dotX = x + radius * cos(angle + frameCount * 0.05); 
      let dotY = y + radius * sin(angle + frameCount * 0.05); 
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