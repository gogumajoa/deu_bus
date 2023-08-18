self.addEventListener('push', event => {
  // 고정된 알림 내용과 아이콘을 설정합니다.
  const options = {
    body: 'This is the notification body',
    icon: 'clock.JPG'
  };
  
  // 알림을 생성하고 표시합니다.
  event.waitUntil(
    self.registration.showNotification('Notification Title', options)
  );
});

self.addEventListener('notificationclick', event => {
  console.log('Notification clicked from background');
  // 여기에 클릭 시 수행할 동작 추가
});
