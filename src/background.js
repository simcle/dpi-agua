'use strict'

import { app, protocol, BrowserWindow, ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import sqlite3 from 'sqlite3'
import path from 'path'

const userData = app.getPath('userData')
const dbFile = path.join(userData, 'database.sqlite')

const db = new sqlite3.Database(dbFile)

db.serialize(function () {
  let sql = `CREATE TABLE IF NOT EXISTS logger(
    ph REAL,
    do REAL,
    ec REAL,
    temp REAL,
    pump REAL,
    co2 REAL,
    o2 REAL,
    hum REAL,
    orp REAL,
    timestamp TEXT
  )`;
  db.run(sql)
})



const isDevelopment = process.env.NODE_ENV !== 'production'

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 525,
    minWidth: 800,
    minHeight: 525,
    frame: false,
    titleBarStyle: 'hidden', // macOS
    trafficLightPosition: {x: 10, y: 7}, // macOS
    webPreferences: {
      
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    }
  })

  win.on('enter-full-screen', () => {
    // olny macOS
    if(process.platform === 'darwin') {
      win.webContents.send('navbarMacOS', false)
    }
  })
  win.on('leave-full-screen', () => {
    // only macOS
    if(process.platform === 'darwin') {
      win.webContents.send('navbarMacOS', true)
    }
  })
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
}


// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

// cek opertaing system

ipcMain.on('OperatingSystem', (event) => {
  let arg = {
    version: app.getVersion(),
    navbar: true
  }
  console.log(app.getVersion());
  if(process.platform === 'darwin') {
    arg.navbar = false
  }
  event.returnValue = arg


})



// set data to database
ipcMain.on('storeData', (event, data) => {
  console.log(data);
  db.serialize(function() {
    let sql = `INSERT INTO logger('ph', 'do', 'ec','temp','pump','co2','o2','hum','orp','timestamp') 
      VALUES('${data.ph}', '${data.do}', '${data.ec}','${data.temp}','${data.pump}','${data.co2}','${data.o2}','${data.hum}','${data.orp}','${data.timestamp}')`;

    db.run(sql);
  })
})

// get start date form database
ipcMain.on('avaliabledate', (event) => {
  db.serialize(function () {
    db.all(`SELECT timestamp FROM logger ORDER BY timestamp ASC LIMIT 1`, (err, row) => {
      if(err) throw err
      event.returnValue = row
    })
  })
})

// get data from data base with paginate schema
function chekPage (i , p) {
  if(i > p ) {
    p = p+1;
  }
  return p;
}


ipcMain.on('getData', (event, arg) => {
  let order = arg.order;
  let key = arg.key
  let page = arg.page
  let startDate = "'"+arg.start+"'"
  let endDate = "'"+arg.end+"'"
  let count;
  let data = {};
  let limit = 20;
  let offset = (page -1) * limit;
  
  db.serialize(function() {
    db.all(`SELECT COUNT(*) as count FROM logger WHERE date(timestamp) BETWEEN ${startDate} and ${endDate}`, (err, row) => {
      if(err) throw err;
      count = row[0].count
      db.all(`SELECT * FROM logger  WHERE date(timestamp) BETWEEN ${startDate} and ${endDate} ORDER BY ${key} ${order} LIMIT ${limit} OFFSET ${offset}`, (err, row) => {
        let p = Math.floor(count / limit)
        let i = count / limit
        let last_pages = chekPage(i, p)
        data = {
          logger: row,
          pages: {
            current_page: page,
            last_page: last_pages
          }
        }
        event.returnValue = data
      })
    })
  })
})

ipcMain.on('minimize', event => {
  event.sender.getOwnerBrowserWindow().minimize()
})

ipcMain.on('maximize', event => {
  const window = event.sender.getOwnerBrowserWindow()

  window.isMaximized() ? window.unmaximize() : window.maximize()
})

ipcMain.on('close', event => {
  event.sender.getOwnerBrowserWindow().close()
})