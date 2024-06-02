import { Scene, Engine, Label, Color, Font, FontUnit, Vector, Input, Keys } from "excalibur";

export class gameOver extends Scene {

    constructor() {
        super();
    }

    onInitialize(engine) {
        this.startLabel = new Label({
            text: 'Press Enter to restart...',
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2),
            color: Color.Black,
            font: new Font({
                family: "impact",
                size: 36,
                unit: FontUnit.Px,
            }),
        });

        this.add(this.startLabel);
    }

    onPreUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(Keys.Enter)) {
            engine.goToScene('start');
        }
    }
}
