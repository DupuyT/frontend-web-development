// let scene, camera, renderer, cube, ambient, directional;

// function init(){
//     scene = new THREE.Scene();

//     camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    
//     renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);
    
//     ambient = new THREE.AmbientLight(0xffffff, 2)
//     scene.add(ambient);
//     directional = new THREE.DirectionalLight(0xffffff, 2);
//     directional.position.x = 7;
//     directional.position.y = 14;
//     scene.add(directional);

//     // var geometry = new THREE.PlaneGeometry(
//     //     100, 100, // Width and Height
//     //     10, 10    // Terrain resolution
//     //   );
//     // geometry.dynamic = true;
//     // geometry.__dirtyVertices = true;
    

//     // HtmlTerrain.prototype.applyTerrainTransform = function(fn) {
//     //     var geometry = fn(self.terrain.geometry);
//     //     geometry.__dirtyVertices = true;
//     //     geometry.computeCentroids();
//     //     self.buildTerrain(geometry);
//     //     self.terrain.geometry = geometry;
//     //     return geometry;
//     //   };

//     // HtmlTerrain.prototype.buildTerrain = function(geometry) {
//     //     var mesh = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color: 0xcccccc}));
//     //     mesh.rotation.x = -90 * Math.PI / 180;
//     //     self.scene.remove(self.scene.getChildByName("Terrain"));
//     //     mesh.name = "Terrain";
//     //     self.scene.add(mesh);
//     //   };

//     // HtmlTerrain.prototype.raiseTerrain = function(geometry) {
//     //     for (var i = 0; i < geometry.vertices.length; i++) {
//     //       geometry.vertices[i].position.z += 3;
//     //     }
//     //     return geometry;
//     //   };

//     //   geometry.computeCentroids();
    
//     // const geometry = new THREE.BoxGeometry(1, 1, 1);
//     // const material = new THREE.MeshPhysicalMaterial({
//     //     color: 0x00ff03,
//     //     roughness: 0.5,
//     //     metalness: 0.7
//     // });
    
//     // cube = new THREE.Mesh(geometry, material);
    
//     // scene.add(cube);
//  camera.position.z = 5;

//  const terrain = new Terrain({
//     width: 640,
//     height: 255,
//     depth: 640,
//     maps: {
//       colorRGBheightAlpha: '/terrain.png',
//       /*
//         colorRGB: colormap from image RGB
//         colorRGBheightAlpha: colormap from image RGB + heightmap from alpha channel
//         colorRGBheightRGB: colormap from RGB + heightmap from RGB grayscale
//         heightAlpha: heightmap from image alpha channel
//         heightR: heightmap from image red channel
//         heightRGB: heightmap from image RGB grayscale
//       */
//     },
//   });
//  scene.add(terrain);
// };
// // Assuming you already have your global scene, add the terrain to it

// // Generate a terrain
// // var xS = 63, yS = 63;
// // terrainScene = THREE.Terrain({
// //     // easing: THREE.Terrain.Linear,
// //     frequency: 2.5,
// //     // heightmap: THREE.Terrain.DiamondSquare,
// //     material: new THREE.MeshBasicMaterial({color: 0x5566aa}),
// //     maxHeight: 100,
// //     minHeight: -100,
// //     steps: 1,
// //     xSegments: xS,
// //     xSize: 1024,
// //     ySegments: yS,
// //     ySize: 1024,
// // });
// // // Assuming you already have your global scene, add the terrain to it
// // scene.add(terrainScene);

// // // Optional:
// // // Get the geometry of the terrain across which you want to scatter meshes
// // var geo = terrainScene.children[0].geometry;
// // // Add randomly distributed foliage
// // decoScene = THREE.Terrain.ScatterMeshes(geo, {
// //     mesh: new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 12, 6)),
// //     w: xS,
// //     h: yS,
// //     spread: 0.02,
// //     randomness: Math.random,
// // });
// // terrainScene.add(decoScene);



// function animate() {
// 	requestAnimationFrame(animate);
// 	renderer.render(scene, camera);
// }

// function OnWindowResize(){
//     camera.aspect = window.innerWidth/ window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// }

// window.addEventListener('resize', OnWindowResize, false);

// init();
// animate();

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 100000);
camera.position.set(0, 250, 1000)


const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.setClearColor(0xcccccc, 1.0);
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.screenSpacePanning = true;
const sceneMeshes = [];

const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);
axesHelper.position.y = 0

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
scene.add(hemiLight);

const shadowLight = new THREE.DirectionalLight(0xffffff, 0.8);

// Set the direction of the light  
shadowLight.position.set(0, 1000, 0);
// Allow shadow casting 
shadowLight.castShadow = true
// define the visible area of the projected shadow
shadowLight.shadow.camera.left = -400;
shadowLight.shadow.camera.right = 400;
shadowLight.shadow.camera.top = 400;
shadowLight.shadow.camera.bottom = -400;
shadowLight.shadow.camera.near = 1;
shadowLight.shadow.camera.far = 10000;
// define the resolution of the shadow; the higher the better, 
// but also the more expensive and less performant
shadowLight.shadow.mapSize.width = 2048;
shadowLight.shadow.mapSize.height = 2048;
// to activate the lights, just add them to the scene
scene.add(shadowLight);

//

// Generate a terrain
var xS = 63,
  yS = 63;
terrainScene = THREE.Terrain({
  easing: THREE.Terrain.Linear,
  frequency: 2.5,
  heightmap: THREE.Terrain.DiamondSquare,
  material: new THREE.MeshLambertMaterial({
    color: 0x654321
  }),
  maxHeight: 100,
  minHeight: -100,
  steps: 1,
  xSegments: xS,
  xSize: 1024,
  ySegments: yS,
  ySize: 1024,
});
// Assuming you already have your global scene, add the terrain to it
scene.add(terrainScene);


const animate = function() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

function OnWindowResize(){
    camera.aspect = window.innerWidth/ window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', OnWindowResize, false);

animate();