const FIGURES = [];

var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
	var renderer = new THREE.WebGLRenderer();
  renderer.shadowMapEnabled = true;
renderer.shadowMapSoft = true;
  camera.position.z = 6;
  let light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 0, 1, 1 );
        light.castShadow = true;
light.shadowDarkness = 0.5;
light.shadowCameraVisible = true; // only for debugging
// these six values define the boundaries of the yellow box seen above
light.shadowCameraNear = 2;
light.shadowCameraFar = 5;
light.shadowCameraLeft = -0.5;
light.shadowCameraRight = 0.5;
light.shadowCameraTop = 0.5;
light.shadowCameraBottom = -0.5;
        scene.add( light );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
  var render = function () {
	requestAnimationFrame( render );
  renderer.render(scene, camera);
	};
  render();

const button = document.getElementById("figure");
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function setCube(){
    button.innerText = "CUBE";
  }
function setSphere(){
    button.innerText = "SPHERE";
  }
function setPyramid(){
    button.innerText = "PYRAMID";
  }
function createFigure(){
  switch(button.innerText){
    case "CUBE":createCube();break;
    case "SPHERE":createSphere();break;
    case "PYRAMID":createPyramid();break;
  }
}
const list = document.getElementById("list");
function createCube(){
  let scale = document.getElementById("scale").value/10;
  var geometry = new THREE.BoxGeometry( scale*1, scale*1, scale*1 );
  var material = new THREE.MeshBasicMaterial( { color: 0x00aa00 } );
  var cube = new THREE.Mesh( geometry, material );
  cube.rotation.x = 0.41;
  cube.rotation.y = 0.21;
  cube.position.x=8-16*Math.random();
  cube.position.y= 4-8*Math.random();
  CUBE=cube;
  FIGURES.push(cube);
  scene.add(cube);
  let li = document.createElement('li');
  li.innerText=cube.id+"___________x";
  li.onclick=function (){
  let selectedObject = scene.getObjectById(cube.id);
  scene.remove( selectedObject );
  list.removeChild(this);
  }
  list.appendChild(li);
}
function createSphere(){
  let scale = document.getElementById("scale").value/10;
  var geometry = new THREE.SphereGeometry( 1*scale, 32, 32 );
  var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
  var sphere = new THREE.Mesh( geometry, material );
  sphere.position.x=8-16*Math.random();
  sphere.position.y= 4-8*Math.random();
  FIGURES.push(sphere);
  scene.add( sphere );
  let li = document.createElement('li');
  li.innerText=sphere.id+"___________x";
  li.onclick=function (){
  let selectedObject = scene.getObjectById(sphere.id);
  scene.remove( selectedObject );
  list.removeChild(this);
  }
  list.appendChild(li);
}

function createPyramid(){
  let scale = document.getElementById("scale").value/10;
  var geometry = new THREE.TetrahedronGeometry(1*scale, 0);
  var material = new THREE.MeshBasicMaterial( {color: 0xaffa10} );
  var pyramid = new THREE.Mesh( geometry, material );
  pyramid.position.x=8-16*Math.random();
  pyramid.position.y= 4-8*Math.random();
  FIGURES.push(pyramid);
  scene.add( pyramid );
  let li = document.createElement('li');
  li.innerText=pyramid.id+"___________x";
  li.onclick=function (){
  let selectedObject = scene.getObjectById(pyramid.id);
  scene.remove( selectedObject );
  list.removeChild(this);
  }
  list.appendChild(li);
}



// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

