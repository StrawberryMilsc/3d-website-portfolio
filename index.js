import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import GourardVertex from './shaders/GourardVertex.glsl.js'
import GourardFragment from './shaders/GourardFragment.glsl.js'
import PhongVertex from './shaders/PhongVertex.glsl.js';
import PhongFragment from './shaders/PhongFragment.glsl.js';

const sizes = {
    width: window.innerWidth/2,
    height: window.innerHeight/2
}
GourardShader();
PhongShader();

function PhongShader() {
     //Find the Canvas in the HTML Doc
     const canvas = document.querySelector('.PS')
     // Create a scene and renderer and link it to the canvas
     const scene = new THREE.Scene()
     const renderer = new THREE.WebGLRenderer({
         canvas: canvas
     })

     //Create a point light (in the custom shader this is just a placeholder for the information)
    const light = new THREE.PointLight(0xf60fff, 1, 100);
    light.position.set(5,-5,10);
    scene.add(light);

    //Create a new Camera and add it to the scene
    const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)
    camera.position.set(0,-10,10)
    scene.add(camera)

    // Add the sphere with the custom shaders (Vertex and Fragment)
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

        vertexShader: PhongVertex,
        fragmentShader: PhongFragment
    });
    const ico = new THREE.Mesh(ico_geo,ico_mat)
    scene.add(ico);

    //Controlable camera for users to interact
    var controls = new OrbitControls( camera, renderer.domElement );
    setUpCamera(controls);



    //Final renderer boilerplate
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
    renderer.shadowMap.enabled = true

    //Main Looping functions
    function animate(){
        requestAnimationFrame(animate)
        controls.update();
        renderer.render(scene,camera)
    }

    animate()
}

function GourardShader() {
    //Find the Canvas in the HTML Doc
    const canvas = document.querySelector('.GS')
    // Create a scene and renderer and link it to the canvas
    const scene = new THREE.Scene()
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })

    //Create a point light (in the custom shader this is just a placeholder for the information)
    const light = new THREE.PointLight(0xf60fff, 1, 100);
    light.position.set(5,-5,10);
    scene.add(light);

    //Create a new Camera and add it to the scene
    const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)
    camera.position.set(0,-10,10)
    scene.add(camera)

    // Add the sphere with the custom shaders (Vertex and Fragment)
    const ico_geo = new THREE.SphereGeometry(5,32,32)
    const ico_mat = new THREE.ShaderMaterial({
        uniforms: {
            time: {value:1.0},
            light_pos: {value: light.position},
            camera_pos: {value: camera.position},
            diffuse: {value: new THREE.Vector4(0.25,0.25,0.25,1.0)},
            color_i: {value: light.color},
            specular: {value: new THREE.Vector4(1.0,1.0,1.0,1.0)},
            shininess: {value: 5000},
            ambient: {value: new THREE.Vector4(0.1,0.1,0.1,1.0)}
        },

        vertexShader: GourardVertex,
        fragmentShader: GourardFragment
    });
    const ico = new THREE.Mesh(ico_geo,ico_mat)
    scene.add(ico);





    //Controlable camera for users to interact
    var controls = new OrbitControls( camera, renderer.domElement );
    setUpCamera(controls);




    //Final renderer boilerplate
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
    renderer.shadowMap.enabled = true

    //Main Looping functions
    function animate(){
        requestAnimationFrame(animate)
        controls.update( );
        renderer.render(scene,camera)
    }

    animate()

}


//Setup the Interactable Camera 
function setUpCamera(controls) {
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
}

//const loader = new GLTFLoader();
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