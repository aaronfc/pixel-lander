import Phaser from 'phaser';

const MAX_VELOCITY_TO_LAND = 1.0;

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

        // Lander properties
        this.isEngineOn = false;
        this.fuel = 5000;

        this.setOnCollide((pair) => {
            let currentVelocity = new Phaser.Math.Vector2(this.body.velocity).length();
            if (currentVelocity > MAX_VELOCITY_TO_LAND) {
                this.explode();
            } else {
                console.log("🏁")
            }
        });

        this.particles = scene.add.particles('fire');

        this.particleEmitter = this.particles.createEmitter({
            alpha: { start: 1, end: 0 },
            scale: { start: 0.5, end: 2.5 },
            //tint: { start: 0xff945e, end: 0xff945e },
            speed: 20,
            accelerationY: -300,
            angle: { min: -85, max: -95 },
            rotate: { min: -180, max: 180 },
            lifespan: { min: 1000, max: 1100 },
            blendMode: 'ADD',
            frequency: 110,
            on: false,
            x: 150,
            y: 150
        });
    }

    create() {
        // Empty scene!
    }

    tiltRight() {
        if (this.visible) {
            this.setAngularVelocity(0.03);
        }
    }

    tiltLeft() {
        if (this.visible) {
            this.setAngularVelocity(-0.03);
        }
    }

    tiltOff() {
        if (this.visible) {
            this.setAngularVelocity(0);
        }
    }

    engineOn() {
        if (this.visible && this.fuel > 0) {
            this.isEngineOn = true;
        }
    }

    engineOff() {
        if (this.visible) {
            this.isEngineOn = false;
        }
    }

    update(delta) {
        if (this.isEngineOn) {
            this.thrust(0.00005);
            this.fuel -= delta;
        }
        if (this.fuel <= 0) {
            this.engineOff();
        }
        console.log(this.fuel);
    }

    explode() {
        console.log("💥");
        // Stop engine
        this.engineOff();
        // Start fire
        this.particleEmitter.setPosition(this.x, this.y);
        this.particleEmitter.start();
        // Make object not visible
        this.visible = false;
    }
}