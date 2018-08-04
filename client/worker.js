console.log('service worker loaded');

self.addEventListener('push',(e) =>{
    const data =  e.data.json();
    console.log('data received');
    self.registration.showNotification(data.title,{
        body:'Notified By travery',
        icon:'http://image.ibb.co/frYOFd/tmlogo.png'
    })
})