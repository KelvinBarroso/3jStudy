import * as THREE from "../../node_modules/three/build/three.module.js"

export class Stars {
    mesh;
    geometry;
    material;
    constructor() {

        this.geometry = new THREE.SphereGeometry(.25, 4, 4);
        this.material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    setPos(x, y, z) {
        this.mesh.position.set(x, y, z);
    }
}
