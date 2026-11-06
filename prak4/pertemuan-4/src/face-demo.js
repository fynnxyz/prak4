// src/face-demo.js - Demonstrasi 2: face tracking (MindAR + Three.js) - topeng
import * as THREE from 'three';
import { MindARThree } from '../vendor/mindar/mindar-face-three.prod.js';
import { setStatus, setupStartButton } from './common.js';

const ANCHOR_INDEX = 168; // antara kedua mata

function buildFullMask() {
  const g = new THREE.Group();
  const armor = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.25, metalness: 0.85 });
  const red = new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0x7f1d1d, roughness: 0.3, metalness: 0.6 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.2, metalness: 0.9 });
  const cyan = new THREE.MeshBasicMaterial({ color: 0x00f0ff });

  const add = (geometry, material, position, rotation = null) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...position);
    if (rotation) mesh.rotation.set(...rotation);
    g.add(mesh);
  };

  add(new THREE.BoxGeometry(0.52, 0.18, 0.08), armor, [0, 0.16, 0.02]);
  add(new THREE.BoxGeometry(0.12, 0.08, 0.10), gold, [0, 0.20, 0.04]);
  for (const sx of [-1, 1]) {
    add(new THREE.BoxGeometry(0.15, 0.38, 0.08), armor, [sx * 0.22, -0.04, -0.01], [0, sx * 0.25, 0]);
    add(new THREE.ConeGeometry(0.03, 0.16, 4), red, [sx * 0.26, 0.12, 0.02], [0, 0, sx * -0.3]);
    add(new THREE.BoxGeometry(0.12, 0.035, 0.05), cyan, [sx * 0.12, 0.02, 0.085]);
    add(new THREE.BoxGeometry(0.08, 0.02, 0.11), red, [sx * 0.12, -0.22, 0.05]);
  }
  add(new THREE.BoxGeometry(0.12, 0.20, 0.10), armor, [0, -0.05, 0.08]);
  add(new THREE.BoxGeometry(0.38, 0.18, 0.10), armor, [0, -0.22, 0.04]);
  add(new THREE.BoxGeometry(0.24, 0.09, 0.08), gold, [0, -0.33, 0.02]);
  g.scale.setScalar(1.12);
  g.position.set(0, -0.02, 0.06);
  return g;
}
async function start() {
  const mindarThree = new MindARThree({ container: document.getElementById('container') });
  const { renderer, scene, camera } = mindarThree;
  const anchor = mindarThree.addAnchor(ANCHOR_INDEX);
  anchor.group.add(buildFullMask());

  scene.add(new THREE.HemisphereLight(0xffffff, 0x667788, 1.4));
  const dir = new THREE.DirectionalLight(0xffffff, 1.5);
  dir.position.set(0, 1, 2);
  scene.add(dir);

  await mindarThree.start();
  setStatus('Mencari wajah', 'searching');

  let hadFace = false, lostCount = 0;
  renderer.setAnimationLoop(() => {
    const hasFace = mindarThree.getLatestEstimate() !== null;
    if (hasFace !== hadFace) {
      hadFace = hasFace;
      if (hasFace) {
        setStatus('Wajah terdeteksi', 'found');
      } else {
        lostCount++;
        setStatus('Wajah tidak terdeteksi - mencari wajah', 'searching');
      }
      document.getElementById('info').textContent = 'Wajah hilang ' + lostCount + ' kali.';
    }
    renderer.render(scene, camera);
  });
}

setupStartButton(start);
