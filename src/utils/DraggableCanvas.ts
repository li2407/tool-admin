
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
        if (document.getElementById('draggable-canvas') != null) {
            let canvas : HTMLCanvasElement = document.getElementById('draggable-canvas');
            if (canvas != null) {
                cx = canvas.getContext('2d');
            }
        }
    }

    return {
        
    }
}
