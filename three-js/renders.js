import * as THREE from "three"

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
    headTextures[3].offset.set(0.25, 0.875)
    headTextures[4].offset.set(0.125, 0.75)
    headTextures[5].offset.set(0.375, 0.75)

    const materials = headTextures.map(e => new THREE.MeshStandardMaterial({ map: e }))
    const cube = new THREE.Mesh(cubeGeometry, materials)
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
    cube.position.set(0, -10, 0)
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
    cube.position.set(-6, -10, 0)
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
    cube.position.set(-2, -22, 0)
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
    cube.position.set(6, -10, 0)
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
    cube.position.set(2, -22, 0)
    return cube;
}

export function renderHelmet(url) {
    const cubeGeometry = new THREE.BoxGeometry(9, 9, 9);
    var headTextures = Array(6).fill().map(() => new THREE.TextureLoader().load(url));

    headTextures.forEach(function (e) {
        e.repeat.set(0.125, 0.125);
        e.magFilter = THREE.NearestFilter;
    })

    headTextures[0].offset.set(0.75, 0.75)
    headTextures[1].offset.set(0.5, 0.75)
    headTextures[2].offset.set(0.625, 0.875)
    headTextures[3].offset.set(0.75, 0.875)
    headTextures[4].offset.set(0.625, 0.75)
    headTextures[5].offset.set(0.875, 0.75)

    const materials2 = headTextures.map(e => new THREE.MeshStandardMaterial({ map: e, transparent: true,  side: THREE.DoubleSide }))
    const materials = headTextures.map(e => new THREE.MeshStandardMaterial({ map: e, transparent: true, side: THREE.DoubleSide }))
    const cube = new THREE.Mesh(cubeGeometry, materials)
    const cube2 = new THREE.Mesh(cubeGeometry, materials2)
    return cube, cube2;
}


export function addStar() {
    const starGeometry = new THREE.SphereGeometry(0.25, 24, 24);
    const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(starGeometry, starMaterial);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
    star.position.set(x, y, z)
    return star
}