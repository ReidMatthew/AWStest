import p5 from "p5";
import Delaunay from "./Delaunay";

export default class Voronoi {
    /**
     * @param {p5} p5 
     */
    constructor(p5, width, height) {
        this.p5 = p5;
        this.width = width;
        this.height = height;
        this.centroids = this.generateCentroids(10);
        this.delaunay = new Delaunay(this);
    }

    render = () => {
        this.renderCentroids();
    }

    renderCentroids = () => {
        this.p5.push();
        this.centroids.forEach(c => this.p5.circle(c.x, c.y, c.z || 4))
        this.p5.pop();
    }

    randomVector = (z) => this.p5.createVector(this.p5.random(this.width), this.p5.random(this.height), z)

    generateCentroids = (n) => Array(n).fill().map(() => this.randomVector(4))
}