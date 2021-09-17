import { Context } from "../Context";

export abstract class StateInterface {
  protected context: Context

  setContext(context: Context): void {
    this.context = context;
  }

  alternateState(state: StateInterface): void {
    this.context.changeState(state);
  }

  abstract pressX(): void;
  abstract pressBola(): void;
  abstract pressTriangulo(): void;
  abstract pressQuadrado(): void;
  }