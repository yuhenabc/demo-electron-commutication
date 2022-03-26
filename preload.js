const { contextBridge: bridge, ipcRenderer: ipc } = require('electron');

bridge.exposeInMainWorld('ipc', {
  send: (channel, data) => ipc.send(channel, data),
  on: (channel, fun) => ipc.on(channel, fun),
});
