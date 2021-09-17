"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryMode = void 0;
const StateInterface_1 = require("../Interfaces/StateInterface");
const Menu_1 = require("./Menu");
const Playing_1 = require("./Playing");
class StoryMode extends StateInterface_1.StateInterface {
    pressX() {
        console.log("Let's play!!");
        this.alternateState(new Playing_1.Playing());
    }
    pressBola() {
        console.log("Method not implemented.");
    }
    pressTriangulo() {
        console.log("Go back to Initial Menu");
        this.alternateState(new Menu_1.Menu());
    }
    pressQuadrado() {
        console.log("Method not implemented.");
    }
}
exports.StoryMode = StoryMode;
