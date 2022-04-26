var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var cube, cube2; //cubes that will be rotating
var modelObject;
var loader = new THREE.FontLoader();

//Font/Text
// loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
//
// var geometry = new THREE.TextGeometry( 'Howdy!', {
//         font: font,
//         size: 80,
//         height: 5,
//         curveSegments: 12,
//         bevelEnabled: true,
//         bevelThickness: 10,
//         bevelSize: 8,
//         bevelOffset: 0,
//         bevelSegments: 5
//     } );
// } );

// renderer.setClearColor(0xdddddd)
//  renderer.setSize(window.innerWidth, window.innerHeight)
//
//  var increment = 0
//  var render = function(){
//    increment += 0.01
//    requestAnimationFrame(render);
//
//    spinCamera()
//    renderer.render(scene, camera);
//  };
//  loadFont()
//  render();

 //Settings
 // var text = "aems",
 //    height = 2,
 //    size = 12,
 //    curveSegments = 10,
 //    bevelThickness = 1,
 //    bevelSize = 0.3,
 //    bevelSegments = 3,
 //    bevelEnabled = true,
 //    font = undefined
 //
 //  var rotation = 0
 //
 //  function loadFont() {
 //    var loader = new THREE.FontLoader();
 //
 //    loader.load( 'fonts/helvetiker_regular.typeface.json', function(res) {
 //     font = res;
 //     createText();
 //   });
 //
 //  }

//   function createText(){
//     //change text right here
//     textGeo = new THREE.TextGeometry('Howdy!', {
//          font: font,
//          size: size,
//          height: height,
//          curveSegments: curveSegments,
//          weight: "normal",
//          bevelThickness: bevelThickness,
//          bevelSize: bevelSize,
//          bevelSegments: bevelSegments,
//          bevelEnabled: bevelEnabled
//      });
//      textGeo.computeBoundingBox();
//      textGeo.computeVertexNormals();
//
//
//   //change the color
//   var color = new THREE.Color(0xff0000);
//   var textMaterial = new THREE.MeshBasicMaterial({
//     color: color
//   });
//   var text = new THREE.Mesh(textGeo, textMaterial)
//   text.position.x = -textGeo.boundingBox.max.x / 2;
//   text.castShadow = true;
//   scene.add(text)
// }


//first box
function createBox() {
  // create a box
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({
    //color: 0x324ca8
    //changed to purple 0x is a hexadecimal indicating that the number being written is in hex
    color: 0x7300ff
  });
  cube = new THREE.Mesh(geometry, material);
  //cube.position.set(50, 0, 0); (x, y, z)
  cube.position.set(50, 10, -10); //will ‘z’ make it further/deeper on the canvas??
  scene.add(cube);
  cube.scale.x = 7; // SCALE
  cube.scale.y = 15; // SCALE
  cube.scale.z = 15; // SCALE
  animate();
}

//make the first box move (animate)
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.025; //don’t want to overwhelm
  cube.rotation.y += 0.02; //+= 0.01
  createBox2();
  renderer.render(scene, camera);
}

//create the second box and add it as a child of the first box
function createBox2() {
  //create 2nd box
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({
    //color: 0x1234ee
   color: 0xc800ff
  });
  cube2 = new THREE.Mesh(geometry, material);
  cube2.position.set(2, 0);
  cube.add(cube2);
  cube2.scale.x = .5; // SCALE
  cube2.scale.y = .5; // SCALE
  cube2.scale.z = 1.5; // SCALE, all previously at .5
  animate2();
}

//animate 2nd box
function animate2() {
  requestAnimationFrame(animate2);
  cube2.rotation.x += 0.05;
  cube2.rotation.y += 0.07; //+=0.05
}

/*Create scene object with background color */

function getScene() {
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0xaaaaaa);
  return scene;
}

/*  Generate the camera for the scene
 -  [0] field of view: identifies the portion of the scene
      visible at any time (in degrees)
 -   [1] aspect ratio: identifies the aspect ratio of the
      scene in width/height
 -   [2] near clipping plane: objects closer than the near
      clipping plane are culled from the scene
 -   [3] far clipping plane: objects farther than the far
      clipping plane are culled from the scene  */

function getCamera() {
  var aspectRatio = window.innerWidth / window.innerHeight;
  var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  camera.position.set(0, 90, -10);
  return camera;
}

/**
 * Generate the light to be used in the scene. Light args:
 *   [0]: Hexadecimal color of the light
 *   [1]: Numeric value of the light's strength/intensity
 *   [2]: The distance from the light where the intensity is 0
 * @param {obj} scene: the current scene object
 **/

function getLight(scene) {
  var light = new THREE.PointLight(0xffffff, 1, 0); //ffffff is white
  light.position.set(20, 50, 20);
  scene.add(light);

  var ambientLight = new THREE.AmbientLight(0x111111);
  scene.add(ambientLight);
  return light;
}

/* Generate the renderer to be used in the scene */

function getRenderer() {
  // Create the canvas with a renderer
  var renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  // Add support for retina displays
  renderer.setPixelRatio(window.devicePixelRatio);
  // Specify the size of the canvas
  renderer.setSize(window.innerWidth, window.innerHeight);
  // Add the canvas to the DOM
  document.body.appendChild(renderer.domElement);
  return renderer;
}

/*Generate the controls to be used in the scene
-@param {obj} camera: the three.js camera for the scene
-@param {obj} renderer: the three.js renderer for the scene*/

function getControls(camera, renderer) {
  var controls = new THREE.TrackballControls(camera, renderer.domElement);
  controls.zoomSpeed = 0.4;
  controls.panSpeed = 0.4; //can I change this or will it fuck it up?
  return controls;
}

/* Load in new 3D model */
function loadModel() {
  loader = new THREE.OBJLoader();
  loader.load('models/lambo.obj', function (object) {
    object.rotation.z = Math.PI;
    modelObject = object;
    scene.add(object);
    animateModel();
  });
}

function animateModel() {
  requestAnimationFrame(animateModel);
  modelObject.rotation.x += 0.07;   //modelObject.rotation.x += 0.05;
  modelObject.rotation.y += 0.05;
}

/* Render the scene */
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  controls.update();
};

var scene = getScene();
var camera = getCamera();
var light = getLight(scene);
var renderer = getRenderer();
var controls = getControls(camera, renderer);
var game1 = createBox();
loadModel()

render();
