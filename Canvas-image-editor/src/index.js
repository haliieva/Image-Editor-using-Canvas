import {
    mousedownHandler,
    mouseupHandler,
    mousemoveHandler
} from './handlers.js';

import {
    canvas,
    clearCanvas
} from './vars.js';

const imageEditor = {
    ctx: canvas.getContext('2d'),
    isEditMode: false,
    coords: {
        x1: null,
        y1: null,
        x2: null,
        y2: null
    }
};

canvas.addEventListener('mousedown', mousedownHandler);

canvas.addEventListener('mouseup', mouseupHandler);

canvas.addEventListener('mousemove', mousemoveHandler);

clearCanvas.onclick = () => imageEditor.ctx.clearRect(0, 0, canvas.width, canvas.height);

export default imageEditor;