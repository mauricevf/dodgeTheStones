import { Color, Engine, Font, FontUnit, Label, Scene, SolverStrategy, Vector } from "excalibur";
import { Background } from "./background.js";
import { Coin } from "./coin.js";
import { Platform } from "./platform.js";
import { pixelChar as Player } from "./player.js";
import { ResourceLoader } from "./resources.js";
import { fallingStone } from "./enemy.js";
import { globalDifficulty } from "./startscreen.js";
export let score = 0;

export class mainGame extends Scene {
    label;
    player;
    constructor(maxHeight) {
        super();
        this.maxHeight = 300;
    }

    onInitialize(engine) {
        this.score = 0;
        console.log("Start the game!");
        const land = new Background();
        this.add(land);
        let difficulty = globalDifficulty; 
        
        for (let i = 0; i < 5; i++) {
            this.addNewPlatform(100 + i * 300, 400);
        }

        setInterval(() => {
            this.spawnApple(Math.random() * 900, Math.random() * this.maxHeight);
        }, 7000);

        setInterval(() => {
            this.spawnStone(Math.random() * 1000, 0);
        }, 7000 / globalDifficulty);

        this.createPlayer();

        this.label = new Label({
            text: "Score: 0",
            pos: new Vector(100, 100),
            font: new Font({
                family: "impact",
                size: 24,
                unit: FontUnit.Px,
            }),
        });

        this.add(this.label);
        this.label.text = `Score: ${this.score}`;
    }

    createPlayer() {
        this.player = new Player();
        this.add(this.player);
    }

    addNewPlatform(x, y) {
        const platform = new Platform(x, y);
        this.add(platform);
    }

    addPoint() {
        this.score++;
        this.label.text = `Score: ${this.score}`;
    }

    spawnApple(x, y) {
        if (y < this.maxHeight) {
            y = this.maxHeight;
        }
        const coin = new Coin(x, y);
        console.log(`Spawning apple at x: ${x}, y: ${y}`);
        this.add(coin);
    }

    spawnStone(x, y, difficulty) {
        const stone = new fallingStone(x, y);
        console.log(`Spawning stone at x: ${x}, y: ${y}`);
        this.add(stone);
    }
}