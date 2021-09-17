"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
class Context {
    constructor(initialState) {
        this.changeState(initialState);
    }
    changeState(state) {
        this.state = state;
        state.setContext(this);
    }
    pressX() {
        this.state.pressX();
    }
    pressBola() {
        this.state.pressBola();
    }
    pressTriangulo() {
        this.state.pressTriangulo();
    }
    pressQuadrado() {
        this.state.pressQuadrado();
    }
}
exports.Context = Context;
