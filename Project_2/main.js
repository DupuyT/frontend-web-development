import * as THREE from "three";

let scene, camera, renderer, cube, ambient, directional;

function init(){
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    ambient = new THREE.AmbientLight(0xffffff, 2)
    scene.add(ambient);
    directional = new THREE.DirectionalLight(0xffffff, 2);
    directional.position.x = 7;
    directional.position.y = 14;
    scene.add(directional);
    
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhysicalMaterial({
        color: 0x00ff03,
        roughness: 0.5,
        metalness: 0.7
    });
    
    cube = new THREE.Mesh(geometry, material);
    
    scene.add(cube);
    
    camera.position.z = 5;
}

function animate() {
	requestAnimationFrame(animate);
    cube.rotation.x += 0.01; 
    cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}

function OnWindowResize(){
    camera.aspect = window.innerWidth/ window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', OnWindowResize, false);

init();
animate();