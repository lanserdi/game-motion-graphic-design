var SComponent = function(eleCanvas){
    this.eleCanvas = eleCanvas;
    this.init();
}
SComponent.prototype.init = function(){
    var width = 180, height = 300;
    this.eleCanvas.width = width;
    this.eleCanvas.height = height;
    this.eleCanvas.style = 'width:'+width+'px; height:'+height+'px;';
    this.ctx = this.eleCanvas.getContext('2d');

    this.x = 60;
    this.y = 200;

    this.animationId = null;
    this.minLight = .3;
    this.maxLight = .6;
    this.lightProgress = this.minLight;
    this.fires = this.getFires();
}
SComponent.prototype.drawBag = function(ctx){
    var x = this.x, y = this.y, scale = 2;

    ctx.shadowColor = 'hsla(60, 100%, 50%, .8)';
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;

    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(4, 0);
    ctx.lineTo(7, -6);
    ctx.lineTo(3, -5);
    ctx.lineTo(0, -9);
    ctx.lineTo(-3, -5);
    ctx.lineTo(-7, -6);
    ctx.lineTo(-4, 0);
    ctx.closePath();
    ctx.lineJoin = 'round';
    ctx.strokeStyle = 'hsl(60, 80%, 50%)';
    ctx.lineWidth = 1;
    ctx.stroke();
    var _LG = ctx.createLinearGradient(0, 0, 0, -10);
    _LG.addColorStop(0, 'hsla(60, 80%, 50%, .1)');
    _LG.addColorStop(1, 'hsla(60, 80%, 50%, .8)');
    ctx.fillStyle = _LG;
    ctx.fillStyle = _LG;
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.translate(x, y + 5);
    ctx.scale(scale, scale);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(4, 0);
    ctx.quadraticCurveTo(7, 1, 10, 6);
    ctx.quadraticCurveTo(14, 14, 13, 16);
    ctx.quadraticCurveTo(13, 20, 0, 20);
    ctx.quadraticCurveTo(-9, 20, -10, 16);
    ctx.quadraticCurveTo(-11, 13, -9, 7);
    ctx.quadraticCurveTo(-7, 2, -4, 0);
    ctx.closePath();
    ctx.strokeStyle = 'hsl(60, 80%, 50%)';
    ctx.lineWidth = 1;
    ctx.stroke();
    var _LG = ctx.createLinearGradient(0, 0, 20, 20);
    _LG.addColorStop(0, 'hsla(60, 80%, 50%, .0)');
    _LG.addColorStop(1, 'hsla(60, 80%, 50%, .8)');
    ctx.fillStyle = _LG;
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.translate(x + 1, y + 22);
    ctx.scale(scale, scale);
    ctx.beginPath()
    ctx.moveTo(0, 0);
    ctx.lineTo(3, -3);
    ctx.moveTo(0, 0);
    ctx.lineTo(-3, -3);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 6);
    ctx.translate(0, 1);
    ctx.moveTo(-3, 0);
    ctx.lineTo(3, 0);
    ctx.translate(0, 2);
    ctx.moveTo(-3, 0);
    ctx.lineTo(3, 0);
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'hsl(60, 80%, 50%)';
    ctx.stroke();
    ctx.restore();
}
SComponent.prototype.drawLight = function(ctx){
    !this.lightSpeed ? this.lightSpeed = 1 : null;
    if(this.lightSpeed > 0){
        this.lightProgress += .005;
        if(this.lightProgress > this.maxLight) this.lightSpeed = -1;
    }else{
        this.lightProgress -= .01;
        if(this.lightProgress < this.minLight) this.lightSpeed = 1;
    }

    var x = this.x, y = this.y + 20, scale = 2;

    var _RG = ctx.createRadialGradient(0, 0, 0, 0, 0, 30);
    _RG.addColorStop(0, 'hsla(60, 80%, 50%, '+this.lightProgress+')');
    _RG.addColorStop(1, 'hsla(60, 80%, 50%, 0)');

    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale * .9, scale * .9);
    ctx.beginPath();
    ctx.arc(0, 0, 30, 0, Math.PI*2, true);
    ctx.fillStyle = _RG;
    ctx.fill();
    ctx.restore();
}
SComponent.prototype.getFire = function(){
    var x = -10 + Math.random() * 20, y = -20 + Math.random()*50;
    var targetX = x + 20 + Math.random() * 20;
    var targetY = y - 20 - Math.random() * 20;
    var fire = {
        x: x,
        y: y,
        targetX: targetX,
        targetY: targetY,
        speedX: .2 + Math.random() * .1,
        speedY: .1 + Math.random() * .4,
        size: .4 + Math.random() * .5,
    };
    return fire;
}
SComponent.prototype.getFires = function(){
    var fires = [];
    for(var i = 0; i < 15; i++){
        fires.push(this.getFire());
    }
    return fires;
}
SComponent.prototype.updateFire = function(ctx){
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
SComponent.prototype.drawFire = function(ctx){
    this.updateFire();
    var x = this.x + 12, y = this.y + 25, scale = 2;
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
SComponent.prototype.startAni = function(){
    this.animationId = window.requestAnimationFrame(function(){this.startAni()}.bind(this));
    var ctx = this.ctx;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.render();
}
SComponent.prototype.stopAni = function(){
    window.cancelAnimationFrame(this.animationId);
}
SComponent.prototype.render = function(){
    var ctx = this.ctx;
    this.drawBag(ctx);
    this.drawLight(ctx);
    this.drawFire(ctx);
}


var scomponent1 = new SComponent(document.querySelector('#canvas1'));
scomponent1.startAni();

var scomponent2 = new SComponent(document.querySelector('#canvas2'));
scomponent2.startAni();

var scomponent3 = new SComponent(document.querySelector('#canvas3'));
scomponent3.startAni();
