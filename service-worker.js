// service-worker.js

self.addEventListener('push', event => {
  const options = {
    body: '잠시 후 도착 예정입니다.',
    icon: 'clock.JPG'
  };
  
  event.waitUntil(
    self.registration.showNotification('Notification Title', options)
  );
});

self.addEventListener('notificationclick', event => {
  console.log('Notification clicked from background');
  // 여기에 클릭 시 수행할 동작 추가
});
