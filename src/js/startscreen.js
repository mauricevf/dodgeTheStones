// Import the necessary Excalibur classes
import { Scene, Color, Label, Vector, Font } from "excalibur";

// Create a new Scene for the start screen
export class StartScene extends Scene {
    constructor() {
        super();
    }

    onInitialize() {
        // Set background color for the start scene
        this.backgroundColor = Color.Blue;

        // Create a title label for the start screen
        let title = new Label({
            text: "My Game",
            pos: new Vector(100, 100),
            color: Color.Black,
            font: new Font({
                size: 24,
            })
        });

        this.add(title);
    }
}
