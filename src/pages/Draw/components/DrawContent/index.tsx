import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import Draw from '../Draw/index';

const DrawContent: React.FC = () => {
  const content = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ width: 0, height: 0 });
  useEffect(() => {
    if (content.current) {
      let width: number = content.current.clientWidth;
      let height: number = content.current.clientHeight - 40;
      setStyle({ width: width, height: height });
    }
  }, [style.width, style.height]);

  return (
    <div ref={content} className="draw-content">
      <Draw width={style.width} height={style.height}></Draw>
    </div>
  );
};

export default DrawContent;
