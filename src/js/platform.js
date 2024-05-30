import { Actor, CollisionType, Color, Engine, Vector } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";

export class Platform extends Actor {
  constructor(posX, posY) {
    super({
      pos: new Vector(posX, posY),
      width: 256,
      height: 20,
      color: Color.Red,
      collisionType: CollisionType.Fixed
    });
  }

  onInitialize(engine) {
    const sprite = Resources.Platform.toSprite();
    this.graphics.use(sprite);
  }
}