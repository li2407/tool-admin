import React, { ReactNode, useEffect, useState } from 'react';
import './index.css';

interface Props {
  text: string;
  key: number;
  children: ReactNode;
  offsetTop: number;
  offsetLeft: number;
  initElement: () => void;
}

interface Position {
  x: number;
  y: number;
}

const DraggableCard: React.FC<Props> = ({ text, children, offsetLeft, offsetTop, initElement }) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragEnd = (e: any) => {
    if (e.clientX > 0 && e.clientY > 0) {
      let x = e.clientX - offsetLeft - offset.x;
      let y = e.clientY - offsetTop - offset.y;
      let max_x = e.target.offsetParent.offsetWidth - e.target.offsetWidth;
      let max_y = e.target.offsetParent.offsetHeight - e.target.offsetHeight;
      setPosition({
        x: x < 0 ? 0 : x > max_x ? max_x - e.clientWidth : x,
        y: y < 0 ? 0 : y > max_y ? max_y - e.clientHeight : y,
      });
    }
  };

  const dragStart = (e: any) => {
    setOffset({
      x: e.clientX - (e.target.offsetLeft + offsetLeft),
      y: e.clientY - (e.target.offsetTop + offsetTop),
    });
  };

  const drag = (e: any) => {
    if (e.clientX > 0 && e.clientY > 0) {
      let x = e.clientX - offsetLeft - offset.x;
      let y = e.clientY - offsetTop - offset.y;
      let max_x = e.target.offsetParent.offsetWidth - e.target.offsetWidth;
      let max_y = e.target.offsetParent.offsetHeight - e.target.offsetHeight;
      setPosition({
        x: x < 0 ? 0 : x > max_x ? max_x - e.clientWidth : x,
        y: y < 0 ? 0 : y > max_y ? max_y - e.clientHeight : y,
      });
    }
  };

  useEffect(() => {
    initElement();
  }, [position]);

  return (
    <div
      className="draggableCard"
      style={{ position: 'absolute', left: position.x, top: position.y }}
      onDragEnd={dragEnd}
      onDrag={drag}
      onDragStart={dragStart}
      onDrop={(e) => e.preventDefault()}
      onDragOver={(e) => e.preventDefault()}
      draggable="true"
    >
      {children}
      <span>{text}</span>
    </div>
  );
};

export default DraggableCard;
