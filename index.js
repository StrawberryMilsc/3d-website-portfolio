import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import trial_v from './shaders/trial_v.glsl.js'
import trial_f from './shaders/trial_f.glsl.js'


const canvas = document.querySelector('.webgl2')
const scene = new THREE.Scene()
const loader = new GLTFLoader();
// LOading existing Modules into three js
// loader.load(
//     'models/trial.glb',  
//     function(gltf) {
//         scene.add(gltf.scene)
//     },
//     function(xhr) {
//         console.log((xhr.loaded/xhr.total * 100) + '% loaded');
//     },
//     function(error){
//         console.log("An error has occured")
//     }
// )
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
const light = new THREE.PointLight(0xf60fff, 1, 100);
light.position.set(5,5,5);
scene.add(light);
const sizes = {
    width: window.innerWidth/2,
    height: window.innerHeight/2
}
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)
camera.position.set(0,-10,10)
scene.add(camera)

const screenSize = new THREE.Vector2(sizes.width,sizes.height);
const ico_geo = new THREE.SphereGeometry(5,32,32)
const ico_mat = new THREE.ShaderMaterial({
    uniforms: {
        time: {value:1.0},
        light_pos: {value: light.position},
        camera_pos: {value: camera.position},
        diffuse: {value: new THREE.Vector4(0.5,0.5,0.5,1.0)},
        color_i: {value: light.color},
        specular: {value: new THREE.Vector4(1.0,1.0,1.0,1.0)},
        shininess: {value: 5000},
        ambient: {value: new THREE.Vector4(0.1,0.1,0.1,1.0)}
    },

    vertexShader: trial_v,
    fragmentShader: trial_f
});
const ico = new THREE.Mesh(ico_geo,ico_mat)
scene.add(ico);






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