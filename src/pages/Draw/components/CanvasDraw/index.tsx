import React, { useEffect, useRef, useState } from 'react';
import useDraw from './Draw';
import './index.css';

interface CanvasProps {
  width: number;
  height: number;
}

const CanvasDraw: React.FC<CanvasProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const meun = [
    {
      value: 1,
      label: '回退',
      icon: '/icons/back.png',
    },
    {
      value: 2,
      label: '前进',
      icon: '/icons/forward.png',
    },
    {
      value: 3,
      label: '笔',
      icon: '/icons/pencil.png'
    },
    {
      value: 4,
      label: '线',
      icon: '/icons/line.png',
    },
    {
      value: 5,
      label: '矩',
      icon: '/icons/rectangle.png',
    },
    {
      value: 6,
      label: '圆',
      icon: '/icons/circle.png',
    },
    {
      value: 7,
      label: '重置',
      icon: '/icons/reset.png',
    },
  ];
  const [type, setType] = useState(0);
  const { init, remove, drawType } = useDraw();


  const typeSelect = (type: number) : void => {
    setType(type);
    switch(type) {
      case 3: 
        drawType('pencil');
        break;
      case 4: 
        drawType('line');
        break;
      case 5: 
        drawType('rect');
        break;
      case 6: 
        drawType('arc');
        break;
      default:
        console.log(type);
        break;
    }
  }

  useEffect(() => {
    if (canvasRef.current) {
      init(canvasRef.current);
      return () => {
        remove();
      };
    }
  });

  return (
    <>
      <div className="meun">
        {meun.map((item) => (
          <div style={{ backgroundColor: type == item.value && type > 2 && type < 7 ? '#eee' : 'transparent', }}>
            <img onClick={() => typeSelect(item.value)} style={{ 
              width: item.value == 3 ? '30px' : '20px',
              height: item.value == 3 ? '30px' : '20px',
            }} src={item.icon} key={item.value}></img>
          </div>
        ))}
      </div>
      <canvas width={width} height={height} ref={canvasRef}></canvas>
    </>
  );
};

export default CanvasDraw;
