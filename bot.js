const Discord = require('discord.js');
const client = new Discord.Client()

var prefix = '!'

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

 if (message.content === prefix + 'reboot') {
	  
	  if (message.author.id === "319438046485413898") {
		  message.channel.send('[BOT]Yenden başlatılıyor...').then(msg => {
			  console.log('yeniden başlatılıyor')
			  process.exit(0);
		  });
	  } else 
		  message.channel.send('Maalesef bu komutu kullanamazsın. Benim yapımcım değilsin!')
  }
  

client.login(process.env.BOT_TOKEN);
