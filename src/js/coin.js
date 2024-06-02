import { Actor, CollisionType, Engine, Vector } from "excalibur";
import { Resources } from "./resources";
import { pixelChar as Player } from "./player";
import { mainGame } from "./mainGame";

export class Coin extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: Resources.Coin.width,
            height: Resources.Coin.height,
            collisionType: CollisionType.Passive
        });

        let sprite = Resources.Coin.toSprite();
        this.graphics.use(sprite);

        this.on('precollision', (evt) => this.onPreCollision(evt));
    }

    onPreCollision(evt) {
        if (evt.other instanceof Player) { 
            this.collect();
        }
    }

    collect() {
        const scene = this.scene;
        if (scene instanceof mainGame) {
            scene.addPoint();
        } else {
            console.warn("addPoint method not found on engine");
        }
        this.kill();
    }
}