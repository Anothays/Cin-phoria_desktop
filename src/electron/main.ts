import { app, BrowserWindow } from "electron";
import { baseUrl, COOKIE_JWT, COOKIE_USER } from "./Constants.js";
import { getCookie, removeCookie, setCookie } from "./CookieManager.js";
import { getTokenPaylaod } from "./jwtManager.js";
import { createMenu } from "./menu.js";
import { getPreloadPath, getUIPath } from "./pathResolver.js";
import { removeFromStore, saveToStore } from "./StoreManager.js";
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


  ipcMainOn('saveToken', (data) => {
    saveToStore('jwt', data.token);
    const payload = getTokenPaylaod(data.token);
    if (!payload) return;
    setCookie({ expirationDate: payload.exp, url: "", value: data.token, name: 'jwt', })
    setCookie({ expirationDate: payload.exp, url: "", value: data.user, name: 'user', })
  });

  ipcMainHandle('removeToken', () => {
    removeCookie(COOKIE_JWT);
  });

  ipcMainHandle('removeUserInfo', () => {
    removeCookie(COOKIE_USER);
  });

  ipcMainHandle('getToken', async () => {
    const cookies = await getCookie({ url: baseUrl, name: COOKIE_JWT });
    if (cookies.length === 0) return null;
    const jwt = cookies[0].value;
    return jwt;
  })

  ipcMainHandle('getUserInfo', async () => {
    const cookies = await getCookie({ url: baseUrl, name: COOKIE_USER });
    if (cookies.length === 0) return null;
    const user = cookies[0].value;
    console.log(user);

    return user;
  })
});


