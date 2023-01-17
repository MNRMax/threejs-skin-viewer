import "./style.css"
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { addStar, renderBody, renderHead, renderHelmet, renderLeftArm, renderLeftLeg, renderRightArm, renderRightLeg, renderRightSleeve, renderLeftSleeve, renderBodySecondLayer, renderLeftLegSleeve, renderRightLegSleeve, renderCape, renderLeftArmSlim, renderLeftSleeveSlim, renderRightArmSlim, renderRightSleeveSlim, renderIGN } from "./renders.js";
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

addEventListener("resize", (event) => {
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth/window.innerHeight
    camera.updateProjectionMatrix();
});

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
    let hypixelData = await getHypixelProfile(data.uuid)
    displayBWStats(hypixelData) 
    displaySWStats(hypixelData)
    displayClassicStats(hypixelData)
    displaySumoStats(hypixelData)
    // displayBridgeStats(hypixelData)
    // displayUHCStats(hypixelData)
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
        console.log(hypixelData.player.newPackageRank)
        const nameTag = renderIGN(hypixelData.player.newPackageRank, hypixelData.player.monthlyPackageRank, hypixelData.player.displayname)

        if (checkCape(data.uuid)) {
            const cape = renderCape(capeURL)
            scene.add(cape)
        }

        scene.add(rightArm, leftArm, rightLeg, head, body, leftLeg, helmet, leftSleeve, rightSleeve, BodySecondLayer, LeftLegSleeve, RightLegSleeve, nameTag)
    }
}

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
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
    return data
}

async function displayBWStats(data) {
    const stats = data.player.stats.Bedwars
    const statsBox = document.querySelector("#bedwars-dropdown") 

    statsBox.innerHTML = ''
    statsBox.insertAdjacentHTML("beforeend", 
    `<p>Kills: ${stats.kills_bedwars}</p>
    <p>Deaths: ${stats.deaths_bedwars}</p>
    <p>K/D: ${round(stats.kills_bedwars/stats.deaths_bedwars)}</p>
    <p>Final Kills: ${stats.final_kills_bedwars}</p>
    <p>Final Deaths: ${stats.final_deaths_bedwars}</p>
    <p>FK/D: ${round(stats.final_kills_bedwars/stats.final_deaths_bedwars)}</p>
    <p>Beds Broken: ${stats.beds_broken_bedwars}</p>
    <p>Beds Lost: ${stats.beds_lost_bedwars}</p>
    <p>BB/L: ${round(stats.beds_broken_bedwars/stats.beds_lost_bedwars)}</p>
    <p>Total Games Played: ${stats.wins_bedwars + stats.losses_bedwars}</p>
    <p>Wins: ${stats.wins_bedwars}\n</p>
    <p>Loses: ${stats.losses_bedwars}\n</p>
    <p>W/L: ${round(stats.wins_bedwars/stats.losses_bedwars)}</p>
    `)
}

async function displaySWStats(data) {
    const stats = data.player.stats.SkyWars
    const statsBox = document.querySelector("#skywars-dropdown") 

    statsBox.innerHTML = ''
    statsBox.insertAdjacentHTML("beforeend", 
    `<p>Kills: ${stats.kills}</p>
    <p>Deaths: ${stats.deaths}</p>
    <p>K/D: ${round(stats.kills/stats.deaths)}</p>
    <p>Total Games Played: ${stats.wins + stats.losses}</p>
    <p>Wins: ${stats.wins}\n</p>
    <p>Loses: ${stats.losses}\n</p>
    <p>W/L: ${round(stats.wins/stats.losses)}</p>
    `)
}

async function displayClassicStats(data) {
    const stats = data.player.stats.Duels
    const statsBox = document.querySelector("#classic-dropdown") 

    statsBox.innerHTML = ''
    statsBox.insertAdjacentHTML("beforeend", 
    `<p>Kills: ${stats.classic_duel_kills}</p>
    <p>Wins: ${stats.classic_duel_wins}\n</p>
    <p>Loses: ${stats.classic_duel_losses}\n</p>
    <p>W/L: ${round(stats.classic_duel_wins/stats.classic_duel_losses)}</p>
    `)
}
async function displaySumoStats(data) {
    const stats = data.player.stats.Duels
    const statsBox = document.querySelector("#sumo-dropdown") 

    statsBox.innerHTML = ''
    statsBox.insertAdjacentHTML("beforeend", 
    `<p>Kills: ${stats.sumo_duel_kills}</p>
    <p>Wins: ${stats.sumo_duel_wins}\n</p>
    <p>Loses: ${stats.sumo_duel_losses}\n</p>
    <p>W/L: ${round(stats.sumo_duel_wins/stats.sumo_duel_losses)}</p>
    `)
}
async function displayBridgeStats(data) {
    const stats = data.player.stats.Duels
    const statsBox = document.querySelector("#bridge-dropdown") 

    statsBox.innerHTML = ''
    statsBox.insertAdjacentHTML("beforeend", 
    `<p>Kills: ${stats.bridge_kills}</p>
    <p>Deaths: ${stats.bridge_deaths}</p>
    <p>K/D: ${round(stats.bridge_kills/stats.bridge_deaths)}</p>
    <p>Wins: ${data.player.achievments.duels_bridge_losses}\n</p>
    <p>Loses: ${stats.losses}\n</p>
    <p>W/L: ${round(stats.wins/stats.losses)}</p>
    `)
}
async function displayUHCStats(data) {
    const stats = data.player.stats.Duels
    const statsBox = document.querySelector("#uhc-dropdown") 

    statsBox.innerHTML = ''
    statsBox.insertAdjacentHTML("beforeend", 
    `<p>Kills: ${stats.uhc_duel_kills}</p>
    <p>Wins: ${stats.uhc_duel_wins}\n</p>
    <p>Loses: ${stats.classic_duel_losses}\n</p>
    <p>W/L: ${round(stats.classic_duel_wins/stats.classic_duel_losses)}</p>
    `)
}

function round(number) {
    return Math.round(100*number)/100;
}