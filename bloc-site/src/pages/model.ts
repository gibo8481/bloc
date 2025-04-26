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
  controls.target.set(0, 0, 0);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 1.5;
  controls.maxDistance = 3.5;
  controls.maxPolarAngle = Math.PI / 2;
  controls.enableZoom = false;
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

  const loader = new GLTFLoader().setPath('./model/');
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
      blocModel.position.y += size.y * 0.5;

      controls.target.copy(center);
      controls.update();

      const maxDim = Math.max(size.x, size.y, size.z);
      const cameraDistance = maxDim * 1.8;
      camera.position.set(center.x, center.y + size.y * 0.5, center.z + cameraDistance);
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
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
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