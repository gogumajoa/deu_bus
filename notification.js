if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
      
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

            registration.showNotification('Notification Title', options);
          }, 10000); // 10초 지연
        }
      });
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}
