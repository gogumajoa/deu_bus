const pushButton = document.getElementById('pushButton');

if ('serviceWorker' in navigator && 'PushManager' in window) {
  navigator.serviceWorker.register('sw.js').then(swReg => {
    swRegistration = swReg;
    initializePushNotification();
  });
}

function initializePushNotification() {
  pushButton.addEventListener('click', () => {
    setTimeout(() => {
      const options = {
        body: '10초 후에 온 웹 푸시 알림입니다!',
        icon: 'clock.JPG', // 이미지 경로를 실제 이미지로 바꿔주세요.
      };

      self.registration.showNotification('웹 푸시 알림', options);
    }, 1000); // 10초(10000 밀리초) 후에 실행
  });
}
