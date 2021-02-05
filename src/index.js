import Phaser from 'phaser';
import BootScene from './scenes/boot.js';
import MainScene from './scenes/main.js';
import UIScene from './scenes/ui.js';
import GameOverScene from './scenes/game-over.js';


const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [BootScene, MainScene, UIScene, GameOverScene],
    render: {
        pixelArt: true,

    },
    physics: {
        default: 'matter',
        matter: {
            debug: false,
            gravity: { x: 0, y: 0.16 }
        }
    },
};

const game = new Phaser.Game(config);
