import Phaser from 'phaser';
import Lander from '../entities/lander.js';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super();
    }

    create() {

        // World setup
        this.matter.world.setBounds(0, 0, this.game.config.width, this.game.config.height, 32, true, true, true, true);

        // Lander
        let lander = new Lander(this);
    }
}