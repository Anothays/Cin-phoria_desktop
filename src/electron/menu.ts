import { app, Menu, shell } from 'electron';

const isMac = process.platform === 'darwin'

const template = [
  // { role: 'appMenu' }
  ...(isMac
    ? [{
      label: app.name,
      submenu: [
        { role: 'about', label: `À propos de ${app.name}` },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide', label: `Masquer ${app.name}` },
        { role: 'hideOthers', label: 'Masquer les autres' },
        { role: 'unhide', label: 'Afficher tout' },
        { type: 'separator' },
        { role: 'quit', label: 'Quitter' }
      ]
    }]
    : []),
  // { role: 'fileMenu' }
  {
    label: 'Fichier',
    submenu: [
      isMac ? { role: 'close', label: 'Fermer la fenêtre' } : { role: 'quit', label: 'Fermer la fenêtre' }
    ]
  },
  // { role: 'editMenu' }
  {
    label: 'Edition',
    submenu: [
      { role: 'undo', label: 'Annuler' },
      { role: 'redo', label: 'Rétablir' },
      { type: 'separator' },
      { role: 'cut', label: 'Couper' },
      { role: 'copy', label: 'Copier' },
      { role: 'paste', label: 'Coller' },
      ...(isMac
        ? [
          { role: 'selectAll', label: 'Tout sélectionner' },
          { type: 'separator' },
        ]
        : [
          { type: 'separator' },
          { role: 'selectAll', label: 'Tout sélectionner' }
        ])
    ]
  },
  // { role: 'viewMenu' }
  {
    label: 'Vues',
    submenu: [
      { role: 'reload', label: 'Actualiser' },
      { role: 'forceReload', label: 'Actualiser sans cache' },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'resetZoom' },
      { role: 'zoomIn' },
      { role: 'zoomOut' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  // { role: 'windowMenu' }
  {
    label: 'Fenêtre',
    submenu: [
      { role: 'minimize' },
      { role: 'zoom' },
      ...(isMac
        ? [
          { type: 'separator' },
          { role: 'front' },
          { type: 'separator' },
          { role: 'window' }
        ]
        : [
          { role: 'close' }
        ])
    ]
  },
  {
    label: 'Aide',
    role: 'help',
    submenu: [
      {
        label: 'Aide',
        click: async () => {
          await shell.openExternal('https://electronjs.org')
        }
      }
    ]
  }
];


export function createMenu() {
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
} 