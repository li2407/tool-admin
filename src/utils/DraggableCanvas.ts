
interface strokLine {
    card: HTMLDivElement,
    position: {
        x: number,
        y: number
    }
}

let cx = null

function strokLine({ card, position } : strokLine) {

    const init = () => {
        let canvas : HTMLCanvasElement = document.getElementById('draggable-canvas');
        if (canvas != null) {
            cx = canvas.getContext('2d');
        }
    }

    return {
        init
    }
}
