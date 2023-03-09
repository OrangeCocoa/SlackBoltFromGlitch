import { app } from './define/boltApp.js';

// 必要なモジュールをインポートする
// ここでコマンドの有効化を切り替える
import * as mainEvent from './events/mainEvent.js';

import * as gitWebhook from "../server.js";

// Start your app
(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();