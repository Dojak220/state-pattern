"use strict";
/// main.js: Arquivo principal
///
/// Para inicializar o "jogo", basta executar os seguintes comandos no terminal:
///
/// $ cd src
/// $ node main.js
///
///
/// Sugiro executar o comando abaixo, caso queria realizar mudanças no código.
/// Isso garante que os aquivos .js sejam gerados automaticamente ao salvar.
///
/// $ tsc -w -p .
///
Object.defineProperty(exports, "__esModule", { value: true });
const GameContext_1 = require("./GameContext");
const Menu_1 = require("./States/Menu");
function main() {
    console.log("State Game");
    const context = new GameContext_1.Context(new Menu_1.Menu());
    // Initial Menu
    context.pressX(); // Go to Story Mode
    // Story Mode
    context.pressTriangulo(); // Go back to Initial Menu
    // Initial Menu
    context.pressX(); // Go to Story Mode
    // Story Mode
    context.pressX(); // Let's play!
    // Playing
    context.pressX(); // Rasteira!
    context.pressBola(); // Soco!
    context.pressQuadrado(); // Especial!
    context.pressTriangulo(); // Go back to Story Mode
    // Story Mode
    context.pressTriangulo(); // Go back to Initial Menu
    // Initial Menu
    // ...
}
main();
