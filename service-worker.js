self.addEventListener('install', event => {
    console.log("Service worker Installing!");
  });
  
  //service worker가 activate 되었을 때 이벤트 발생
  self.addEventListener('activate', event => {
    console.log("Service worker Activating!");
    return self.clients.claim();
  });