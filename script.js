const subscribeButton = document.getElementById('subscribeButton');
const pushButton = document.getElementById('pushButton');

let isSubscribed = false;
let swRegistration = null;

if ('serviceWorker' in navigator && 'PushManager' in window) {
  navigator.serviceWorker.register('sw.js').then(swReg => {
    swRegistration = swReg;
    initializeUI();
  });
}

function initializeUI() {
  subscribeButton.addEventListener('click', () => {
    if (!isSubscribed) {
      subscribeToPush();
    } else {
      unsubscribeFromPush();
    }
  });

  pushButton.addEventListener('click', () => {
    if (isSubscribed) {
      sendPushNotification();
    }
  });

  // TODO: 현재 구독 상태 확인 및 버튼 표시 업데이트
}

function subscribeToPush() {
  swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array('YOUR_PUBLIC_KEY'),
  })
  .then(subscription => {
    console.log('구독 성공:', subscription);
    isSubscribed = true;
    updateUI();
  })
  .catch(error => {
    console.error('구독 실패:', error);
  });
}

function unsubscribeFromPush() {
  // TODO: 구독 취소 로직 작성
}

function sendPushNotification() {
  setTimeout(() => {
    const options = {
      body: '10초 후에 온 웹 푸시 알림입니다!',
      icon: '/path/to/icon.png', // 이미지 경로를 실제 이미지로 바꿔주세요.
    };

    self.registration.showNotification('웹 푸시 알림', options);
  }, 10000); // 10초(10000 밀리초) 후에 실행
}

// Base64를 Uint8Array로 변환하는 함수
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
