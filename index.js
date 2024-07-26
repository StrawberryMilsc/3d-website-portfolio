import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';

const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()

const sqr = new THREE.BoxGeometry(1,1,1)
const sqr_mat = new THREE.MeshBasicMaterial({
    color: 0x00ff00
})

const sqr_mesh = new THREE.Mesh(sqr,sqr_mat)
scene.add(sqr_mesh)



const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)
camera.position.set(0,1,2)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
renderer.shadowMap.enabled = true

function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
}

animate()