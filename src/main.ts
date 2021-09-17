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

import { Context } from "./GameContext";
import { Menu } from "./States/Menu";

function main() {
  console.log("State Game");
  const context = new Context(new Menu());
  // Initial Menu
  context.pressX(); // Go to Story Mode
  
  // Story Mode
  context.pressTriangulo();  // Go back to Initial Menu
  
  // Initial Menu
  context.pressX();  // Go to Story Mode
  
  // Story Mode
  context.pressX();  // Let's play!
  
  // Playing
  context.pressX();  // Rasteira!
  context.pressBola(); // Soco!
  context.pressQuadrado(); // Especial!
  context.pressTriangulo(); // Go back to Story Mode

  // Story Mode
  context.pressTriangulo(); // Go back to Initial Menu

  // Initial Menu
  // ...
}

main();