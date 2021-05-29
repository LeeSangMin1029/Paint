class Pen {
  constructor() {}
}

class Canvas {
  constructor() {
    this.canvas = document.getElementById('paint');
    this.context = this.canvas.getContext('2d');
    this.isMouseDown = false;
    this.x = 0;
    this.y = 0;
  }
  init(width, height /*pen*/) {
    this.canvas.width = width;
    this.canvas.height = height;
    // this.pen = pen;
    this.eventConnection();
  }
  startDrawing(e) {
    this.isMouseDown = true;
    [this.x, this.y] = [e.offsetX, e.offsetY];
  }
  drawLine(e) {
    if (this.isMouseDown) {
      const nx = e.offsetX;
      const ny = e.offsetY;
      this.context.beginPath();
      this.context.moveTo(this.x, this.y);
      this.context.lineTo(nx, ny);
      this.context.stroke();
      [this.x, this.y] = [nx, ny];
    }
  }
  stopDrawing() {
    this.isMouseDown = false;
  }
  // 마우스의 이벤트 연결
  eventConnection() {
    this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
    this.canvas.addEventListener('mousemove', (e) => this.drawLine(e));
    this.canvas.addEventListener('mouseup', () => this.stopDrawing());
    this.canvas.addEventListener('mouseout', () => this.stopDrawing());
  }
}
const pen = new Pen();
const canvas = new Canvas();
canvas.init(600, 400);
