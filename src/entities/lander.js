import Phaser from 'phaser';

export default class Lander extends Phaser.GameObjects.Rectangle {
    constructor(scene) {
        super(
            scene,
            scene.game.config.width / 2,
            scene.game.config.height / 2,
            15,
            15,
            0xdddddd
        );
        scene.add.existing(this);
        scene.matter.add.gameObject(this);
    }

    create() {
        // Empty scene!
    }
}