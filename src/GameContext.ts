import { StateInterface } from "./Interfaces/StateInterface";

export class Context {
  protected state: StateInterface;

  constructor(initialState: StateInterface) {
    this.changeState(initialState);
  }

  public changeState(state: StateInterface): void {
    this.state = state;
    state.setContext(this);
  }

  public pressX(): void {
    this.state.pressX();
  }

  public pressBola(): void {
      this.state.pressBola();
  }

  public pressTriangulo(): void {
      this.state.pressTriangulo();
  }

  public pressQuadrado(): void {
      this.state.pressQuadrado();
  }
}