import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

//light
const ambient = new THREE.AmbientLight(0xffffff, 2)
scene.add(ambient);
const directional = new THREE.DirectionalLight(0xffffff, 2);
directional.position.x = 7;
directional.position.y = 14;
scene.add(directional);


//cube

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhysicalMaterial({
    color: 0x00ff03,
    roughness: 0.5,
    metalness: 0.7
});

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

//create a render loop

function animate() {
	requestAnimationFrame(animate);
    cube.rotation.x += 0.01; cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}
requestAnimationFrame(animate);

