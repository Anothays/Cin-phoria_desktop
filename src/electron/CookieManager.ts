import { session } from 'electron';
import { baseUrl } from './Constants.js';


export const setCookie = async (cookie: Electron.CookiesSetDetails) => {
  cookie.url = baseUrl;
  await session.defaultSession.cookies.set(cookie);
}

export const getCookie = (filter: Electron.CookiesGetFilter) => {
  return session.defaultSession.cookies.get(filter)
}

export const removeCookie = (key: string) => {
  return session.defaultSession.cookies.remove(baseUrl, key);
}

// // Query all cookies.
// session.defaultSession.cookies.get({})
//   .then((cookies) => {
//     console.log(cookies)
//   }).catch((error) => {
//     console.log(error)
//   })

// // Query all cookies associated with a specific url.
// session.defaultSession.cookies.get({ url: 'https://www.github.com' })
//   .then((cookies) => {
//     console.log(cookies)
//   }).catch((error) => {
//     console.log(error)
//   })

// // Set a cookie with the given cookie data;
// // may overwrite equivalent cookies if they exist.
// const cookie = { url: 'https://www.github.com', name: 'dummy_name', value: 'dummy' }
// session.defaultSession.cookies.set(cookie)
//   .then(() => {
//     // success
//   }, (error) => {
//     console.error(error)
//   })