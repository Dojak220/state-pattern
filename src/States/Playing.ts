import { StateInterface } from "../Interfaces/StateInterface";
import { StoryMode } from "./StoryMode";

class Playing extends StateInterface {
  pressX(): void {
    console.log("Rasteira");
  }
  pressBola(): void {
    console.log("Soco!");
  }
  pressTriangulo(): void {
    console.log("Back to StoryMode");
    this.alternateState(new StoryMode());
  }
  pressQuadrado(): void {
    console.log("Especial!");
  }
}

export { Playing };