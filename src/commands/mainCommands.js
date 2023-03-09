import { app } from '../define/boltApp.js';

// 挨拶を返す
app.command("/test", async ({ command, ack, say }) => {
  ack();
  const msg = command.text || "Hello!!";
  say(`<@${command.user_id}> ${msg}`);
});

// ボタンブロックを表示
app.command("/test_block", async ({ command, ack, say }) => {
  ack();
  say({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `<@${command.user_id}>\nご飯を食べる？`,
        },
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "食べる",
            },
            style: "primary",
            value: "yes",
            action_id: "btn_yes",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "食べない",
            },
            style: "danger",
            value: "no",
            action_id: "btn_no",
          },
        ],
      },
    ],
  });
});

// ボタン用
app.action(/btn_[yes|no]/, async ({ body, ack, say }) => {
  ack();
  const val = body.actions[0].value;
  const reaction = val === "yes" ? "thumbsup_all" : "sadblob";

  // スタンプをつける
  /*await app.client.reactions.add({
    token: process.env.SLACK_BOT_TOKEN,
    channel: body.channel,
    timestamp: body.ts,
    name: reaction,
  });*/
});
