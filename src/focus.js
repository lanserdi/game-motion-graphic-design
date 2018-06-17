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
        let width = 300;
        let height = 300;

        this.layer = new Layer(eleWrap);
        this.layer.setCanvasSize(300, 300);

        this.x = width/2;
        this.y = height/2;
        this.scale = 2;
	}
}