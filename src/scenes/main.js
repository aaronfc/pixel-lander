import Phaser from 'phaser';
import Ground from '../entities/ground.js';
import Lander from '../entities/lander.js';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super('main-scene');
    }

    create() {
        // World setup
        this.matter.world.setBounds(0, 0, this.game.config.width * 5, this.game.config.height, 32, true, true, true, true);

        // Lander
        this.lander = new Lander(this);

        let cursors = this.input.keyboard.createCursorKeys();
        cursors.left.on('down', () => { this.lander.tiltLeft(); });
        cursors.left.on('up', () => { this.lander.tiltOff(); });
        cursors.right.on('down', () => { this.lander.tiltRight(); });
        cursors.right.on('up', () => { this.lander.tiltOff(); });
        cursors.up.on('down', () => { this.lander.engineOn(); });
        cursors.up.on('up', () => { this.lander.engineOff(); });

        // Start UI scene
        this.scene.run("ui-scene", { lander: this.lander });

        // Ground
        this.ground = new Ground(this, 0, this.game.config.height - 200);

        // Camera
        this.cameras.main.setBounds(0, 0, this.game.config.width * 5, this.game.config.height);
        this.cameras.main.startFollow(this.lander);
    }

    update(time, delta) {
        this.lander.update(delta);
    }

    gameOver() {
        // Stop UI scene
        this.scene.stop('ui-scene');
        this.scene.start('game-over-scene');
    }
}