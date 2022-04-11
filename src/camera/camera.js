import * as THREE from "https://threejs.org/build/three.module.js";

//Create Camera
export const mainCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
mainCamera.position.setZ(30);