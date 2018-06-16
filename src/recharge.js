import Layer from './layer';
import Component from './component';
/*
[property]
    layer: HTMLDivElement
    animationId: number
    minLight: number
    maxLight: number
    lightProgress: number
    fires: Array<any>
    lightSpeed: number
[method]
    drawBag
    drawLight
    getFire
    getFires
    updateFire
    drawFire
    startAni
    stopAni
    render
*/
export class Recharge extends Component{
    constructor(eleWrap){
        super();

        this.layer = new Layer(eleWrap);

        this.x = 60;
        this.y = 200;
        this.scale = 3;

        this.animationId = null;
        this.minLight = .3;
        this.maxLight = .6;
        this.lightProgress = this.minLight;
        this.fires = this.getFires();
    }
    drawBag(ctx){
        ctx.save();
        ctx.shadowColor = 'hsla(40, 70%, 50%, 1)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.translate(this.x, this.y);
        ctx.scale(this.scale, this.scale);
        ctx.beginPath();
        ctx.moveTo(0, -1);
        ctx.lineTo(4, 0);
        ctx.lineTo(8, -6);
        ctx.lineTo(3, -5);
        ctx.lineTo(0, -9);
        ctx.lineTo(-3, -5);
        ctx.lineTo(-8, -6);
        ctx.lineTo(-4, 0);
        ctx.closePath();
        ctx.lineJoin = 'round';
        ctx.strokeStyle = 'hsl(60, 80%, 50%)';
        ctx.lineWidth = 1;
        ctx.stroke();
        var _LG = ctx.createLinearGradient(0, 0, 0, -10);
        _LG.addColorStop(0, 'hsl(60, 80%, 50%)');
        _LG.addColorStop(1, 'hsl(60, 80%, 50%)');
        ctx.fillStyle = _LG;
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.shadowColor = 'hsla(40, 70%, 50%, 1)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.translate(this.x, this.y + 6);
        ctx.scale(this.scale, this.scale * .87);
        ctx.beginPath();
        ctx.arc(0, 10, 11, 0, Math.PI * 2, true);
        ctx.strokeStyle = 'hsla(60, 80%, 50%, 1)';
        ctx.lineWidth =
        ctx.stroke();
        var _LG = ctx.createLinearGradient(0, 0, 0, 30);
        _LG.addColorStop(0, 'hsl(60, 80%, 50%)');
        _LG.addColorStop(1, 'hsl(60, 80%, 50%)');
        ctx.fillStyle = _LG;
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.translate(this.x, this.y + 28);
        ctx.rotate(Math.PI/180 * -14);
        ctx.scale(this.scale, this.scale);
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.font = 'normal 700 13px "微软雅黑"';
        ctx.fillStyle = 'hsl(30, 90%, 48%)';
        ctx.fillText('S', 0, 0);
        ctx.restore();
    }
    drawLight(ctx){
        !this.lightSpeed ? this.lightSpeed = 1 : null;
        if(this.lightSpeed > 0){
            this.lightProgress += .005;
            if(this.lightProgress > this.maxLight) this.lightSpeed = -1;
        }else{
            this.lightProgress -= .01;
            if(this.lightProgress < this.minLight) this.lightSpeed = 1;
        }

        var _RG = ctx.createRadialGradient(0, 0, 0, 0, 0, 25);
        _RG.addColorStop(0, 'hsla(60, 80%, 50%, '+this.lightProgress+')');
        _RG.addColorStop(1, 'hsla(60, 80%, 50%, 0)');

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.scale * .9, this.scale * 1);
        ctx.beginPath();
        ctx.arc(0, 0, 30, 0, Math.PI * 2, true);
        ctx.fillStyle = _RG;
        ctx.fill();
        ctx.restore();
    }
    getFire(){
        var x = -10 + Math.random() * 40, y = -20 + Math.random() * 50;
        var targetX = x + 20 + Math.random() * 30;
        var targetY = y - 20 - Math.random() * 20;
        var fire = {
            x: x,
            y: y,
            targetX: targetX,
            targetY: targetY,
            speedX: .2 + Math.random() * .15,
            speedY: .1 + Math.random() * .4,
            size: .4 + Math.random() * .5,
        };
        return fire;
    }
    getFires(){
        var fires = [];
        for(var i = 0; i < 15; i++){
            fires.push(this.getFire());
        }
        return fires;
    }
    updateFire(ctx){
        for(var i = 0; i < this.fires.length; i++){
            var fire = this.fires[i];
            fire.x += fire.speedX;
            fire.y -= fire.speedY;

            if(fire.y < fire.targetY){
                var _fire = this.getFire();
                fire.x = _fire.x;
                fire.y = _fire.y;
                fire.speedX = _fire.speedX;
                fire.speedY = _fire.speedY;
                fire.targetX = _fire.targetX;
                fire.targetY = _fire.targetY;
                fire.size = _fire.size;
            }
        }
    }
    drawFire(ctx){
        this.updateFire();
        var x = this.x + 12, y = this.y + 25, scale = this.scale;
        for(var i = 0; i < this.fires.length; i++){
            var fire = this.fires[i];
            ctx.save();
            ctx.shadowColor = 'hsla(60, 100%, 50%, 1)';
            ctx.shadowBlur = 15;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.translate(x, y);
            ctx.translate(fire.x, fire.y);
            ctx.scale(scale, scale);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, fire.size, 0, Math.PI*2, true);
            ctx.fillStyle = 'hsla(60, 100%, 50%, 1)';
            ctx.fill();
            ctx.restore();
        }
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
    render(){
        var ctx = this.layer.context;
        this.drawBag(ctx);
        this.drawLight(ctx);
        this.drawFire(ctx);
    }
}


