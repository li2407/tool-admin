import React, { useEffect, useRef } from 'react';
import Line from './Lines';
import './index.css';

interface CanvasProps {
  width: number;
  height: number;
}

const CanvasLine: React.FC<CanvasProps> = ({ width, height }) => {
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
      label: '线',
      icon: '/icons/line.png',
    },
    {
      value: 4,
      label: '矩',
      icon: '/icons/rectangle.png',
    },
    {
      value: 5,
      label: '圆',
      icon: '/icons/circle.png',
    },
    {
      value: 6,
      label: '重置',
      icon: '/icons/reset.png',
    },
  ];

  useEffect(() => {
    if (canvasRef.current) {
      const line = new Line({ canvas: canvasRef.current });
      line.init();
      return () => {
        line.remove();
      };
    }
  }, []);

  return (
    <>
      <div className="meun">
        {meun.map((item) => (
          <img src={item.icon} key={item.value}></img>
        ))}
      </div>
      <canvas width={width} height={height} ref={canvasRef}></canvas>
    </>
  );
};

export default CanvasLine;
