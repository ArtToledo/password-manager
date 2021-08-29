const { app, BrowserWindow } = require('electron')
const { join } = require('path')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    title: 'Password Manager',
    resizable: false,
    /* icon: __dirname + '/assets/icon/icon_16x16.png' , */
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.removeMenu()
  mainWindow.loadFile(join(__dirname, 'src', 'pages', 'presentation', 'presentation.html'))
  /* mainWindow.loadFile(join(__dirname, 'src', 'pages', 'home', 'home.html'))
  mainWindow.loadFile(join(__dirname, 'src', 'pages', 'new-password', 'new-password.html')) */
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})