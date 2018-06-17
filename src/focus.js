import Layer from './layer';
import Component from './component';
/*
[property]
    layer: HTMLDivElement
[method]
*/
export class Focus extends Component{
	constructor(eleWrap){
		super();
        let width = 240;
        let height = 200;

        this.layer = new Layer(eleWrap);
        this.layer.setCanvasSize(width, height);

        this.x = width/2;
        this.y = height/2;
        this.scale = 1;
	}
    drawSingleArc(ctx){

        ctx.save();
        ctx.shadowColor = 'hsl(30, 100%, 50%)';
        ctx.shadowBlur = 15;
        ctx.scale(this.layer.ratio, this.layer.ratio);
        ctx.scale(this.scale, this.scale);

        ctx.strokeStyle = 'hsl(53, 100%, 50%)';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.arc(0, 0, 80, 0, Math.PI/180 * 70, false);
        ctx.arc(0, 0, 92, Math.PI/180 * 72, Math.PI/180 * 50, true);
        ctx.lineTo(60, 62);
        ctx.arc(0, 0, 86, Math.PI/180 * 40, Math.PI/180 * 28, true);
        ctx.lineTo(82, 33);
        ctx.arc(0, 0, 92, Math.PI/180 * 20, Math.PI/180 * 0, true);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = 'hsla(53, 100%, 50%, .05)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(0, 0, 80, Math.PI/180 * 75, Math.PI/180 * 86, false);
        ctx.lineTo(6, 106);
        ctx.lineTo(15, 115);
        ctx.lineTo(24, 106);
        ctx.closePath()
        ctx.stroke();
        ctx.fill();

        ctx.restore();
    }
    drawOuterSingleArc(ctx){
        ctx.save();
        ctx.shadowColor = 'hsl(30, 100%, 50%)';
        ctx.shadowBlur = 20;
        ctx.scale(this.layer.ratio, this.layer.ratio);
        ctx.scale(this.scale, this.scale);

        ctx.strokeStyle = 'hsl(53, 100%, 50%)';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.stroke();

        ctx.restore();
    }
    drawOuterCircle(ctx){
        this.outerCircleAngle == undefined ? this.outerCircleAngle = 0 : null;
        this.outerCircleAngle -= .2;

        ctx.save();
        ctx.translate(this.layer.layerWidth/2, this.layer.layerHeight/2);
        ctx.scale(1, .6);
        ctx.rotate(Math.PI/180 * this.outerCircleAngle);
        for(let i=0; i<4; i++){
            ctx.save();
            ctx.rotate(Math.PI/180 * i * 90);
            this.drawOuterSingleArc(ctx);
            ctx.restore();
        }
        ctx.restore();
    }
    drawCircle(ctx){
        this.circleAngle == undefined ? this.circleAngle = 0 : null;
        this.circleAngle += .2;

        ctx.save();
        ctx.translate(this.layer.layerWidth/2, this.layer.layerHeight/2);
        ctx.scale(1, .6);
        ctx.rotate(Math.PI/180 * this.circleAngle);
        for(let i=0; i<4; i++){
            ctx.save();
            ctx.rotate(Math.PI/180 * i * 90);
            this.drawSingleArc(ctx);
            ctx.restore();
        }
        ctx.restore();
    }
    render(){
        let ctx = this.layer.context;
        this.drawCircle(ctx);
        this.drawOuterCircle(ctx);
    }
}