
const electron = require('electron');

electron.contextBridge.exposeInMainWorld("electron", {
} satisfies Window['electron']);

electron.contextBridge.exposeInMainWorld("auth", {
  saveToken: (token) => ipcSend('saveToken', token),
  getToken: () => ipcInvoke('getToken'),
  removeToken: () => ipcInvoke('removeToken'),
} satisfies Window['auth']);



/**
 * @description Wrapper around electron.ipcRenderer.invoke function in order to make ipc operations typesafe
 */
function ipcInvoke<Key extends keyof EventPayloadMapping>(key: Key): Promise<EventPayloadMapping[Key]> {
  return electron.ipcRenderer.invoke(key);
}


/**
 * @description Wrapper around electron.ipcRenderer.on function in order to make ipc operations typesafe
 */
// function ipcOn<Key extends keyof EventPayloadMapping>(
//   key: Key,
//   callback: (payload: EventPayloadMapping[Key]) => void
// ) {
//   const cb = (_: Electron.IpcRendererEvent, payload: any) => callback(payload);
//   electron.ipcRenderer.on(key, cb);
//   return () => electron.ipcRenderer.off(key, cb);
// }

function ipcSend<Key extends keyof EventPayloadMapping>(
  key: Key,
  payload: EventPayloadMapping[Key]
) {
  electron.ipcRenderer.send(key, payload);
}