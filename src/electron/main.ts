import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev } from "./util.js";

// app.whenReady().then(() => {
//   const mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//   });
//   mainWindow.loadFile("dist-react/index.html");
// });

app.on("ready", () => {
  const mainWindow = new BrowserWindow({});
  if (isDev) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "dist-react/index.html"));
  }
});
