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
  init(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.eventConnection();
  }
  startDrawing(e) {
    this.isMouseDown = true;
    [this.x, this.y] = [e.offsetX, e.offsetY];
    this.drawLine(e);
  }
  drawLine(e) {
    if (!this.isMouseDown) return;
    const nx = e.offsetX;
    const ny = e.offsetY;
    this.context.lineCap = 'round';
    this.context.beginPath();
    this.context.moveTo(this.x, this.y);
    this.context.lineTo(nx, ny);
    this.context.stroke();
    this.x = nx;
    this.y = ny;
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
const canvas = new Canvas();
canvas.init(600, 400);

const paintPen = document.querySelector('.line-range');
const penValue = document.querySelector('.range-value');
paintPen.addEventListener('input', (e) => {
  const width = e.target.value;
  canvas.context.lineWidth = width;
  penValue.innerHTML = width;
});
