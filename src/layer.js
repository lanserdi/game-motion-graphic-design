/*
[property]
	eleWrap: HTMLDivElement
	ratio: number
	layerWidth: 300
	layerHeight: 300
	canvas: HTMLCanvasElement
	context: CanvasRenderingContext2D
[method]
*/
export default class Layer {
	constructor(eleWrap){
		this.eleWrap = eleWrap;

		this.ratio = window.devicePixelRatio;
		this.layerWidth = null;
		this.layerHeight = null;

		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');

		eleWrap.appendChild(this.canvas);
	}
	setCanvasSize(width, height){
		width = width || 400;
		height = height || 400;
		this.canvas.width = this.layerWidth = width * this.ratio;
		this.canvas.height = this.layerHeight = height * this.ratio;
		this.canvas.style = `width:${width}px;height:${height}px;`;
	}
}