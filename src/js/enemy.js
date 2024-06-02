import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from './resources.js';
import { pixelChar as Player } from './player.js';
import { globalDifficulty } from "./startscreen.js";

export class fallingStone extends Actor {
    constructor(x, y) {
        super({
            width: Resources.Stone.width,
            height: Resources.Stone.height,
            pos: new Vector(x, y),
            collisionType: CollisionType.Passive
        });
        this.vel = new Vector(0, 100);  
    }

    onInitialize(engine) {
        const sprite = Resources.Stone.toSprite();
        this.graphics.use(sprite);
    }

    onPreUpdate(engine, delta) {
        this.vel.y = 100 * globalDifficulty;

        if (this.pos.y > engine.drawHeight) {
            this.kill();
        }
    }
    }