// src/common.js - fungsi bantu bersama untuk kedua demo (status dan pemeriksaan kamera)

const LOAD_TIMEOUT_MS = 60000;

export function setStatus(text, state) {
  const el = document.getElementById('status');
  if (el) {
    el.textContent = text;
    el.dataset.state = state;
  }
}

export function checkCameraSupport() {
  if (!window.isSecureContext) {
    return 'Halaman bukan secure context. Buka lewat HTTPS (mis. GitHub Pages) atau http://localhost di laptop.';
  }
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    return 'Browser ini tidak menyediakan akses kamera (getUserMedia).';
  }
  return null;
}

export function setupStartButton(startFn) {
  const btn = document.getElementById('startBtn');
  if (!btn) return;
  btn.addEventListener('click', async () => {
    const problem = checkCameraSupport();
    if (problem) {
      setStatus('Error: ' + problem, 'error');
      return;
    }
    btn.disabled = true;
    const consent = document.getElementById('consent');
    if (consent) consent.style.display = 'none';
    setStatus('Memuat... izinkan kamera jika diminta', 'idle');
    try {
      const timeout = new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), LOAD_TIMEOUT_MS));
      await Promise.race([startFn(), timeout]);
    } catch (err) {
      console.error('Gagal memulai:', err);
      if (consent) consent.style.display = 'flex';
      btn.disabled = false;
      setStatus('Error: gagal/terlalu lama memuat. Periksa izin kamera, internet, HTTPS, dan Console.', 'error');
    }
  });
}
