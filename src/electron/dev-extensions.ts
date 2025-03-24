/*
 * Install DevTool extensions when Electron is in development mode
 */
import { app } from 'electron';

declare const ENV: string;

if (ENV === 'development' && !process.env['CI']) {
  const installExtension = require('electron-devtools-installer').default;

  const extensions = [
    { name: 'Redux DevTools', id: 'lmhkpmbekcpmknklioeibfkpmmfibljd' },
    // Augury is currently not working with Electron, but this can be uncommented when fixed
    // See: https://github.com/rangle/augury/issues/687
    // { name: 'Angular Augury', id: 'elgalmkoelokbchhkhacckoklkejnhcd' },
  ];

  app.once('ready', () => {
    const userDataPath = app.getPath('userData');
    extensions.forEach(ext => {
      installExtension(ext.id).then(() => {
        console.log(ext.name + ' installed in ' + userDataPath);
      }).catch((err: Error) => {
        console.error('Failed to install ' + ext.name, err);
      });
    });
    require('devtron').install();
  });

}

export async function installDevExtensions(): Promise<void> {
  if (process.env['NODE_ENV'] === 'development') {
    try {
      const installer = require('electron-devtools-installer');
      const forceDownload = !!process.env['UPGRADE_EXTENSIONS'];
      const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

      await Promise.all(
        extensions.map(name => installer.default(installer[name], forceDownload))
      ).catch((err: Error) => {
        console.log('Error installing extensions:', err);
      });
    } catch (err) {
      console.log('Error loading electron-devtools-installer:', err);
    }
  }
}
