import {
    lineWidthElem,
    strokeStyleElem
} from './vars.js';

import imageEditor from './index.js';

export const mousedownHandler = event => {
    imageEditor.isEditMode = true;

    imageEditor.ctx.lineCap = 'round';
    imageEditor.ctx.lineWidth = lineWidthElem.value;
    imageEditor.ctx.strokeStyle = strokeStyleElem.value;

    imageEditor.coords.x1 = event.offsetX;
    imageEditor.coords.y1 = event.offsetY;


};

export const mouseupHandler = event => {
    imageEditor.isEditMode = false;
};

export const mousemoveHandler = event => {
    if (!imageEditor.isEditMode) return;

    imageEditor.coords.x2 = event.offsetX;
    imageEditor.coords.y2 = event.offsetY;

    imageEditor.ctx.beginPath();
    imageEditor.ctx.moveTo(imageEditor.coords.x1, imageEditor.coords.y1);
    imageEditor.ctx.lineTo(imageEditor.coords.x2, imageEditor.coords.y2);
    imageEditor.ctx.stroke();
    imageEditor.ctx.closePath();

    imageEditor.coords.x1 = imageEditor.coords.x2;
    imageEditor.coords.y1 = imageEditor.coords.y2;
};