import { dirWatcherAndSyncToS3 } from './utils';

function main() {
  const pathDir = 'dist/data';

  dirWatcherAndSyncToS3(pathDir);
}

main();
