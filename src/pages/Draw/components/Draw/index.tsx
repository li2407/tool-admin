import React, { useEffect, useRef, useState } from 'react';
import useDraw from './DrawCanvas';
import './index.css';

interface CanvasProps {
  width: number;
  height: number;
}

const CanvasDraw: React.FC<CanvasProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasRef2 = useRef<HTMLCanvasElement>(null);
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
      icon: '/icons/pencil.png',
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
  const [type, setType] = useState(3);
  const { init, remove, drawType, back, forward, reset } = useDraw();

  const typeSelect = (num: number): void => {
    if (num >= 3 && num <= 6) {
      setType(num);
      switch (num) {
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
    } else {
      switch (num) {
        case 1:
          back();
          break;
        case 2:
          forward();
          break;
        case 7:
          reset();
          break;
        default:
          console.log(type);
          break;
      }
    }
  };

  useEffect(() => {
    if (canvasRef.current && canvasRef2.current) {
      init(canvasRef.current, canvasRef2.current);
      return () => {
        remove();
      };
    }
  }, []);

  return (
    <>
      <div className="meun">
        {meun.map((item) => (
          <div
            key={item.value}
            style={{
              backgroundColor: type === item.value && type > 2 && type < 7 ? '#eee' : 'transparent',
              width: '30px',
              height: '30px',
              borderRadius: '5px',
            }}
          >
            <img
              onClick={() => typeSelect(item.value)}
              style={{
                width: item.value === 3 ? '30px' : '20px',
                height: item.value === 3 ? '30px' : '20px',
              }}
              src={item.icon}
            ></img>
          </div>
        ))}
      </div>
      <canvas width={width} height={height} ref={canvasRef}></canvas>
      <canvas
        style={{ position: 'absolute', zIndex: 3, backgroundColor: 'transparent', top: '60px' }}
        width={width}
        height={height}
        ref={canvasRef2}
      ></canvas>
    </>
  );
};

export default CanvasDraw;
