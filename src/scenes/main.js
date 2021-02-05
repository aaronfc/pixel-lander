import Phaser from 'phaser';
import Lander from '../entities/lander.js';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super('main-scene');
    }

    preload() {
        this.load.image('fire', 'src/assets/fire.png');

    }

    create() {
        // World setup
        this.matter.world.setBounds(0, 0, this.game.config.width, this.game.config.height, 32, true, true, true, true);

        // Lander
        this.lander = new Lander(this);

        let cursors = this.input.keyboard.createCursorKeys();
        cursors.left.on('down', () => { this.lander.tiltLeft(); });
        cursors.left.on('up', () => { this.lander.tiltOff(); });
        cursors.right.on('down', () => { this.lander.tiltRight(); });
        cursors.right.on('up', () => { this.lander.tiltOff(); });
        cursors.up.on('down', () => { this.lander.engineOn(); });
        cursors.up.on('up', () => { this.lander.engineOff(); });

        // Start UI Scene
        this.scene.run("ui-scene", { lander: this.lander });
    }

    update(time, delta) {
        this.lander.update(delta);
    }
}