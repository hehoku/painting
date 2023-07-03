// const width = 400;
// const height = 400;

// function setup() {
//   createCanvas(width, height);
// }

// function draw() {
//   background(222);

//   fill("#fdfde6");
//   triangle(
//     width / 2,
//     height / 4,
//     width / 4,
//     (height * 3) / 4,
//     (width * 3) / 4,
//     (height * 3) / 4
//   );

//   fill("#008080");
//   ellipse(width / 2, height / 2, 100, 100);

//   fill("#fdfde6");
//   triangle(156.7, 175, 243.3, 175, 200, 250);
// }

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  background(220);
  translate(width / 2, height / 2); // 将画布的原点移到中心

  // 画大的等边三角形
  let sideLength = 200;
  let h = (sideLength * sqrt(3)) / 2; // 大的等边三角形高度
  stroke(0);
  noFill();
  beginShape();
  vertex(-sideLength / 2, h / 2);
  vertex(sideLength / 2, h / 2);
  vertex(0, -h / 2);
  endShape(CLOSE);

  // 画内切圆
  let radius = (sideLength * sqrt(3)) / 6; // 等边三角形内切圆半径
  ellipse(0, h / 6, radius * 2, radius * 2);

  // 画小的等边三角形 内切于圆
  // 画等边三角形
  sideLength = radius * sqrt(3);
  h = (sideLength * sqrt(3)) / 2; // 大的等边三角形高度
  stroke(0);
  noFill();
  beginShape();
  vertex(-sideLength / 2, h / 2 + h / 6);
  vertex(sideLength / 2, h / 2 + h / 6);
  vertex(0, -h / 2 + h / 6);
  endShape(CLOSE);
}
