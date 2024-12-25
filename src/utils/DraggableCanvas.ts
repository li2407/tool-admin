interface Position {
    x: number,
    y: number,
    parint_id: string
}

interface PositionList {
    [key: string]: Position
}

let cx: CanvasRenderingContext2D | null;
let width = 0;
let height = 0;

let positionMap : PositionList = {};

export const init = (canvas : HTMLCanvasElement) => {
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;
    cx = canvas.getContext('2d');
}

export const setList = (position: Position, id: string) => {
    positionMap = {
        ...positionMap,
        [id]: position
    };
    line();
}

export const line = () => {
    cx?.clearRect(0, 0, width, height);
    for (let key in positionMap) {
        let data = positionMap[key];
        if (positionMap[data.parint_id] != null) {
            let parint_data = positionMap[data.parint_id];
            cx?.beginPath();
            cx?.moveTo(parint_data.x, parint_data.y);
            cx?.lineTo(data.x, data.y);
            cx?.stroke();
            cx?.closePath();
            cx?.fill();
        }
    }
}
