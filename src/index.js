import { app } from './define/boltApp.js';
import * as store from './store.js';

app.event('app_home_opened', async ({ event, say }) => {
  // Look up the user from DB
  let user = store.getUser(event.user);

  if (!user) {
    user = {
      user: event.user,
      channel: event.channel
    };
    store.addUser(user);

    await say(`Hello world, and welcome <@${event.user}>!`);
  } else {
    await say('Hi again!');
  }
});


// Start your app
(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();

