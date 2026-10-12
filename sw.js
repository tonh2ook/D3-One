/* D3-One service worker — ทำให้ติดตั้งเป็นแอป / ปักหมุด taskbar ได้ (ไม่เก็บ cache เพื่อให้เห็นข้อมูลล่าสุดเสมอ) */
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
