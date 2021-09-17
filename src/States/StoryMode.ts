import { StateInterface } from "../Interfaces/StateInterface";
import { Menu } from "./Menu";
import { Playing } from "./Playing";

class StoryMode extends StateInterface {
  pressX(): void {
    console.log("Let's play!!");
    this.alternateState(new Playing());
  }
  pressBola(): void {
    console.log("Method not implemented.");
  }
  pressTriangulo(): void {
    console.log("Go back to Initial Menu");
    this.alternateState(new Menu());
  }

  pressQuadrado(): void {
    console.log("Method not implemented.");
  }
}

export { StoryMode };