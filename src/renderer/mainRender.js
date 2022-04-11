import * as THREE from "https://threejs.org/build/three.module.js";

//create render
export class MainRender {
    render;

    constructor() {
        
        this.render = new THREE.WebGLRenderer({ antialias: true });
        this.render.setPixelRatio(window.devicePixelRatio);
        this.render.setSize(window.innerWidth, window.innerHeight);

    }
    renderScene(scene,camera){
      return  this.render.render(scene,camera)
    }
}