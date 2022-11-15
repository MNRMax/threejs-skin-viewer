import "./style.css"
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { addStar, renderBody, renderHead, renderHelmet, renderLeftArm, renderLeftLeg, renderRightArm, renderRightLeg, renderRightSleeve, renderLeftSleeve, renderBodySecondLayer, renderLeftLegSleeve, renderRightLegSleeve, renderCape } from "./renders.js";

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

document.querySelector('#submit').addEventListener("click", function() {
    console.log('test')
    renderSkin(document.querySelector("#minecraftname").value)
})

renderSkin("MNRMax")

async function renderSkin(name) {
    let rawData = get(`https://api.ashcon.app/mojang/v2/user/${name}`)
    let data = JSON.parse(rawData)
    const skin = `https://crafatar.com/skins/${data.uuid}?overlay&default=MHF_SAlex`
    // const skin = `skin.png`
    const capeURL = `https://crafatar.com/capes/${data.uuid}?overlay&default=MHF_SAlex`
    
    scene.clear()
    scene.add(new THREE.AmbientLight(0xFFFFFF))
    Array(200).fill().forEach(function() {scene.add(addStar())})
    
    const head = renderHead(skin)
    const body = renderBody(skin)
    const BodySecondLayer = renderBodySecondLayer(skin)
    const rightArm = renderRightArm(skin)
    const rightLeg = renderRightLeg(skin)
    const leftArm = renderLeftArm(skin)
    const leftLeg = renderLeftLeg(skin)
    const LeftLegSleeve = renderLeftLegSleeve(skin)
    const RightLegSleeve = renderRightLegSleeve(skin)
    const helmet = renderHelmet(skin)
    const rightSleeve = renderRightSleeve(skin)
    const leftSleeve = renderLeftSleeve(skin)
    const cape = renderCape(capeURL)
    scene.add(rightArm, leftArm, rightLeg, head, body, leftLeg, helmet, rightSleeve, leftSleeve, BodySecondLayer, LeftLegSleeve, RightLegSleeve, cape)
}

const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableZoom = false;
// controls.enablePan = false;
controls.autoRotate = true
controls.autoRotateSpeed = 5
controls.enableDamping = true
camera.setFocalLength(8)

function animate() {
    requestAnimationFrame( animate)
    controls.update()
    renderer.render(scene, camera);
}

const spaceTexture = new THREE.TextureLoader().load('space.jpg')
scene.background = spaceTexture;

Array(800).fill().forEach(function() {scene.add(addStar())})
animate()

function get(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}