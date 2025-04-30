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
  camera.position.set(5, 2, 5);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(1, 0, 0);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  // Disable zoom completely
  controls.enableZoom = false;

  // Disable panning
  controls.enablePan = false;

  // Lock the camera distance by setting minDistance and maxDistance to the same value
  controls.minDistance = 3.5; // Adjust this value based on your desired camera distance
  controls.maxDistance = 3.5;

  // Prevent the camera from going below the model
  controls.maxPolarAngle = Math.PI / 2;

  // Update controls
  controls.update();

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  const topLight1 = new THREE.DirectionalLight(0xffffff, 2);
  topLight1.position.set(5, 10, 5);
  topLight1.castShadow = true;
  scene.add(topLight1);

  const topLight2 = new THREE.DirectionalLight(0xffffff, 0.6);
  topLight2.position.set(-5, 10, 5);
  topLight2.castShadow = true;
  scene.add(topLight2);

  const topLight3 = new THREE.DirectionalLight(0xffffff, 0.6);
  topLight3.position.set(0, 10, -5);
  topLight3.castShadow = true;
  scene.add(topLight3);

  let blocModel: THREE.Object3D | null = null;

  const baseUrl = import.meta.env.BASE_URL || '/';
  const loader = new GLTFLoader().setPath(`${baseUrl}model/`);
  loader.load(
    'bloc_model.gltf',
    (gltf) => {
      console.log('Model loaded successfully', gltf);
      blocModel = gltf.scene;
      blocModel.scale.set(4, 4, 4);
      scene.add(blocModel);

      const box = new THREE.Box3().setFromObject(blocModel);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      blocModel.position.sub(center);

      // Center the model vertically
      blocModel.position.y += size.y * 0.5;

      controls.target.copy(center);
      controls.update();

      // Calculate the distance the camera needs to be to fit the model
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180); // Convert FOV to radians
      const cameraDistance = maxDim / (2 * Math.tan(fov / 2)); // Distance based on FOV and model size

      // Adjust the camera position to center on the model
      camera.position.set(center.x, center.y, center.z + cameraDistance * 1.2); // Center the camera vertically
      camera.lookAt(center);
      camera.updateProjectionMatrix();
    },
    (xhr) => {
      console.log(`Loading model: ${(xhr.loaded / xhr.total) * 100}%`);
    },
    (error) => {
      console.error('An error happened while loading the model:', error);
    }
  );

  function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer) {
    const canvas = renderer.domElement;
    const container = document.getElementById('model-container');
    if (!container) {
      console.error('No container with id "model-container" found');
      return false;
    }

    const width = container.clientWidth;
    const height = container.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;

    if (needResize) {
      renderer.setSize(width, height, false);
      camera.aspect = width / height; // Update the camera's aspect ratio
      camera.updateProjectionMatrix(); // Apply the updated aspect ratio
    }

    return needResize;
  }

  function render() {
    if (resizeRendererToDisplaySize(renderer)) {
      // resizing already handled
    }
    renderer.render(scene, camera);
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  animate();
}