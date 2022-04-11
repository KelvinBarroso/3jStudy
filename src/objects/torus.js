import * as THREE from "../../node_modules/three/build/three.module.js"

export class Torus {
    mesh;
    geometry
    material
    constructor() {
        this.geometry = new THREE.TorusGeometry(10, 3, 16, 100);
        this.material = new THREE.MeshStandardMaterial({ color: 0xFF6347});
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    basicRotation(){
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.005;
        this.mesh.rotation.z += 0.01;
    }
}
