// sw.js

self.addEventListener('push', function(event) {
  const options = {
    body: event.data.text(),
    icon: 'icon.png', // 알림 아이콘 URL
    badge: 'clock.JPG', // 뱃지 아이콘 URL
  };

  event.waitUntil(
    self.registration.showNotification('웹 알림', options)
  );
});
