const Discord = require('discord.js');
const client = new Discord.Client()

var prefix = '!'

client.on('ready', () => {
  console.log(`Bot Artık online ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('**__Aleyküm Selam..__** **__Sunucuya Hoşgeldin__**');
  }
});



client.login(process.env.BOT_TOKEN);
