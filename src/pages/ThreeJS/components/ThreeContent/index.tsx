import React, { useRef, useEffect, useState } from 'react';

const ThreeContent: React.FC = () => {
  const content = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ width: 0, height: 0 });
  useEffect(() => {
    if (content.current) {
      let width: number = content.current.clientWidth;
      let height: number = content.current.clientHeight - 40;
      setStyle({ width: width, height: height });
    }
  }, [style.width, style.height]);

  return <div ref={content} className="threejs-content"></div>;
};

export default ThreeContent;
