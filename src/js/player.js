import { Actor, CollisionType, DegreeOfFreedom, Engine, Keys, Side, Vector } from "excalibur";
import { Resources } from './resources.js';
import { fallingStone } from './enemy.js';
import { globalDifficulty } from "./startscreen.js";
import { score as Score } from "./mainGame.js";

export class pixelChar extends Actor {
    constructor() {
        super({
            width: Resources.Player.width,
            height: Resources.Player.height,
            pos: new Vector(400, 350),
            collisionType: CollisionType.Active
        });
        this.isGrounded = false;
        this.body.limitDegreeOfFreedom = [DegreeOfFreedom.Rotation];
        this.score = Score;
    }

    onInitialize(engine) {
        const sprite = Resources.Player.toSprite();
        this.graphics.use(sprite);

        this.on('collisionstart', (evt) => {
            if (evt.side === Side.Bottom) {
                this.isGrounded = true;
            }else if (evt.other instanceof fallingStone){
                this.gameOver(evt, engine);
            }
        });
    }

    onPreUpdate(engine, delta) {
        let xspeed = 0;

        if (engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -200;
        }

        if (engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 200;
        }

        if (engine.input.keyboard.isHeld(Keys.Space) && this.isGrounded) {
            this.body.applyLinearImpulse(new Vector(0, -3500));
            this.isGrounded = false;
        }

        if (this.pos.y >= 900) {
            this.pos.x = 400;
            this.pos.y = 300;
        }

        this.vel.x = xspeed;
    }

    gameOver(event, engine) {
        console.log('Player Game Over');
        const storedScore = localStorage.getItem('score');
        let currentScore = 0;
        if (storedScore!== null) {
            currentScore = parseInt(storedScore, 10);
        }
        if (this.score > currentScore) {
            localStorage.setItem('score', this.score.toString());
        }
        engine.goToScene('over');
        }
    }