import  { Actor, CollisionType, Color, DegreeOfFreedom, Engine, Keys, Shape, Side, Vector, clamp } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Platform } from './platform.js'


export class  pixelChar extends Actor {
    constructor() {
        super(
            {
                width: Resources.Player.width,
                height: Resources.Player.height,
            }
        );
        this.isGrounded = false;
        this.body.limitDegreeOfFreedom = [DegreeOfFreedom.Rotation];
    }

    onInitialize(engine) {
        const sprite = Resources.Player.toSprite();
        this.graphics.use(sprite);
        this.pos = new Vector(400, 350);
        // this.vel = new Vector(0, 0);
        this.body.collisionType = CollisionType.Active;

        this.on('collisionstart', (evt) => {
            if (evt.side === Side.Bottom) {
                this.isGrounded = true;
                // this.vel.y = 0; 
                // this.pos.y = this.pos.y;
            }
        });


        // let gun = new Actor();
        // gun.pos = new Vector(30, 5);
        // gun.graphics.use(Resources.Gun.toSprite());
        // this.addChild(gun);
    }

    logSpeed() {
        console.log(`Mijn snelheid is ${this.vel.x}`);
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
            // this.vel.y = -400;
            this.body.applyLinearImpulse(new Vector(0, -3500));
            const sprite = Resources.Jump.toSprite();
            this.graphics.use(sprite);
            this.isGrounded = false;
        }

        this.vel.x = xspeed;
    }

        logPosition(){
            console.log(`Mijn positie is ${this.pos.x}, ${this.pos.y}`);
        }
        onPostKill(){
            this.scene.engine.addPoint();
        }
}


