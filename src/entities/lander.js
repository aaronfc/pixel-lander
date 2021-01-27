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
        this.setAngle(-90);

        this.isEngineOn = false;
    }

    create() {
        // Empty scene!
    }

    tiltRight() {
        this.setAngularVelocity(0.03);
    }

    tiltLeft() {
        this.setAngularVelocity(-0.03);
    }

    tiltOff() {
        this.setAngularVelocity(0);
    }

    engineOn() {
        this.isEngineOn = true;
    }

    engineOff() {
        this.isEngineOn = false;
    }

    update() {
        if (this.isEngineOn) {
            this.thrust(0.00002);
        }
    }
}