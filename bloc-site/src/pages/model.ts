import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function setupModelPage() {
  const container = document.getElementById('model-container');
  if (!container) {
    console.error('No container with id "model-container" found');
    return;
  }

  const placeholder = container.querySelector('.model-placeholder');
  if (placeholder) container.removeChild(placeholder);

  // Create renderer and append to container
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setClearColor(0x000000);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.body.appendChild(renderer.domElement);
  console.log("Canvas added to model-container", renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1,
    100
  );
  camera.position.set(0, 1.5, 2);
  camera.lookAt(0, 1, 0);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 1.5, 0);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 1.5;
  controls.maxDistance = 3;
  controls.maxPolarAngle = Math.PI / 2;
  controls.update();

  const lightPositions = [
    [0, 3, 2],
    [2, 2, 0],
    [-2, 2, -2]
  ];

  lightPositions.forEach(pos => {
    const light = new THREE.SpotLight(0xffffff, 5);
    light.position.set(...pos);
    light.angle = Math.PI / 4;
    light.penumbra = 0.5;
    light.castShadow = true;
    scene.add(light);
  });

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20).rotateX(-Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: 0x102f88, side: THREE.DoubleSide })
  );
  ground.receiveShadow = true;
  scene.add(ground);

  const loader = new GLTFLoader().setPath('./model/');
  loader.load(
    'bloc file.glb',
    (gltf) => {
      console.log('Model loaded successfully', gltf);
      const blocModel = gltf.scene;
      scene.add(blocModel);
    },
    (xhr) => {
      console.log(`Loading model: ${(xhr.loaded / xhr.total) * 100}%`);
    },
    (error) => {
      console.error('An error happened while loading the model:', error);
    }
  );
  function render() {
    if (resizeRendererToDisplaySize(renderer)) {
      // resizing already handled
    }
    renderer.render(scene, camera);
  }
  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    return needResize;
  }



  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    render();
  }

  animate();
}
