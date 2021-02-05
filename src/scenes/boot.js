import Phaser from 'phaser';
import Lander from '../entities/lander.js';

export default class BootScene extends Phaser.Scene {
    constructor() {
        super('boot-scene');
    }

    preload() {
        this.load.image('fire', 'src/assets/fire.png');
    }

    create() {
        // Start Main scene and stop current scene
        this.scene.start("main-scene");
    }
}