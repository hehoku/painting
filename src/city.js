function setup() {
  createCanvas(width, height);
  frameRate(1);
}

function draw() {
  clear();
  background("#dcdcdc");

  drawHouse(width / 2, height / 2, 50, "blue");
  drawHouse(100, 100, 80, "red");
}

function drawHouse(x, y, size, color) {
  strokeWeight(2);
  // 房顶
  fill(color);
  triangle(x, y, x - size / 2, y + size / 2, x + size / 2, y + size / 2);

  // 主体
  fill("#ffff99");
  rect(x - size / 2, y + size / 2, size, (3 / 4) * size);

  // 窗户
  fill("#0000ff");
  rect(x - size / 3, y + size / 2 + 10, size / 4, size / 4);

  // 门
  fill(color);
  rect(x, y + (3 / 4) * size, size / 4, size / 2);
}
