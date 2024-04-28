import Sketch from "react-p5";
import p5 from "p5";
import Voronoi from "./VoronoiMap/Voronoi.js"

const width = 500, height = 500;
let x = 50, y = 50;
let v;

export default (props) => {
  /**
   * @param {p5} p5
   * @param {HTMLElement} canvasParentRef
   */
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
    console.log(p5.createVector(width / width, height / 2));
    v = new Voronoi(p5, width, height);
  };
  /**
   * @param {p5} p5 
   */
  const draw = (p5) => {
    p5.background(0);
    v.render();
  };

  return <Sketch setup={setup} draw={draw} />;
};