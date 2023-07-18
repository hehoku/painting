function setup() {
  createCanvas(width, height);
  frameRate(1);
}

function draw() {
  clear();
  background("#dcdcdc");

  drawBlock(0, 0, 200, 200);
  drawBlock(200, 0, 200, 200);
  drawBlock(0, 200, 200, 200);
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

function drawBlock(blockX, blockY, blockWidth, blockHeight) {
  drawHouse(
    blockX + blockWidth * 0.3,
    blockY + blockHeight * 0.3,
    blockWidth * 0.3,
    "blue"
  );
  drawHouse(
    blockX + blockWidth * 0.8,
    blockY + blockHeight * 0.3,
    blockWidth * 0.3,
    "#8b4513"
  );
  drawHouse(
    blockX + blockWidth * 0.3,
    blockY + blockHeight * 0.8,
    blockWidth * 0.3,
    "#2661c6"
  );
  drawHouse(
    blockX + blockWidth * 0.8,
    blockY + blockHeight * 0.8,
    blockWidth * 0.3,
    "red"
  );
}
