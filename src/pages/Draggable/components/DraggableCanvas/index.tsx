import { init } from '@/utils/DraggableCanvas'
import React, { useEffect, useRef } from "react";
import './index.css'

const DraggableCanvas : React.FC = () => {
    const canvas = useRef(null);
    useEffect(() => {
        if (canvas.current) {
            init(canvas.current);
        }
    })
    return <canvas ref={canvas} id="draggable-canvas"></canvas>
}

export default DraggableCanvas;