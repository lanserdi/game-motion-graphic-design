export default class Component {
	constructor(){
		this.init()
	}
	init(){
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d')
	}
}