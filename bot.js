const Discord = require('discord.js');
const client = new Discord.Client()
const ayarlar = require('./ayarlar.json')


var prefix = ayarlar.prefix;


client.on('ready', () => {
  console.log(`Bot Artık online ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('**__Aleyküm Selam..__** **__Hoşgeldin__**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hi') {
    msg.reply('**__Hi..__** **__Welcome__**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'owners') {
    msg.reply('**__Rigby#3943__** **YT_RoDeniz#6527____**');
  }
});


  

client.login(process.env.BOT_TOKEN);
