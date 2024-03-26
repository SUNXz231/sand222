const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1221002539198316625')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/xcannabiss') //Must be a youtube video link 
    .setState('Your State')
    .setName('mrnekrozyt')
    .setDetails(`SAND [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/724253887959269386/1197127176726781992/anime-celty-sturluson-79m4jzscabdxc4ix.gif?ex=660d3110&is=65fabc10&hm=5656b99bafef94009e5fe5d3fd943db0951cf44bf73882098dd1ec2d1e5bccae&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Large Text') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/724253887959269386/1197124698522259507/anime.gif?ex=660d2ec1&is=65fab9c1&hm=9c261e9b12c26cdec87108a6c5baaac1910779e00f2891a683dfe9656311e47a&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') //Text when you hover the Small image
    .addButton('インスタグラム', 'https://www.instagram.com/xfsxntxs?igsh=MjdxbW1lbXNoams1')
    .addButton('ユーチューブ', 'https://www.youtube.com/channel/UC9ZGDY1xeeOSbjKEQCStg0g');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `sᴀɴᴅ ᴘᴀɢᴇᴏɴᴇ [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);