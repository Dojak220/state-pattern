import { StateInterface } from "../Interfaces/StateInterface";
import { StoryMode } from "./StoryMode";

class Menu extends StateInterface {
  pressX(): void {
    console.log("Go to Story Mode");
    this.alternateState(new StoryMode());
  }
  pressBola(): void {
    console.log("Method not implemented.");
  }
  pressTriangulo(): void {
    console.log("Method not implemented.");
  }
  pressQuadrado(): void {
    console.log("Method not implemented.");
  }
}

export { Menu };