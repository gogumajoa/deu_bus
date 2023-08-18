if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}

document.querySelector('#request-notification-permission').addEventListener('click', async () => {
  try {
    const permission = await Notification.requestPermission();
    console.log('Notification permission:', permission);
  } catch (error) {
    console.error('Error requesting notification permission:', error);
  }
});

document.querySelector('#show-notification').addEventListener('click', () => {
  if (Notification.permission === 'granted') {
    setTimeout(() => {
      const options = {
        body: 'This is the notification body',
        icon: 'clock.JPG'
      };
      
      const notificationPromise = self.registration.showNotification('Notification Title', options);
      
      notificationPromise.then(notification => {
        notification.onclick = () => {
          console.log('Notification clicked');
          // 여기에 클릭 시 수행할 동작 추가
        };
      });
    }, 10000); // 10초 지연
  }
});