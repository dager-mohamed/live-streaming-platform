import chokidar from 'chokidar';
import { deleteFromS3, uploadToS3 } from './aws';

export function dirWatcherAndSyncToS3(directoryPath: string) {
  const watcher = chokidar.watch(directoryPath, { persistent: true });

  watcher
    .on('add', (path) => {
      uploadToS3(path);
    })
    .on('unlink', (path) => {
      deleteFromS3(path);
    })
    .on('ready', () => console.log('[WATCHER] Ready for file changes'))
    .on('error', (err) => console.error(err));
}
