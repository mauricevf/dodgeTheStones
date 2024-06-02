import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    Player: new ImageSource('images/player.png'),
    Land: new ImageSource('images/Yellow.png'),
    Gun: new ImageSource('images/gun.png'),
    Platform: new ImageSource('images/BrownOnLarge.png'),
    Jump: new ImageSource('images/Jump.png'),
    Coin: new ImageSource('images/Apple.png'),
    Stone: new ImageSource('images/stone.png'),
}
const ResourceLoader = new Loader([
    Resources.Player,
    Resources.Land,
    Resources.Gun,
    Resources.Platform,
    Resources.Jump,
    Resources.Coin,
    Resources.Stone,
])

export { Resources, ResourceLoader }