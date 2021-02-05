import Phaser from 'phaser';
import Lander from '../entities/lander.js';

export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super('game-over-scene');
    }

    create() {

        let SCREEN_HALF_WIDTH = this.game.config.width / 2;

        this.title = this.add.text(
            SCREEN_HALF_WIDTH,
            this.game.config.height / 3,
            "GAME OVER",
            { fontFamily: 'Arial', fontSize: 64, color: '#ff0000' }
        ).setOrigin(0.5, 0.5);

        this.retry = this.add.text(
            SCREEN_HALF_WIDTH,
            this.title.y + 100,
            "RETRY ↩️",
            { fontFamily: 'Arial', fontSize: 28, color: '#cccccc' }
        ).setOrigin(0.5, 0.5);
        this.retry.setInteractive({ useHandCursor: true });
        this.retry.on('pointerdown', () => { this.scene.start('main-scene'); });
        this.retry.on("pointerover", (pointer) => {
            this.retry.setColor("#ffffff");
        });
        this.retry.on("pointerout", (pointer) => {
            this.retry.setColor("#cccccc");
        });

    }

    update(time, delta) { }
}