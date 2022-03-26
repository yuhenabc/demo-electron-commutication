document.addEventListener('DOMContentLoaded', () => {
  const ipc = window.ipc;
  let lastSent = Date.now();
  function ping(count) {
    ipc.send('ping', count);
    console.log('sent', count);
    lastSent = Date.now();
  }
  let timer = setTimeout(() => {
    ping(1);
  }, 2000);
  ipc.on('pong', (e, data) => {
    console.log('received', data, '+' + (Date.now() - lastSent) + 'ms');
    setTimeout(() => {
      ping(data + 1);
    }, 2000);
    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }
  });
});
