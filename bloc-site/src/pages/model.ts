import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function setupModelPage() {
  const container = document.getElementById('model-container');
  if (!container) {
    console.error('No container with id "model-container" found');
    return;
  }

  const canvas = document.getElementById('c') as HTMLCanvasElement;
  if (!canvas) {
    console.error('No canvas element with id "c" found');
    return;
  }

  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setClearColor(0x000000);
  renderer.setPixelRatio(window.devicePixelRatio);
  // Enable shadows in the renderer
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x009d60); 

  const camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1,
    100
  );
  camera.position.set(0, 2, 5); // Adjusted camera position for better view

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 1, 0); // Focus on the center of the model
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 1.5; // Minimum distance from the model
  controls.maxDistance = 3.5; // Maximum distance from the model
  controls.maxPolarAngle = Math.PI / 2;

  // Disable zoom
  controls.enableZoom = false;

  controls.update();

  // Add balanced lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4); // Soft ambient light for overall illumination
  scene.add(ambientLight);

  // Add three directional lights from the top
  const topLight1 = new THREE.DirectionalLight(0xffffff, 2); // White light
  topLight1.position.set(5, 10, 5); // Top-right
  topLight1.castShadow = true;
  scene.add(topLight1);

  const topLight2 = new THREE.DirectionalLight(0xffffff, 0.6); // White light
  topLight2.position.set(-5, 10, 5); // Top-left
  topLight2.castShadow = true;
  scene.add(topLight2);

  const topLight3 = new THREE.DirectionalLight(0xffffff, 0.6); // White light
  topLight3.position.set(0, 10, -5); // Top-center-back
  topLight3.castShadow = true;
  scene.add(topLight3);

  // Optional: Add helpers to visualize light positions (for debugging)
  // const lightHelper1 = new THREE.DirectionalLightHelper(topLight1, 1);
  // const lightHelper2 = new THREE.DirectionalLightHelper(topLight2, 1);
  // const lightHelper3 = new THREE.DirectionalLightHelper(topLight3, 1);
  // scene.add(lightHelper1, lightHelper2, lightHelper3); // Remove this line

  let blocModel: THREE.Object3D | null = null; // Declare a variable to store the model

  const loader = new GLTFLoader().setPath('./model/');
  loader.load(
    'bloc_model.gltf',
    (gltf) => {
      console.log('Model loaded successfully', gltf);
      blocModel = gltf.scene; // Store the model reference
      blocModel.scale.set(4, 4, 4); // Scale the model
      scene.add(blocModel);

      // Center the camera on the model
      const box = new THREE.Box3().setFromObject(blocModel);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      controls.target.copy(center); // Focus on the model's center

      // Adjust the camera position
      camera.position.set(center.x, center.y + size.y * 0.8, center.z + size.z * 1.5);
      controls.update();
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

  function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer) {
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

  let isUserInteracting = false; // Flag to track user interaction

  // Listen for user interaction events
  controls.addEventListener('start', () => {
    isUserInteracting = true; // Stop rotation when user starts interacting
  });

  controls.addEventListener('end', () => {
    isUserInteracting = false; // Resume rotation when user stops interacting
  });

  function animate() {
    requestAnimationFrame(animate);

    // Rotate the model slowly if the user is not interacting
    if (blocModel && !isUserInteracting) {
      blocModel.rotation.y += 0.0002; // Adjust the speed by changing the increment value
    }

    controls.update();
    render();
  }

  animate();
}