import { app, BrowserWindow } from "electron";
import { createMenu } from "./menu.js";
import { getPreloadPath, getUIPath } from "./pathResolver.js";
import { getFromStore, removeFromStore, saveToStore } from "./StoreManager.js";
import { ipcMainHandle, ipcMainOn, isDev } from "./util.js";


app.on("ready", () => {
  removeFromStore('jwt'); // Unauthenticate user when application is starting
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      preload: getPreloadPath(),
    }
  });
  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(getUIPath());
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  createMenu();


  ipcMainOn('saveToken', (token) => {
    saveToStore('jwt', token);
  })

  ipcMainHandle('removeToken', () => {
    removeFromStore('jwt');
  })

  ipcMainHandle('getToken', () => {
    return getFromStore('jwt') as string;
  })

});


