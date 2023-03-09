import { app } from './define/boltApp.js';

// 必要なモジュールをインポートする
// ここでコマンドの有効化を切り替える
import * as mainEvent from './events/mainEvent.js';

import * as gitWebhook from "../git/server.js";

// Start your app
(async () => {
  await app.start();
  console.log('⚡️ Bolt app is running!');
})();