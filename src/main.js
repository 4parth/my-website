import './style.css'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
const canvas = document.getElementById('torusCanvas');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);
camera.position.setZ(30)

const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(0,0,0)


const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)


const gridHelper = new THREE.GridHelper(200,50)


const controls = new OrbitControls(camera, renderer.domElement);

camera.position.z = 5;

function animate(){
  requestAnimationFrame(animate)
  torus.rotation.x += 0.01
  torus.rotation.y += 0.005
  torus.rotation.z += 0.01

  controls.update()
  renderer.render(scene, camera)  
}
//animate()


