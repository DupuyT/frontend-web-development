import Box from "./box.js";

export default class RedBox extends Box{
    constructor(width, height, x, y){
        super("#A40E4C", width, height, x, y);
    }


onMouseEnter() {
    this.el.style.backgroundColor = "#0504A3"
}

onMouseLeave(){
    this.el.style.backgroundColor = "#A5054C"

}
};