import * as THREE from "three"
import {Text} from 'troika-three-text'

export function renderHead(url) {
    const cubeGeometry = new THREE.BoxGeometry(8, 8, 8);
    var headTextures = Array(6).fill().map(() => new THREE.TextureLoader().load(url));

    headTextures.forEach(function (e) {
        e.repeat.set(0.125, 0.125);
        e.magFilter = THREE.NearestFilter;
    })

    headTextures[0].offset.set(0.25, 0.75)
    headTextures[1].offset.set(0, 0.75)
    headTextures[2].offset.set(0.125, 0.875)
    headTextures[3].offset.set(0.375, 1) 
    headTextures[3].repeat.set(-0.125, -0.125);
    headTextures[4].offset.set(0.125, 0.75)
    headTextures[5].offset.set(0.375, 0.75)

    const materials = headTextures.map(e => new THREE.MeshStandardMaterial({ map: e }))
    const cube = new THREE.Mesh(cubeGeometry, materials)
    cube.position.set(0, 10, 0)
    return cube;
}
export function renderBody(url) {
    const cubeGeometry = new THREE.BoxGeometry(8, 12, 4);

    var bodyTextures = Array(6).fill().map(() => new THREE.TextureLoader().load(url));

    bodyTextures.forEach(function (e) {
        e.magFilter = THREE.NearestFilter;
    })

    bodyTextures[0].offset.set(0.25, 0.5)
    bodyTextures[0].repeat.set(0.0625, 0.1875);
    bodyTextures[1].offset.set(0.25, 0.5)
    bodyTextures[1].repeat.set(0.0625, 0.1875);

    bodyTextures[2].offset.set(0.3125, 0.6875)
    bodyTextures[2].repeat.set(0.125, 0.0625);
    bodyTextures[3].offset.set(0.4375, 0.6875)
    bodyTextures[3].repeat.set(0.125, 0.0625);

    bodyTextures[4].offset.set(0.3125, 0.5)
    bodyTextures[4].repeat.set(0.125, 0.1875);
    bodyTextures[5].offset.set(0.5, 0.5)
    bodyTextures[5].repeat.set(0.125, 0.1875);

    const materials = bodyTextures.map(e => new THREE.MeshStandardMaterial({ map: e }))
    const cube = new THREE.Mesh(cubeGeometry, materials)
    cube.position.set(0, 0, 0)
    return cube;
}

export function renderRightArm(url) {
    const cubeGeometry = new THREE.BoxGeometry(4, 12, 4);

    var bodyTextures = Array(6).fill().map(() => new THREE.TextureLoader().load(url));

    bodyTextures.forEach(function (e) {
        e.magFilter = THREE.NearestFilter;
    })

    bodyTextures[0].offset.set(0.75, 0.5)
    bodyTextures[0].repeat.set(0.0625, 0.1875);
    bodyTextures[1].offset.set(0.625, 0.5)
    bodyTextures[1].repeat.set(0.0625, 0.1875);

    bodyTextures[2].offset.set(0.6875, 0.6875)
    bodyTextures[2].repeat.set(0.0625, 0.0625);
    bodyTextures[3].offset.set(0.75, 0.6875)
    bodyTextures[3].repeat.set(0.0625, 0.0625);

    bodyTextures[4].offset.set(0.6875, 0.5)
    bodyTextures[4].repeat.set(0.0625, 0.1875);
    bodyTextures[5].offset.set(0.8125, 0.5)
    bodyTextures[5].repeat.set(0.0625, 0.1875);

    const materials = bodyTextures.map(e => new THREE.MeshStandardMaterial({ map: e }))
    const cube = new THREE.Mesh(cubeGeometry, materials)
    cube.position.set(-6, 0, 0)
    return cube;
}

export function renderRightLeg(url) {
    const cubeGeometry = new THREE.BoxGeometry(4, 12, 4);

    var bodyTextures = Array(6).fill().map(() => new THREE.TextureLoader().load(url));

    bodyTextures.forEach(function (e) {
        e.magFilter = THREE.NearestFilter;
    })

    bodyTextures[0].offset.set(0.125, 0.5)
    bodyTextures[0].repeat.set(0.0625, 0.1875);
    bodyTextures[1].offset.set(0, 0.5)
    bodyTextures[1].repeat.set(0.0625, 0.1875);

    bodyTextures[2].offset.set(0.0625, 0.6875)
    bodyTextures[2].repeat.set(0.0625, 0.0625);
    bodyTextures[3].offset.set(0.125, 0.6875)
    bodyTextures[3].repeat.set(0.0625, 0.0625);

    bodyTextures[4].offset.set(0.0625, 0.5)
    bodyTextures[4].repeat.set(0.0625, 0.1875);
    bodyTextures[5].offset.set(0.1875, 0.5)
    bodyTextures[5].repeat.set(0.0625, 0.1875);

    const materials = bodyTextures.map(e => new THREE.MeshStandardMaterial({ map: e }))
    const cube = new THREE.Mesh(cubeGeometry, materials)
    cube.position.set(-2, -12, 0)
    return cube;
}

export function renderLeftArm(url) {
    const cubeGeometry = new THREE.BoxGeometry(4, 12, 4);

    var bodyTextures = Array(6).fill().map(() => new THREE.TextureLoader().load(url));

    bodyTextures.forEach(function (e) {
        e.magFilter = THREE.NearestFilter;
    })

    bodyTextures[0].offset.set(0.625, 0)
    bodyTextures[0].repeat.set(0.0625, 0.1875);
    bodyTextures[1].offset.set(0.5, 0)
    bodyTextures[1].repeat.set(0.0625, 0.1875);

    bodyTextures[2].offset.set(0.5625, 0.1875)
    bodyTextures[2].repeat.set(0.0625, 0.0625);
    bodyTextures[3].offset.set(0.625, 0.1875)
    bodyTextures[3].repeat.set(0.0625, 0.0625);

    bodyTextures[4].offset.set(0.5625, 0)
    bodyTextures[4].repeat.set(0.0625, 0.1875);
    bodyTextures[5].offset.set(0.6875, 0)
    bodyTextures[5].repeat.set(0.0625, 0.1875);

    const materials = bodyTextures.map(e => new THREE.MeshStandardMaterial({ map: e }))
    const cube = new THREE.Mesh(cubeGeometry, materials)
    cube.position.set(6, 0, 0)
    return cube;
}

export function renderLeftLeg(url) {
    const cubeGeometry = new THREE.BoxGeometry(4, 12, 4);

    var bodyTextures = Array(6).fill().map(() => new THREE.TextureLoader().load(url));

    bodyTextures.forEach(function (e) {
        e.magFilter = THREE.NearestFilter;
    })

    bodyTextures[0].offset.set(0.375, 0)
    bodyTextures[0].repeat.set(0.0625, 0.1875);
    bodyTextures[1].offset.set(0.25, 0)
    bodyTextures[1].repeat.set(0.0625, 0.1875);

    bodyTextures[2].offset.set(0.3125, 0.1875)
    bodyTextures[2].repeat.set(0.0625, 0.0625);
    bodyTextures[3].offset.set(0.375, 0.1875)
    bodyTextures[3].repeat.set(0.0625, 0.0625);

    bodyTextures[4].offset.set(0.3125, 0)
    bodyTextures[4].repeat.set(0.0625, 0.1875);
    bodyTextures[5].offset.set(0.4375, 0)
    bodyTextures[5].repeat.set(0.0625, 0.1875);

    const materials = bodyTextures.map(e => new THREE.MeshStandardMaterial({ map: e }))
    const cube = new THREE.Mesh(cubeGeometry, materials)
    cube.position.set(2, -12, 0)
    return cube;
}

export function renderHelmet(url) {
    const cubeGeometry = new THREE.BoxGeometry(8.5, 8.5, 8.5);
    var headTextures = Array(6).fill().map(() => new THREE.TextureLoader().load(url));

    headTextures.forEach(function (e) {
        e.repeat.set(0.125, 0.125);
        e.magFilter = THREE.NearestFilter;
    })

    headTextures[0].offset.set(0.75, 0.75)
    headTextures[1].offset.set(0.5, 0.75)
    headTextures[2].offset.set(0.625, 0.875)
    headTextures[3].offset.set(0.875, 1)
    headTextures[3].repeat.set(-0.125, -0.125);
    headTextures[4].offset.set(0.625, 0.75)
    headTextures[5].offset.set(0.875, 0.75)

    const materials = headTextures.map(e => new THREE.MeshStandardMaterial({ map: e, transparent: true, side: THREE.DoubleSide }))
    const cube = new THREE.Mesh(cubeGeometry, materials)
    cube.position.set(0, 10, 0)
    return cube;
}

export function renderRightSleeve(url) {
    const cubeGeometry = new THREE.BoxGeometry(4.5, 12.5, 4.5);

    var bodyTextures = Array(6).fill().map(() => new THREE.TextureLoader().load(url));

    bodyTextures.forEach(function (e) {
        e.magFilter = THREE.NearestFilter;
    })

    bodyTextures[0].offset.set(0.75, 0.25)
    bodyTextures[0].repeat.set(0.0625, 0.1875);
    bodyTextures[1].offset.set(0.625, 0.25)
    bodyTextures[1].repeat.set(0.0625, 0.1875);

    bodyTextures[2].offset.set(0.6875, 0.4375)
    bodyTextures[2].repeat.set(0.0625, 0.0625);
    bodyTextures[3].offset.set(0.75, 0.4375)
    bodyTextures[3].repeat.set(0.0625, 0.0625);

    bodyTextures[4].offset.set(0.6875, 0.25)
    bodyTextures[4].repeat.set(0.0625, 0.1875);
    bodyTextures[5].offset.set(0.8125, 0.25)
    bodyTextures[5].repeat.set(0.0625, 0.1875);

    const materials = bodyTextures.map(e => new THREE.MeshStandardMaterial({ map: e, transparent: true, side: THREE.DoubleSide }))
    const cube = new THREE.Mesh(cubeGeometry, materials)
    cube.position.set(-6, 0, 0)
    return cube;
}

export function renderLeftSleeve(url) {
    const cubeGeometry = new THREE.BoxGeometry(4.5, 12.5, 4.5);

    var bodyTextures = Array(6).fill().map(() => new THREE.TextureLoader().load(url));

    bodyTextures.forEach(function (e) {
        e.magFilter = THREE.NearestFilter;
    })

    bodyTextures[0].offset.set(0.875, 0)
    bodyTextures[0].repeat.set(0.0625, 0.1875);
    bodyTextures[1].offset.set(0.75, 0)
    bodyTextures[1].repeat.set(0.0625, 0.1875);

    bodyTextures[2].offset.set(0.8125, 0.1875)
    bodyTextures[2].repeat.set(0.0625, 0.0625);
    bodyTextures[3].offset.set(0.875, 0.1875)
    bodyTextures[3].repeat.set(0.0625, 0.0625);

    bodyTextures[4].offset.set(0.8125, 0)
    bodyTextures[4].repeat.set(0.0625, 0.1875);
    bodyTextures[5].offset.set(0.9375, 0)
    bodyTextures[5].repeat.set(0.0625, 0.1875);

    const materials = bodyTextures.map(e => new THREE.MeshStandardMaterial({ map: e, transparent: true, side: THREE.DoubleSide  }))
    const cube = new THREE.Mesh(cubeGeometry, materials)
    cube.position.set(6, 0, 0)
    return cube;
}

export function renderBodySecondLayer(url) {
    const cubeGeometry = new THREE.BoxGeometry(8.5, 12.5, 4.5);

    var bodyTextures = Array(6).fill().map(() => new THREE.TextureLoader().load(url));

    bodyTextures.forEach(function (e) {
        e.magFilter = THREE.NearestFilter;
    })

    bodyTextures[0].offset.set(0.25, 0.25)
    bodyTextures[0].repeat.set(0.0625, 0.1875);
    bodyTextures[1].offset.set(0.25, 0.25)
    bodyTextures[1].repeat.set(0.0625, 0.1875);

    bodyTextures[2].offset.set(0.3125, 0.4375)
    bodyTextures[2].repeat.set(0.125, 0.0625);
    bodyTextures[3].offset.set(0.4375, 0.4375)
    bodyTextures[3].repeat.set(0.125, 0.0625);

    bodyTextures[4].offset.set(0.3125, 0.25)
    bodyTextures[4].repeat.set(0.125, 0.1875);
    bodyTextures[5].offset.set(0.5, 0.25)
    bodyTextures[5].repeat.set(0.125, 0.1875);

    const materials = bodyTextures.map(e => new THREE.MeshStandardMaterial({ map: e, transparent: true, side: THREE.DoubleSide }))
    const cube = new THREE.Mesh(cubeGeometry, materials)
    cube.position.set(0, 0, 0)
    return cube;
}

export function renderLeftLegSleeve(url) {
    const cubeGeometry = new THREE.BoxGeometry(4.5, 12.5, 4.5);

    var bodyTextures = Array(6).fill().map(() => new THREE.TextureLoader().load(url));

    bodyTextures.forEach(function (e) {
        e.magFilter = THREE.NearestFilter;
    })

    bodyTextures[0].offset.set(0.125, 0)
    bodyTextures[0].repeat.set(0.0625, 0.1875);
    bodyTextures[1].offset.set(0, 0)
    bodyTextures[1].repeat.set(0.0625, 0.1875);

    bodyTextures[2].offset.set(0.0625, 0.1875)
    bodyTextures[2].repeat.set(0.0625, 0.0625);
    bodyTextures[3].offset.set(0.125, 0.1875)
    bodyTextures[3].repeat.set(0.0625, 0.0625);

    bodyTextures[4].offset.set(0.0625, 0)
    bodyTextures[4].repeat.set(0.0625, 0.1875);
    bodyTextures[5].offset.set(0.1875, 0)
    bodyTextures[5].repeat.set(0.0625, 0.1875);

    const materials = bodyTextures.map(e => new THREE.MeshStandardMaterial({ map: e, transparent: true, side: THREE.DoubleSide }))
    const cube = new THREE.Mesh(cubeGeometry, materials)
    cube.position.set(2, -12, 0)
    return cube;
}

export function renderRightLegSleeve(url) {
    const cubeGeometry = new THREE.BoxGeometry(4.5, 12.5, 4.5);

    var bodyTextures = Array(6).fill().map(() => new THREE.TextureLoader().load(url));

    bodyTextures.forEach(function (e) {
        e.magFilter = THREE.NearestFilter;
    })

    bodyTextures[0].offset.set(0.125, 0.25)
    bodyTextures[0].repeat.set(0.0625, 0.1875);
    bodyTextures[1].offset.set(0, 0.25)
    bodyTextures[1].repeat.set(0.0625, 0.1875);

    bodyTextures[2].offset.set(0.0625, 0.4375)
    bodyTextures[2].repeat.set(0.0625, 0.0625);
    bodyTextures[3].offset.set(0.125, 0.4375)
    bodyTextures[3].repeat.set(0.0625, 0.0625);

    bodyTextures[4].offset.set(0.0625, 0.25)
    bodyTextures[4].repeat.set(0.0625, 0.1875);
    bodyTextures[5].offset.set(0.1875, 0.25)
    bodyTextures[5].repeat.set(0.0625, 0.1875);

    const materials = bodyTextures.map(e => new THREE.MeshStandardMaterial({ map: e, transparent: true, side: THREE.DoubleSide }))
    const cube = new THREE.Mesh(cubeGeometry, materials)
    cube.position.set(-2, -12, 0)
    return cube;
}

export function renderCape(url) {
    const cubeGeometry = new THREE.BoxGeometry(10, 16, 1);

    var bodyTextures = Array(6).fill().map(() => new THREE.TextureLoader().load(url));

    bodyTextures.forEach(function (e) {
        e.magFilter = THREE.NearestFilter;
    })

    bodyTextures[0].offset.set(0, 0.46875)
    bodyTextures[0].repeat.set(0.015625, 0.5);
    bodyTextures[1].offset.set(0.171875, 0.46875)
    bodyTextures[1].repeat.set(0.015625, 0.5);

    bodyTextures[2].offset.set(1/64, 31/32)
    bodyTextures[2].repeat.set(10/64, 1/32);
    bodyTextures[3].offset.set(11/64, 31/32)
    bodyTextures[3].repeat.set(10/64, 1/32);

    bodyTextures[4].offset.set(0.015625, 0.46875)
    bodyTextures[4].repeat.set(0.15625, 0.5);
    bodyTextures[5].offset.set(0.1875, 0.46875)
    bodyTextures[5].repeat.set(0.15625, 0.5);

    const materials = bodyTextures.map(e => new THREE.MeshStandardMaterial({ map: e, transparent:true }))
    const cube = new THREE.Mesh(cubeGeometry, materials)
    cube.position.set(0, -2, -3.4)
    cube.rotation.x = Math.PI/18
    cube.rotation.y = Math.PI
    return cube;
}

export function renderLeftArmSlim(url) {
    const cubeGeometry = new THREE.BoxGeometry(3, 12, 4);

    var bodyTextures = Array(6).fill().map(() => new THREE.TextureLoader().load(url));

    bodyTextures.forEach(function (e) {
        e.magFilter = THREE.NearestFilter;
    })

    bodyTextures[0].offset.set(39/64, 0)
    bodyTextures[0].repeat.set(4/64, 12/64);
    bodyTextures[1].offset.set(0.5, 0)
    bodyTextures[1].repeat.set(4/64, 12/64);

    bodyTextures[2].offset.set(36/64, 12/64)
    bodyTextures[2].repeat.set(3/64, 4/64);
    bodyTextures[3].offset.set(39/64, 12/64)
    bodyTextures[3].repeat.set(3/64, 4/64);

    bodyTextures[4].offset.set(36/64, 0)
    bodyTextures[4].repeat.set(3/64, 12/64);
    bodyTextures[5].offset.set(43/64, 0)
    bodyTextures[5].repeat.set(3/64, 12/64);

    const materials = bodyTextures.map(e => new THREE.MeshStandardMaterial({ map: e }))
    const cube = new THREE.Mesh(cubeGeometry, materials)
    cube.position.set(5.5, 0, 0)
    return cube;
}

export function renderLeftSleeveSlim(url) {
    const cubeGeometry = new THREE.BoxGeometry(3.5, 12.5, 4.5);

    var bodyTextures = Array(6).fill().map(() => new THREE.TextureLoader().load(url));

    bodyTextures.forEach(function (e) {
        e.magFilter = THREE.NearestFilter;
    })

    bodyTextures[0].offset.set(55/64, 0)
    bodyTextures[0].repeat.set(1/16,12/64);
    bodyTextures[1].offset.set(0.75, 0)
    bodyTextures[1].repeat.set(1/16, 12/64);

    bodyTextures[2].offset.set(52/64, 12/64)
    bodyTextures[2].repeat.set(3/64, 1/16);
    bodyTextures[3].offset.set(55/64, 0.1875)
    bodyTextures[3].repeat.set(3/64, 1/16);

    bodyTextures[4].offset.set(52/64, 0)
    bodyTextures[4].repeat.set(3/64, 12/64);
    bodyTextures[5].offset.set(59/64, 0)
    bodyTextures[5].repeat.set(3/64, 12/64);

    const materials = bodyTextures.map(e => new THREE.MeshStandardMaterial({ map: e, transparent: true, side: THREE.DoubleSide  }))
    const cube = new THREE.Mesh(cubeGeometry, materials)
    cube.position.set(5.5, 0, 0)
    return cube;
}

export function renderRightArmSlim(url) {
    const cubeGeometry = new THREE.BoxGeometry(3, 12, 4);

    var bodyTextures = Array(6).fill().map(() => new THREE.TextureLoader().load(url));

    bodyTextures.forEach(function (e) {
        e.magFilter = THREE.NearestFilter;
    })

    bodyTextures[0].offset.set(47/64, 0.5)
    bodyTextures[0].repeat.set(0.0625, 12/64);
    bodyTextures[1].offset.set(40/64, 0.5)
    bodyTextures[1].repeat.set(0.0625, 12/64);

    bodyTextures[2].offset.set(44/64, 44/64)
    bodyTextures[2].repeat.set(3/64, 0.0625);
    bodyTextures[3].offset.set(47/64, 44/64)
    bodyTextures[3].repeat.set(3/64, 0.0625);

    bodyTextures[4].offset.set(44/64, 0.5)
    bodyTextures[4].repeat.set(3/64, 0.1875);
    bodyTextures[5].offset.set(51/64, 0.5)
    bodyTextures[5].repeat.set(3/64, 0.1875);

    const materials = bodyTextures.map(e => new THREE.MeshStandardMaterial({ map: e }))
    const cube = new THREE.Mesh(cubeGeometry, materials)
    cube.position.set(-5.5, 0, 0)
    return cube;
}

export function renderRightSleeveSlim(url) {
    const cubeGeometry = new THREE.BoxGeometry(3.5, 12.5, 4.5);

    var bodyTextures = Array(6).fill().map(() => new THREE.TextureLoader().load(url));

    bodyTextures.forEach(function (e) {
        e.magFilter = THREE.NearestFilter;
    })

    bodyTextures[0].offset.set(47/64, 0.25)
    bodyTextures[0].repeat.set(0.0625, 12/64);
    bodyTextures[1].offset.set(40/64, 0.25)
    bodyTextures[1].repeat.set(0.0625, 12/64);

    bodyTextures[2].offset.set(44/64, 12/64)
    bodyTextures[2].repeat.set(3/64, 0.0625);
    bodyTextures[3].offset.set(47/64, 12/64)
    bodyTextures[3].repeat.set(3/64, 0.0625);

    bodyTextures[4].offset.set(44/64, 0.25)
    bodyTextures[4].repeat.set(3/64, 0.1875);
    bodyTextures[5].offset.set(51/64, 0.25)
    bodyTextures[5].repeat.set(3/64, 0.1875);

    const materials = bodyTextures.map(e => new THREE.MeshStandardMaterial({ map: e, transparent:true, side: THREE.DoubleSide }))
    const cube = new THREE.Mesh(cubeGeometry, materials)
    cube.position.set(-5.5, 0, 0)
    return cube;
}

export function addStar() {
    const starGeometry = new THREE.SphereGeometry(0.25, 24, 24);
    const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(starGeometry, starMaterial);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
    star.position.set(x, y, z)
    return star
}

export function renderIGN(rank, monthlyRank, ign) {
    // const nameTagGeometry = new THREE.PlaneGeometry(10, 2);
    // const nameTagMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent:true, side: THREE.DoubleSide});
    // const nameTag = new THREE.Mesh(nameTagGeometry, nameTagMaterial);
    let color = 0xFFFFFF
    
    if (rank == undefined) {
        rank = ""
    }
    if (rank == "VIP") {
        color = 0x55FF55
        rank = "[VIP]"
    }
    if (rank == "VIP_PLUS") {
        color = 0x55FF55
        rank = "[VIP+]"
    }
    if (rank == "MVP") {
        color = 0x55FFFF
        rank = "[MVP]"
    }
    if (rank == "MVP_PLUS") {
        color = 0x55FFFF
        rank = "[MVP+]"
    }
    if (monthlyRank == "SUPERSTAR") {
        color = 0xFFAA00
        rank = "[MVP++]"
    }
    

    const nameTag = new Text()
    nameTag.text = (`${rank} ${ign}`).trim()
    nameTag.fontSize = 2
    nameTag.color = color
    nameTag.position.set(0, 18, 0)
    nameTag.anchorX = "center"
    nameTag.font = "Minecraftia-Regular.ttf"

    return nameTag
}

export function renderIGNBG() {
    const nameTagGeometry = new THREE.PlaneGeometry(10, 2);
    const nameTagMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent:true, side: THREE.DoubleSide});
    const nameTag = new THREE.Mesh(nameTagGeometry, nameTagMaterial);
    nameTag.position.set(0, 16, 0)
    return nameTag
}