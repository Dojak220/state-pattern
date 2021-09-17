"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playing = void 0;
const StateInterface_1 = require("../Interfaces/StateInterface");
const StoryMode_1 = require("./StoryMode");
class Playing extends StateInterface_1.StateInterface {
    pressX() {
        console.log("Rasteira");
    }
    pressBola() {
        console.log("Soco!");
    }
    pressTriangulo() {
        console.log("Back to StoryMode");
        this.alternateState(new StoryMode_1.StoryMode());
    }
    pressQuadrado() {
        console.log("Especial!");
    }
}
exports.Playing = Playing;
