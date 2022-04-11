import * as THREE from "./node_modules/three/build/three.module.js"
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js";
import { scene } from "./src/scene/torusScene.js";
import { MainRender } from "./src/renderer/mainRender.js";
import { Torus } from "./src/objects/torus.js";
import { mainCamera } from "./src/camera/camera.js";
import { addConstelations } from "./src/objects/constelation.js";

const render = new MainRender();

const torusObjs = new Torus();
scene.add(torusObjs.mesh)

addConstelations(scene, 200, 100)

const controls = new OrbitControls(mainCamera, render.render.domElement);
//LIGHT
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff)

scene.add(pointLight, ambientLight)

const spaceTexture = new THREE.TextureLoader().load("space.jpg");
scene.background = spaceTexture;
function animateScene() {
    requestAnimationFrame(animateScene);

    torusObjs.basicRotation();

    controls.update();
    render.renderScene(scene, mainCamera)
}
animateScene();

// Add it to HTML
document.body.appendChild(render.render.domElement);