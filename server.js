import cmd from 'node-cmd';
import express from 'express'; 
import bodyParser from 'body-parser';
import crypto from 'crypto';

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

// github へのプッシュを検知した場合、 git.sh を実行する。
const onWebhook = (req, res) => {
  let hmac = crypto.createHash('sha1', process.env.GIT_SECRET);
  let sig  = `sha1=${hmac.update(JSON.stringify(req.body)).digest('hex')}`;
  console.log(sig);
  console.log(req.headers['x-hub-signature']);

  if (req.headers['x-github-event'] === 'push' && sig === req.headers['x-hub-signature']) {
    cmd.run('chmod 777 ./git.sh'); 
    
    cmd.get('./git.sh', (error, data) => {
      if (data) console.log(data);
      if (error) {
        console.log(error.data.response_metadata);
        return res.sendStatus(-1);
      }
    })

    cmd.run('refresh'); // プロジェクトを再起動する
  }

  console.log("> [GIT] Updated with origin/glitch");
  return res.sendStatus(200);
}

app.post('/git', onWebhook);

// listen for requests
const listener = app.listen(3000, function() {
  console.log('Start listening on port ' + listener.address().port);
});