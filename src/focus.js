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
        let width = 200;
        let height = 200;

        this.layer = new Layer(eleWrap);
        this.layer.setCanvasSize(width, height);

        this.x = width/2;
        this.y = height/2;
        this.scale = 1;
	}
    drawSingleArc(ctx){
        this.line1 == undefined ? this.line1 = 0 : null;
        this.line1Speed == undefined ? this.line1Speed = true : null;
        if(this.line1Speed){
            this.line1 += .05;
            if(this.line1 > 10) this.line1Speed = false;
        }else{
            this.line1 -= .1;
            if(this.line1 < 0) this.line1Speed = true;
        }

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
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, 80, Math.PI/180 * 75, Math.PI/180 * 85, false);
        ctx.lineTo(10, this.line1);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(10, this.line1);
        ctx.stroke();

        ctx.restore();
    }
    drawOuterSingleArc(ctx){
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
        ctx.arc(0, 0, 85, 0, Math.PI/180 * 20, false);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, 75, Math.PI/180 * 40, Math.PI/180 * 80, false);
        ctx.stroke();

        ctx.restore();
    }
    drawOuterCircle(ctx){
        this.outerCircleAngle == undefined ? this.outerCircleAngle = 0 : null;
        this.outerCircleAngle -= .2;

        ctx.save();
        ctx.translate(this.layer.layerWidth/2, this.layer.layerHeight/2);
        ctx.scale(1, .5);
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
        ctx.scale(1, .5);
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