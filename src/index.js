import Phaser from 'phaser';
import MainScene from './scenes/main.js';


const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [MainScene],
    render: {
        pixelArt: true,

    },
    physics: {
        default: 'matter',
        matter: {
            debug: true
        }
    },
};

const game = new Phaser.Game(config);
