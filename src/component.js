/*
[property]
	x: number
	y: number
	scale: number
[method]
	startAni
	stopAni
*/
export default class Component {
	constructor(){
		this.x = 0;
		this.y = 0;
		this.scale = 1;

		this.animationId = null;
		this.layer = null;
	}
	render(){

	}
    startAni(){
        this.animationId = window.requestAnimationFrame(function(){this.startAni()}.bind(this));
        var ctx = this.layer.context;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.render();
    }
    stopAni(){
        window.cancelAnimationFrame(this.animationId);
    }
}