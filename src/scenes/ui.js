import Phaser from 'phaser';

export default class UIScene extends Phaser.Scene {
    constructor() {
        super('ui-scene');
    }

    create(data) {
        this.lander = data.lander;
        this.fuelDisplay = this.add.text(0, 0, this._formatFuel(this.lander.fuel), { fontFamily: 'Arial', fontSize: 28, color: '#ffffff' });
    }

    update(time, delta) {
        this.fuelDisplay.setText(this._formatFuel(this.lander.fuel));
    }

    _formatFuel(fuel) {
        return (Math.floor(fuel) + "L").padStart(6, "0");
    }
}