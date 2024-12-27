import { useState, useRef } from 'react';

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
  let canvas2 : HTMLCanvasElement;
  let cx : CanvasRenderingContext2D | null;
  let cx2 : CanvasRenderingContext2D | null;
  let is_stop : boolean;
  let position :{
    [key: string]: Array<Array<Position>>
  };
  const [type, setType] = useState('pencil');
  const typeRef = useRef(type); 

  const init = (canvasElement: HTMLCanvasElement, canvasElement2: HTMLCanvasElement) => {
    canvas = canvasElement;
    canvas2 = canvasElement2;
    is_stop = false;
    position = {
      'pencil': [],
      'line': [],
      'rect': [],
      'arc': []
    }
    cx = canvas.getContext('2d');
    canvas.addEventListener('mousedown', mousedown);
    canvas.addEventListener('mouseup', mouseup);
    canvas.addEventListener('mousemove', mousemove);
    canvas.addEventListener('mouseleave', mouseleave);
    cx2 = canvas2.getContext('2d');
    canvas2.addEventListener('mousedown', mousedown);
    canvas2.addEventListener('mouseup', mouseup);
    canvas2.addEventListener('mousemove', mousemove);
    canvas2.addEventListener('mouseleave', mouseleave);
  }

  const drawType = (num: string) => {
    setType(num);
    typeRef.current = num;
  }

  const pencil = (ctx: CanvasRenderingContext2D) => {
    position['pencil']?.forEach((item) => {
      item?.forEach((item2, index2, list) => {
        if (index2 === 0) {
          ctx?.beginPath();
          ctx?.moveTo(item2.x, item2.y);
        } else if (index2 !== 0 && index2 === list.length - 1) {
          ctx?.lineTo(item2.x, item2.y);
          ctx?.stroke();
        } else {
          ctx?.lineTo(item2.x, item2.y);
        }
      });
    });
  }

  const line = (ctx: CanvasRenderingContext2D) => {
    position['line']?.forEach((item) => {
      ctx?.beginPath();
      ctx?.moveTo(item[0].x, item[0].y);
      ctx?.lineTo(item[item.length - 1].x, item[item.length - 1].y);
      ctx?.stroke();
    });
  }

  const rect = (ctx: CanvasRenderingContext2D) => {
    position['rect']?.forEach((item) => {
      ctx?.beginPath();
      ctx?.rect(item[0].x, item[0].y, item[item.length - 1].x - item[0].x, item[item.length - 1].y - item[0].y);
      ctx?.stroke();
    });
  }

  const arc = (ctx: CanvasRenderingContext2D) => {
    position['arc']?.forEach((item) => {
      ctx?.beginPath();
      ctx?.arc(item[item.length - 1].x, item[item.length - 1].y, Math.abs(item[item.length - 1].x - item[0].x), 0, Math.PI * 2);
      ctx?.stroke();
    });
  }

  const stroke = (ctx: CanvasRenderingContext2D) => {
    // cx?.clearRect(0, 0, canvas?.width, canvas?.height);
    switch(typeRef.current) {
      case 'pencil': 
        pencil(ctx);
        break;
      case 'line': 
        line(ctx);
        break;
      case 'rect': 
        rect(ctx);
        break;
      case 'arc': 
        arc(ctx);
        break;
      default: 
        console.log(typeRef.current);
        break;
    }
  }

  const remove = () => {
    if (canvas && canvas2) {
      canvas.removeEventListener('mousedown', mousedown);
      canvas.removeEventListener('mouseup', mouseup);
      canvas.removeEventListener('mousemove', mousemove);
      canvas.removeEventListener('mouseleave', mouseleave);
      cx?.clearRect(0, 0, canvas?.width, canvas?.height);
      canvas2.removeEventListener('mousedown', mousedown);
      canvas2.removeEventListener('mouseup', mouseup);
      canvas2.removeEventListener('mousemove', mousemove);
      canvas2.removeEventListener('mouseleave', mouseleave);
      cx2?.clearRect(0, 0, canvas2?.width, canvas2?.height);
    }
  }

  const mousedown = ({ offsetX, offsetY }: Offset) => {
    is_stop = true;
    position[typeRef.current]?.push([{ x: offsetX, y: offsetY }]);
  }

  const mouseup = () => {
    is_stop = false;
  }

  const mousemove = ({ offsetX, offsetY }: Offset) => {
    if (is_stop && position[typeRef.current]?.length) {
      position[typeRef.current][position[typeRef.current].length - 1]?.push({ x: offsetX < 0 ? 1 : offsetX, y: offsetY < 0 ? 1 : offsetY });
      cx2?.clearRect(0, 0, canvas2?.width, canvas2?.height);
      if (cx2 != null) stroke(cx2);
    }
  }

  const mouseleave = () => {
    if (cx != null) stroke(cx);
    is_stop = false;
  }

  return {
    init,
    drawType,
    remove,
  }
}

export default useDraw;