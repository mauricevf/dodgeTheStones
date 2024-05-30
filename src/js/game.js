import "../css/style.css";
import { Actor, Color, Engine, Rectangle, SolverStrategy, Vector } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Label, FontUnit, Font } from "excalibur";
import { pixelChar } from "./player.js";
import { Background } from "./background.js";
import { Platform } from "./platform.js";

const options = {
        width: 1500, height: 900, 
        backgroundColor: Color.White,
        physics: {
            solver: SolverStrategy.Realistic,
            gravity: new Vector(0, 400),
}
}

export class Game extends Engine {
    constructor() {
        super(options);
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        this.score = 0;
        console.log("start de game!");
        const land = new Background();
        this.add(land);
        for (let i = 0; i < 5; i++) {
            this.addNewPlatform(100 + i*300, 300 + i*100);
        }
        this.createPlayer()
   

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


       addPoint() {
        this.score++;
        this.label.text = `Score: ${this.score}`;
    }

 

    createPlayer() {
        const pixel = new pixelChar();
        this.add(pixel);
    }

    addNewPlatform(x,y){
        const platform = new Platform(x, y);
        this.add(platform)
    }
}

new Game(); 
