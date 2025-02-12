import { useState, useRef } from 'react';

interface Position {
  type: string;
  delete: boolean;
  position: Array<{ x: number; y: number }>;
}

interface Offset {
  offsetX: number;
  offsetY: number;
}

export function useDraw() {
  let canvas: HTMLCanvasElement;
  let canvas2: HTMLCanvasElement;
  let cx: CanvasRenderingContext2D | null;
  let cx2: CanvasRenderingContext2D | null;
  let is_stop: boolean;
  const [type, setType] = useState('pencil');
  const [position, setPosition] = useState<Array<Position>>([]);
  type DrawType = 'pencil' | 'line' | 'rect' | 'arc';
  const typeRef = useRef<DrawType>(type as DrawType);
  const positionRef = useRef(position);

  const drawType = (num: DrawType) => {
    setType(num);
    typeRef.current = num;
  };

  const pencil = (ctx: CanvasRenderingContext2D, position: Array<{ x: number; y: number }>) => {
    position.forEach((item, index) => {
      if (index === 0) {
        ctx?.beginPath();
        ctx?.moveTo(item.x, item.y);
      } else if (index !== 0 && index === position.length - 1) {
        ctx?.lineTo(item.x, item.y);
        ctx?.stroke();
      } else {
        ctx?.lineTo(item.x, item.y);
      }
    });
  };

  const line = (ctx: CanvasRenderingContext2D, position: Array<{ x: number; y: number }>) => {
    ctx?.beginPath();
    ctx?.moveTo(position[0].x, position[0].y);
    ctx?.lineTo(position[position.length - 1].x, position[position.length - 1].y);
    ctx?.stroke();
  };

  const rect = (ctx: CanvasRenderingContext2D, position: Array<{ x: number; y: number }>) => {
    ctx?.beginPath();
    ctx?.rect(
      position[0].x,
      position[0].y,
      position[position.length - 1].x - position[0].x,
      position[position.length - 1].y - position[0].y,
    );
    ctx?.stroke();
  };

  const arc = (ctx: CanvasRenderingContext2D, position: Array<{ x: number; y: number }>) => {
    ctx?.beginPath();
    ctx?.arc(
      position[position.length - 1].x,
      position[position.length - 1].y,
      Math.abs(position[position.length - 1].x - position[0].x),
      0,
      Math.PI * 2,
    );
    ctx?.stroke();
  };

  const reset = (canvasElement: HTMLCanvasElement) => {
    is_stop = false;
    setPosition([]);
    if (canvasElement !== null) {
      canvas = canvasElement;
      cx = canvas.getContext('2d');
      cx?.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const stroke = (ctx: CanvasRenderingContext2D) => {
    positionRef.current.forEach((item) => {
      switch (item.type) {
        case 'pencil':
          pencil(ctx, item.position);
          break;
        case 'line':
          line(ctx, item.position);
          break;
        case 'rect':
          rect(ctx, item.position);
          break;
        case 'arc':
          arc(ctx, item.position);
          break;
        default:
          console.log(typeRef.current);
          break;
      }
    });
  };

  const mousedown = ({ offsetX, offsetY }: Offset) => {
    position.push({ type: typeRef.current, delete: false, position: [{ x: offsetX, y: offsetY }] });
    setPosition(position);
    is_stop = true;
  };

  const mouseup = () => {
    cx2?.clearRect(0, 0, canvas2?.width, canvas2?.height);
    if (cx !== null) stroke(cx);
    is_stop = false;
  };

  const mousemove = ({ offsetX, offsetY }: Offset) => {
    if (is_stop && positionRef.current.length > 0) {
      position[position.length - 1].position.push({ x: offsetX, y: offsetY });
      setPosition(position);
      cx2?.clearRect(0, 0, canvas2?.width, canvas2?.height);
      if (cx2 !== null) stroke(cx2);
    }
  };

  const mouseleave = () => {
    cx2?.clearRect(0, 0, canvas2?.width, canvas2?.height);
    if (cx !== null) stroke(cx);
    is_stop = false;
  };

  // const back = (cx: CanvasRenderingContext2D) => {
  //   if (position.length > 0) {
  //     position[position.length - 1].delete = true;
  //     setPosition(position);
  //     cx?.clearRect(0, 0, canvas.width, canvas.height);
  //     stroke(cx);
  //   }
  // }

  // const forward = (cx: CanvasRenderingContext2D) => {
  //   if (position.length > 0) {
  //     position[position.length - 1].delete = false;
  //     setPosition(position);
  //     cx?.clearRect(0, 0, canvas.width, canvas.height);
  //     stroke(cx);
  //   }
  // }

  const init = (canvasElement: HTMLCanvasElement, canvasElement2: HTMLCanvasElement) => {
    is_stop = false;
    setPosition([]);
    if (canvasElement !== null && canvasElement2 !== null) {
      canvas = canvasElement;
      canvas2 = canvasElement2;
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
  };

  const remove = () => {
    if (canvas && canvas2) {
      canvas.removeEventListener('mousedown', mousedown);
      canvas.removeEventListener('mouseup', mouseup);
      canvas.removeEventListener('mousemove', mousemove);
      canvas.removeEventListener('mouseleave', mouseleave);
      canvas2.removeEventListener('mousedown', mousedown);
      canvas2.removeEventListener('mouseup', mouseup);
      canvas2.removeEventListener('mousemove', mousemove);
      canvas2.removeEventListener('mouseleave', mouseleave);
      cx2?.clearRect(0, 0, canvas2?.width, canvas2?.height);
      cx?.clearRect(0, 0, canvas?.width, canvas?.height);
    }
  };

  return {
    init,
    drawType,
    remove,
    reset,
  };
}

export default useDraw;
