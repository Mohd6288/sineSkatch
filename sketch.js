//Sine is a mathematical function that describes a smooth repetitive oscillation, commonly found in nature and in the man-made world. The sine function can be used to draw a variety of shapes, including ellipses and lines that move in sync with the sine wave.

//To draw an ellipse using sine, one can start by plotting the x and y coordinates of points on the ellipse using the sine function. By varying the amplitude and frequency of the sine wave, one can create ellipses of different shapes and sizes. Similarly, lines can be drawn that move up and down or back and forth with the sine wave.

//The phase of the sine wave determines the starting point of the oscillation, which can be shifted to create different patterns and shapes. By combining multiple sine waves with different phases, frequencies, and amplitudes, complex and interesting shapes can be generated.

//phase

let angle = 0;
let phase = 0;

//sin;

let angleV = 0.01;

function setup() {
  createCanvas(800, 800);
}

function drawPhase() {
  translate(width / 2, height / 2);
  let x;
  let y;

  noFill();
  stroke(70, phase, 70);
  strokeWeight(0.2);
  beginShape();
  for (let i = 0; i < 360; i += 0.4) {
    let p = (phase + i) * 1;
    1;
    curveVertex(p * sin(i), p * cos(i));
  }
  endShape();

  phase -= 0.5;
  if (phase < -360) {
    phase = phase % 360;
    phase = 0;
  }
}

function drawSine() {
  //    translate(width / 2, height / 2);

  //    drawPhase();
  fill(255);
  stroke(255);
  line(0, -height / 2, 0, height / 2);
  line(-400, 0, 400, 0);
  let y = map(sin(angle), -1, 1, -400, 400);
  let x = map(cos(angle), -1, 1, -400, 400);
  noFill();
  push();
  beginShape();
  for (var i = 0; i < 10; i++) {
    fill(100, 50, 50, 5);
    vertex(x, 0);
    vertex(0, y);
    vertex(-x, 0);
    vertex(0, -y);
    push();
    strokeWeight(20);
    point(x, 0);
    point(0, y);
    point(-x, 0);
    point(0, -y);
    pop();
    ellipse(0, 0, x, y);
  }

  endShape();
  pop();

  push();
  beginShape();

  vertex(x / 2, y / 2);
  vertex(x / 2, -y / 2);
  vertex(-x / 2, -y / 2);
  vertex(-x / 2, y / 2);

  fill(100, 50, 50, 50);
  ellipse(x / 2, y / 2, 50);
  ellipse(x / 2, -y / 2, 50);
  ellipse(-x / 2, -y / 2, 50);
  ellipse(-x / 2, y / 2, 50);

  endShape(CLOSE);
  pop();

  push();
  beginShape();

  for (let i = 0; i < 10; i += 1) {
    vertex(-x, -y);
    vertex(x, y);
    vertex(-x, y);
    vertex(x, -y);
    push();
    strokeWeight(30);
    point(-x, -y);
    point(x, y);
    point(-x, y);
    point(x, -y);
    pop();
    vertex(x, y);
    vertex(-x, -y);
    vertex(x, -y);
    vertex(-x, y);
  }
  endShape();
  pop();
  angle += angleV;
}

function draw() {
  background(150);
  drawPhase();
  drawSine();
}
