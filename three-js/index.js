import "./style.css"
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { addStar, renderBody, renderHead, renderHelmet, renderLeftArm, renderLeftLeg, renderRightArm, renderRightLeg } from "./renders.js";

//setup
var clock = new THREE.Clock();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)

//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#canvas')
});
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30);

const skin = "skin.png"

const head = renderHead(skin)
const body = renderBody(skin)
const rightArm = renderRightArm(skin)
const rightLeg = renderRightLeg(skin)
const leftArm = renderLeftArm(skin)
const leftLeg = renderLeftLeg(skin)
const helmet = renderHelmet(skin)
scene.add(rightArm, leftArm, rightLeg, head, body, leftLeg, helmet)

//light
const pointLight = new THREE.AmbientLight(0xFFFFFF)
scene.add(pointLight)

const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableZoom = false;
// controls.enablePan = false;
// camera.setFocalLength(5)

function animate() {
    requestAnimationFrame( animate)
    // cube.rotation.y += 2 * clock.getDelta();
    controls.update()
    renderer.render(scene, camera);
}

const spaceTexture = new THREE.TextureLoader().load('space.jpg')
scene.background = spaceTexture;

Array(200).fill().forEach(function() {scene.add(addStar())})

animate()