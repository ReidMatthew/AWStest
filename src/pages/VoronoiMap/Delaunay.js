import p5 from "p5";
import { Vector } from "p5";
import Voronoi from "./Voronoi";

export default class Delaunay {
    /**
     * @param {Voronoi} voronoi 
     */
    constructor(voronoi) {
        this.voronoi = voronoi;
        this.p5 = this.voronoi.p5;
        // this.tris = this.validate([...this.voronoi.centroids, ...[]])
    }

    render = () => {
        this.p5.push();
        this.p5.stroke("white");
        this.p5.noFill();
        this.p5.circle(this.c.x, this.c.y, this.c.z)
        this.p5.pop();
    }

    // validate = (centroids) => {
    //     this.voronoi.centroids.forEach()
    // }

    psudoCornerList = (v) => [
        this.p5.createVector(-1000 * v.x, -1000 * v.y),
        this.p5.createVector(1000 * v.x, -1000 * v.y),
        this.p5.createVector(-1000 * v.x, 1000 * v.y),
        this.p5.createVector(1000 * v.x, 1000 * v.y)
    ]

    midpoint = (v1, v2) => Vector.lerp(v1, v2, .5)

    slope = (v1, v2) => (v2.y - v1.y) / (v2.x - v1.x)

    intercept = (v1, s1, v2, s2) => {
        let x = (s1 * v1.x - s2 * v2.x + v2.y - v1.y) / (s1 - s2);
        return this.p5.createVector(x, s1 * (x - v1.x) + v1.y);
    }

    centerCircle = (v1, v2, v3) => {
        let midPoint1 = this.midpoint(v1, v2),
            midPoint2 = this.midpoint(v2, v3),
            slope1 = -1 / this.slope(v1, v2),
            slope2 = -1 / this.slope(v2, v3),
            center = this.intercept(midPoint1, slope1, midPoint2, slope2);
        return this.p5.createVector(center.x, center.y, 2 * center.dist(v1));
    }
}