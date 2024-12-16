interface Position {
  x: number;
  y: number;
}

interface Props {
  canvas: HTMLCanvasElement;
}

interface Offset {
  offsetX: number;
  offsetY: number;
}

class Line {
  canvas: HTMLCanvasElement;
  is_stop: boolean;
  position: Array<Array<Position>>;

  constructor({ canvas }: Props) {
    this.canvas = canvas;
    this.is_stop = false;
    this.position = [];
  }

  init() {
    this.canvas.addEventListener('mousedown', this.mousedown.bind(this));
    this.canvas.addEventListener('mouseup', this.mouseup.bind(this));
    this.canvas.addEventListener('mousemove', this.mousemove.bind(this));
    this.canvas.addEventListener('mouseleave', this.mouseleave.bind(this));
  }

  update() {
    const cx = this.canvas.getContext('2d');
    this.position?.forEach((item) => {
      item?.forEach((item2, index2, list) => {
        if (index2 === 0) {
          cx?.beginPath();
          cx?.moveTo(item2.x, item2.y);
        } else if (index2 !== 0 && index2 === list.length - 1) {
          cx?.lineTo(item2.x, item2.y);
          cx?.stroke();
        } else {
          cx?.lineTo(item2.x, item2.y);
        }
      });
    });
  }

  remove() {
    if (this.canvas) {
      this.canvas.removeEventListener('mousedown', this.mousedown);
      this.canvas.removeEventListener('mouseup', this.mouseup);
      this.canvas.removeEventListener('mousemove', this.mousemove);
      this.canvas.removeEventListener('mouseleave', this.mouseleave);
    }
  }

  mousedown({ offsetX, offsetY }: Offset) {
    this.is_stop = true;
    this.position?.push([{ x: offsetX, y: offsetY }]);
  }

  mouseup() {
    this.is_stop = false;
    this.update();
  }

  mousemove({ offsetX, offsetY }: Offset) {
    if (this.is_stop && this.position?.length) {
      this.position[this.position.length - 1].push({ x: offsetX, y: offsetY });
      this.update();
    }
  }

  mouseleave() {
    this.is_stop = false;
    this.update();
  }
}

export default Line;
