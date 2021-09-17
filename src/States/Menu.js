"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const StateInterface_1 = require("../Interfaces/StateInterface");
const StoryMode_1 = require("./StoryMode");
class Menu extends StateInterface_1.StateInterface {
    pressX() {
        console.log("Go to Story Mode");
        this.alternateState(new StoryMode_1.StoryMode());
    }
    pressBola() {
        console.log("Method not implemented.");
    }
    pressTriangulo() {
        console.log("Method not implemented.");
    }
    pressQuadrado() {
        console.log("Method not implemented.");
    }
}
exports.Menu = Menu;
