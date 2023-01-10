import "./style.css"
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { addStar, renderBody, renderHead, renderHelmet, renderLeftArm, renderLeftLeg, renderRightArm, renderRightLeg, renderRightSleeve, renderLeftSleeve, renderBodySecondLayer, renderLeftLegSleeve, renderRightLegSleeve, renderCape, renderLeftArmSlim, renderLeftSleeveSlim, renderRightArmSlim, renderRightSleeveSlim } from "./renders.js";
import { DataArrayTexture } from "three";

//setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)

//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#canvas')
});
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30);

document.getElementById("form").addEventListener("submit", function() {
    event.preventDefault();
    renderSkin(document.querySelector("#minecraftname").value)
});

renderSkin("MNRMax")

async function renderSkin(name) {
    let data;

    try {
        const response = await fetch(`https://api.ashcon.app/mojang/v2/user/${name}`);  
        data = await response.json();
    } catch (error) {
        return
    }

    const skin = `https://crafatar.com/skins/${data.uuid}?overlay`
    const capeURL = `https://crafatar.com/capes/${data.uuid}`
    getHypixelProfile(data.uuid)
    var img = new Image();
    img.setAttribute("src", `https://crafatar.com/skins/${data.uuid}?overlay`)
    img.crossOrigin = "Anonymous";

    img.onload = function() {
        let canvas = document.createElement("canvas")
        canvas.width = 64;
        canvas.height = 64;
        canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
        var pixelData = canvas.getContext('2d').getImageData(51, 16, 1, 1).data;

        var rightArm = renderRightArm(skin)
        var leftArm = renderLeftArm(skin)
        var rightSleeve = renderRightSleeve(skin)
        var leftSleeve = renderLeftSleeve(skin)

        if (pixelData[3] == 0) {
            rightArm = renderRightArmSlim(skin)
            leftArm = renderLeftArmSlim(skin)
            rightSleeve = renderRightSleeveSlim(skin)
            leftSleeve = renderLeftSleeveSlim(skin)
        }

        scene.clear()
        scene.add(new THREE.AmbientLight(0xFFFFFF))
        Array(200).fill().forEach(function() {scene.add(addStar())})

        const head = renderHead(skin)
        const body = renderBody(skin)
        const BodySecondLayer = renderBodySecondLayer(skin)
        const rightLeg = renderRightLeg(skin)
        const leftLeg = renderLeftLeg(skin)
        const RightLegSleeve = renderRightLegSleeve(skin)
        const LeftLegSleeve = renderLeftLegSleeve(skin)
        const helmet = renderHelmet(skin)

        if (checkCape(data.uuid)) {
            const cape = renderCape(capeURL)
            scene.add(cape)
        }

        scene.add(rightArm, leftArm, rightLeg, head, body, leftLeg, helmet, leftSleeve, rightSleeve, BodySecondLayer, LeftLegSleeve, RightLegSleeve)
    }
}

const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableZoom = false;
controls.enablePan = false;
controls.autoRotate = true
controls.autoRotateSpeed = 5
controls.enableDamping = true
camera.setFocalLength(8)

let clock = new THREE.Clock();
let delta = 0;
let interval = 1 / 60;
var fps = 0;

const spaceTexture = new THREE.TextureLoader().load('space.jpg')
scene.background = spaceTexture;

animate()

function animate() {
    requestAnimationFrame(animate);
    delta += clock.getDelta();
    if (delta  > interval) {
        fps++
        setTimeout(function() {
            fps--
        }, 1000)
        document.getElementById('fps-counter').innerHTML = fps - 1
        controls.update()
        renderer.render(scene, camera);
        delta = delta % interval;
    }
}

async function checkCape(uuid) {
    const response = await fetch(`https://crafatar.com/capes/${uuid}`)
    if (response.ok) {
        return true
    }
    return false
}
async function getFriends(uuid) {
    let key = '288ad2f5-c93f-47c4-9087-15816507d776';
    try {
        let friends = [];
        const res = await fetch(`https://api.hypixel.net/friends?key=${key}&uuid=${uuid}`)
        if (res.status != 200) {
            throw("Something is worng.")
        }
        const data = await res.json();
        data.records.forEach(async record => {
            if(record.uuidReceiver == uuid.replaceAll('-', '')) {
                let name = await fetch(`https://api.mojang.com/user/profiles/${record.uuidSender}/names`)
                friends.push(name)
            }
            else {
                friends.push(record.uuidReceiver)
            }
        })
        console.log(friends)
    }
    catch (e) {
        console.log(e)
    }
}

async function getHypixelProfile(uuid) {
    let key = '288ad2f5-c93f-47c4-9087-15816507d776';
    const res = await fetch(`https://api.hypixel.net/player?uuid=${uuid.replaceAll('-', '')}&key=${key}`)
    const data = await res.json()
    console.log(data.player.stats.Bedwars)
}