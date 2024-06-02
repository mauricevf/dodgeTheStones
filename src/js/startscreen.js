import { Scene, Engine, Label, Color, Font, FontUnit, Vector, Input, Keys } from "excalibur";
export let  globalDifficulty = 1;

export class StartScreen extends Scene {
    constructor() {
        super();
    }

    onInitialize(engine) {
        if (parseInt(String(localStorage.getItem('score')))){
            const storedScore = localStorage.getItem('score');
            this.highScore = parseInt(storedScore.trim()) || 0;
        }else{
            this.highScore = 0;
        }
        this.difficulty = 1;
        this.startLabel = new Label({
            text: 'Press Enter to Start',
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2),
            color: Color.Black,
            font: new Font({
                family: "impact",
                size: 36,
                unit: FontUnit.Px,
            }),
        });
        this.difficultyLabel = new Label({
            text: `Difficulty: ${this.difficulty}`,
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2 + 50),
            color: Color.Black,
            font: new Font({
            family: "impact",
            size: 24,
            unit: FontUnit.Px,
            }),
        });
        this.highScoreLabel = new Label({
            text: `High Score: ${this.highScore}`,
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2 + 100),
            color: Color.Black,
            font: new Font({
                family: "impact",
                size: 24,
                unit: FontUnit.Px,
                }),
            });

        this.add(this.startLabel);
        this.add(this.difficultyLabel);
        this.add(this.highScoreLabel);
        
    }

    onPreUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(Keys.Up)) {
            this.addDifficulty();
            console.log('Updating difficulty');
        }
        if (engine.input.keyboard.wasPressed(Keys.Enter)) {
            console.log("Enter key pressed. Transitioning to game scene...");
            globalDifficulty = this.difficulty;
            engine.goToScene('game');
        }
    }

    addDifficulty(){
        if(this.difficulty < 2){
            this.difficulty++;
            this.difficultyLabel.text = 'Difficulty: ' + this.difficulty;
        }
    }
    }
