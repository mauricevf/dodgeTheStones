import { Color, Engine, Font, FontUnit, Label, SolverStrategy, Vector } from "excalibur";
import {mainGame } from "./mainGame.js";
import { StartScreen } from "./startscreen.js";
import { ResourceLoader, Resources } from "./resources.js";
import { gameOver } from "./gameOver.js";

const options = {
    width: 1500,
    height: 900,
    backgroundColor: Color.White,
    suppressPlayButton: true,
    physics: {
        solver: SolverStrategy.Realistic,
        gravity: new Vector(0, 400),
    }
};

const maxHeight = 300;
const game = new Engine(options);

const MainGame = new mainGame(maxHeight);
const startscreen = new StartScreen();

game.add('start', startscreen)
game.add('game', MainGame);
game.add('over', gameOver);

game.goToScene('start');

game.start(ResourceLoader).then(() => {
    console.log('Game Loaded')
});