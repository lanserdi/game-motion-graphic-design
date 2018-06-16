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
		this.layerWidth = 300;
		this.layerHeight = 300;

		this.canvas = document.createElement('canvas');
		this.canvas.width = this.layerWidth;
		this.canvas.height = this.layerHeight;
		this.canvas.style = `width:${this.layerWidth}px;height:${this.layerHeight}px;`;
		this.context = this.canvas.getContext('2d');

		eleWrap.appendChild(this.canvas);
	}
}