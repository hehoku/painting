function setup() {
  createCanvas(width, height);
  frameRate(1);
}

function getCurrentTime() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
    .toString()
    .padStart(2, "0")}`;
}

function drawFlower(flowerX, flowerY, petalSize) {
  let petalDistance = petalSize / 2;

  fill("#ff8000");
  ellipse(flowerX - petalDistance, flowerY - petalDistance, petalSize);
  ellipse(flowerX + petalDistance, flowerY - petalDistance, petalSize);
  ellipse(flowerX - petalDistance, flowerY + petalDistance, petalSize);
  ellipse(flowerX + petalDistance, flowerY + petalDistance, petalSize);

  fill("#ff0000");
  ellipse(flowerX, flowerY, petalSize);
}

function draw() {
  clear();
  background(220);

  let flowerX = random(0, width);
  let flowerY = random(0, height);
  let petalSize = random(25, 150);

  drawFlower(flowerX, flowerY, petalSize);

  // 保存画布状态
  push();

  translate(width / 2, height / 2); // 将画布的原点移到中心

  // 画大的等边三角形
  let sideLength = 200;
  let h = (sideLength * sqrt(3)) / 2; // 大的等边三角形高度

  // 使用随机颜色
  let colors = ["red", "yellow", "blue"];
  stroke(random(colors));

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
  let smallSideLength = radius * sqrt(3);
  h = (smallSideLength * sqrt(3)) / 2; // 大的等边三角形高度
  noFill();
  beginShape();
  vertex(-smallSideLength / 2, h / 2 + h / 6);
  vertex(smallSideLength / 2, h / 2 + h / 6);
  vertex(0, -h / 2 + h / 6);
  endShape(CLOSE);

  // 恢复画布状态 指坐标系
  pop();

  textSize(18);
  text(getCurrentTime().toString(), 10, 30);
  textAlign(BOTTOM, CENTER);
  fill(0, 135, 255);
}
