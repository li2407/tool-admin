import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import CanvasLine from '../CanvasLine';

const LineContent: React.FC = () => {
  const content = useRef(null);
  const [style, setStyle] = useState({ width: 0, height: 0 });
  useEffect(() => {
    if (content.current) {
      let width: number = content.current.clientWidth;
      let height: number = content.current.clientHeight;
      setStyle({ width: width, height: height });
    }
  }, [style.width, style.height]);

  return (
    <div ref={content} className="line-content">
      <CanvasLine width={style.width} height={style.height}></CanvasLine>
    </div>
  );
};

export default LineContent;
