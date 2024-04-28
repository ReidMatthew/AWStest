import { Vector } from "p5";

// /** @type {import("p5")} */
// var p5;

export default class Interactable {
    /**
     * @param {Object} options 
     * @param {p5.Vector} options.origin 
     * @param {p5.Vector} options.dim 
     * @param {p5.Color} options.color 
     * @param {p5.Color} options.stroke 
     * @param {Boolean} options.isStatic 
     */
    constructor({ p5, origin = p5.createVector(0, 0), dim = p5.createVector(10, 10, 10), color = p5.color("black"), isStatic = false, stroke = p5.color("black") }) {
        this.p5 = p5;
        this.origin = origin;
        this.dim = dim;
        this.color = color;
        this.isStatic = isStatic;
        this.stroke = stroke;

        this.center = this._getCenter();
    }

    render() {
        this.p5.push();
        this.p5.stroke(this.stroke);
        this.p5.fill(this.color);
        this.show();

        this.p5.pop();
    }

    show() {
        this.p5.rect(this.origin.x, this.origin.y, this.dim.x, this.dim.y);
    }

    contains() {

    }

    _getCenter() {
        return Vector.lerp(this.origin, Vector.add(this.origin, this.dim), 0.5);
    }
}
