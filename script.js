const pushButton = document.getElementById('pushButton');
let swRegistration = null; // swRegistration 변수 추가

if ('serviceWorker' in navigator && 'PushManager' in window) {
  navigator.serviceWorker.register('sw.js').then(swReg => {
    swRegistration = swReg; // swRegistration에 할당
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

      if (swRegistration) {
        swRegistration.showNotification('웹 푸시 알림', options); // swRegistration 사용
      } else {
        console.error('서비스 워커 등록 객체가 설정되지 않았습니다.');
      }
    }, 1000); // 10초(10000 밀리초) 후에 실행
  });
}
