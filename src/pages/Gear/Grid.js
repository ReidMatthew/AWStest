import p5 from "p5";

export default class Grid {
    /**
     * @param {p5} p5 
     */
    constructor(p5, width, height, color) {
        this.p5 = p5;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    render = () => {
        this.p5.background(this.color);
    }
}