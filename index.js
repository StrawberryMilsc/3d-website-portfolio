import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()
const loader = new GLTFLoader();

loader.load(
    'models/trial.glb',  
    function(gltf) {
        scene.add(gltf.scene)
    },
    function(xhr) {
        console.log((xhr.loaded/xhr.total * 100) + '% loaded');
    },
    function(error){
        console.log("An error has occured")
    }
)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)
camera.position.set(0,3,7)
scene.add(camera)

const sun = new THREE.DirectionalLight(0xffffff,1)
sun.position.set(0,1,100)
scene.add(sun)



var controls = new OrbitControls( camera, renderer.domElement );
    controls.enableDamping = true;





renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
renderer.shadowMap.enabled = true

function animate(){
    requestAnimationFrame(animate)
    controls.update( );
    renderer.render(scene,camera)
}

animate()