import { useState } from 'react';

interface Position {
  x: number;
  y: number;
}

interface Offset {
  offsetX: number;
  offsetY: number;
}

export function useDraw() {

  let canvas : HTMLCanvasElement;
  let cx : CanvasRenderingContext2D | null;
  let is_stop : boolean;
  let position :{
    [key: string]: Array<Array<Position>>
  };
  const [type, setType] = useState('line');

  const init = (canvas: HTMLCanvasElement) => {
    canvas = canvas;
    is_stop = false;
    position = {
      'line': [],
      'rect': [],
      'arc': []
    }
    cx = canvas.getContext('2d');
    remove();
    canvas.addEventListener('mousedown', mousedown);
    canvas.addEventListener('mouseup', mouseup);
    canvas.addEventListener('mousemove', mousemove);
    canvas.addEventListener('mouseleave', mouseleave);
  }

  const drawType = (type: string) => {
    setType(type);
  }

  const pencil = () => {
    position['pencil']?.forEach((item) => {
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

  const line = () => {
    position['line']?.forEach((item) => {
      cx?.beginPath();
      cx?.moveTo(item[0].x, item[0].y);
      cx?.lineTo(item[item.length - 1].x, item[item.length - 1].y);
      cx?.stroke();
    });
  }

  const rect = () => {
    position['rect']?.forEach((item) => {
      cx?.rect(item[0].x, item[0].y, item[item.length - 1].x - item[0].x, item[item.length - 1].y - item[0].y);
      cx?.stroke();
    });
  }

  const arc = () => {
    position['arc']?.forEach((item) => {
      cx?.beginPath();
      cx?.arc(item[0].x, item[0].y, item[item.length - 1].x - item[0].x, 0, Math.PI * 2);
      cx?.stroke();
    });
  }

  const stroke = () => {
    cx?.clearRect(0, 0, canvas?.width, canvas?.height);
    switch(type) {
      case 'line': 
        line();
        break;
      case 'rect': 
        rect();
        break;
      case 'arc': 
        arc();
        break;
      default:
        console.log(type);
        break;
    }
  }

  const remove = () => {
    if (canvas) {
      canvas.removeEventListener('mousedown', mousedown);
      canvas.removeEventListener('mouseup', mouseup);
      canvas.removeEventListener('mousemove', mousemove);
      canvas.removeEventListener('mouseleave', mouseleave);
      cx?.clearRect(0, 0, canvas?.width, canvas?.height);
    }
  }

  const mousedown = ({ offsetX, offsetY }: Offset) => {
    is_stop = true;
    position[type]?.push([{ x: offsetX, y: offsetY }]);
  }

  const mouseup = () => {
    is_stop = false;
  }

  const mousemove = ({ offsetX, offsetY }: Offset) => {
    if (is_stop && position[type]?.length) {
      position[type][position[type].length - 1]?.push({ x: offsetX, y: offsetY });
      stroke();
      // line();
      // rect();
      // arc();
    }
  }

  const mouseleave = () => {
    is_stop = false;
  }

  return {
    init,
    drawType,
    // line,
    // rect,
    // arc,
    // stroke,
    remove,
    // mousedown,
    // mouseup,
    // mousemove,
    // mouseleave
  }
}

export default useDraw;


// class Draw {
// const arc = () => {
//   position['arc']?.forEach((item) => {
//     const startX = item[0].x;
//     const startY = item[0].y;
//     const endX = item[item.length - 1].x;
//     const endY = item[item.length - 1].y;
//     const radius = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
//     cx?.beginPath();
//     cx?.arc(startX, startY, radius, 0, Math.PI * 2);
//     cx?.stroke();
//   });
// }
//   canvas: HTMLCanvasElement;
//   cx: CanvasRenderingContext2D | null;
//   is_stop: boolean;
//   position: {
//     [key: string]: Array<Array<Position>>
//   };
//   type: string;

//   constructor({ canvas }: Props) {
//     this.canvas = canvas;
//     this.is_stop = false;
//     this.type = 'line';
//     this.position = {
//       'line': [],
//       'rect': [],
//       'arc': []
//     }
//     this.cx = canvas.getContext('2d');
//   }

//   init() {
//     this.remove();
//     this.canvas.addEventListener('mousedown', this.mousedown);
//     this.canvas.addEventListener('mouseup', this.mouseup);
//     this.canvas.addEventListener('mousemove', this.mousemove);
//     this.canvas.addEventListener('mouseleave', this.mouseleave);
//   }

//   setType(type: string) {
//     this.type = type;
//   }

//   line() {
//     this.position['line']?.forEach((item) => {
//       item?.forEach((item2, index2, list) => {
//         if (index2 === 0) {
//           this.cx?.beginPath();
//           this.cx?.moveTo(item2.x, item2.y);
//         } else if (index2 !== 0 && index2 === list.length - 1) {
//           this.cx?.lineTo(item2.x, item2.y);
//           this.cx?.stroke();
//         } else {
//           this.cx?.lineTo(item2.x, item2.y);
//         }
//       });
//     });
//   }

//   rect() {
//     this.position['rect']?.forEach((item) => {
//       this.cx?.rect(item[0].x, item[0].y, item[item.length - 1].x - item[0].x, item[item.length - 1].y - item[0].y);
//       this.cx?.stroke();
//     });
//   }

//   arc() {
//     this.position['arc']?.forEach((item) => {
//       this.cx?.beginPath();
//       this.cx?.arc(item[0].x, item[0].y, item[item.length - 1].x - item[0].x, 0, Math.PI * 2);
//       this.cx?.stroke();
//     });
//   }

//   stroke() {
//     this.cx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     switch(this.type) {
//       case 'line': 
//         this.line();
//         break;
//       case 'rect': 
//         this.rect();
//         break;
//       case 'arc': 
//         this.arc();
//         break;
//       default:
//         console.log(this.type);
//         break;
//     }
//   }

//   remove() {
//     if (this.canvas) {
//       this.canvas.removeEventListener('mousedown', this.mousedown);
//       this.canvas.removeEventListener('mouseup', this.mouseup);
//       this.canvas.removeEventListener('mousemove', this.mousemove);
//       this.canvas.removeEventListener('mouseleave', this.mouseleave);
//       this.cx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     }
//   }

//   mousedown({ offsetX, offsetY }: Offset) {
//     this.is_stop = true;
//     this.position[this.type]?.push([{ x: offsetX, y: offsetY }]);
//   }

//   mouseup() {
//     this.is_stop = false;
//   }

//   mousemove({ offsetX, offsetY }: Offset) {
//     if (this.is_stop && this.position[this.type]?.length) {
//       this.position[this.type][this.position[this.type].length - 1]?.push({ x: offsetX, y: offsetY });
//       this.stroke();
//       this.line();
//       this.rect();
//       this.arc();
//     }
//   }

//   mouseleave() {
//     this.is_stop = false;
//   }
// }