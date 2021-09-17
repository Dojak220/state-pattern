"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateInterface = void 0;
class StateInterface {
    setContext(context) {
        this.context = context;
    }
    alternateState(state) {
        this.context.changeState(state);
    }
}
exports.StateInterface = StateInterface;
