import Phaser from 'phaser';

const MAX_HEIGHT = 200;
const NUM_SEGMENTS = 50;

export default class Ground {
    constructor(scene, x, y) {
        this.scene = scene;

        let allPoints = [{ x: x, y: y + MAX_HEIGHT }];
        for (var i = 0; i < NUM_SEGMENTS; i++) {
            // Visual representation
            let lastPoint = allPoints[allPoints.length - 1];
            var relativeNewX = Math.random() * (100 - 20) + 20;
            var absoluteNewY = Math.random() * (y + MAX_HEIGHT - y) + y;
            let line = this.scene.add.line(
                0,
                0,
                lastPoint.x,
                lastPoint.y,
                lastPoint.x + relativeNewX,
                absoluteNewY,
                "0xcccccc"
            ).setOrigin(0);
            scene.add.rectangle(line.x, line.y, 5, 5, "0xff0000");

            // Body generation
            let body = scene.matter.add.fromVertices(
                lastPoint.x + relativeNewX / 2,
                lastPoint.y + (absoluteNewY - lastPoint.y) / 2,
                [
                    { x: lastPoint.x, y: lastPoint.y },
                    { x: lastPoint.x + relativeNewX, y: absoluteNewY },
                    { x: lastPoint.x + relativeNewX, y: absoluteNewY + 1 },
                    { x: lastPoint.x, y: lastPoint.y + 1 }
                ]
            );
            body.ignoreGravity = true;
            body.isStatic = true;
            console.log(body);


            allPoints.push({ x: lastPoint.x + relativeNewX, y: absoluteNewY });
        }
    }
}