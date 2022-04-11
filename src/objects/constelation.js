import * as THREE from "../../node_modules/three/build/three.module.js"
import { Stars } from "./stars.js";



export function addConstelations(scene, starNumber, starspread) {
    for (let i = 0; i < starNumber; i += 1) {
        console.log('eu');
        const star = new Stars();
        const [x, y, z] = Array(3).fill().map(
            () => THREE.MathUtils.randFloatSpread(starspread)
        );
        star.setPos(x, y, z);
        scene.add(star.mesh);
    }
}

