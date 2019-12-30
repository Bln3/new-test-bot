const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('i am ready!');
});

client.on('message', message => {
  if (message.content === 'ping'){
    message.reply('pong');
  }
});


client.login(process.env.NjYxMjU3NDU1Njc3OTk3MDYy.XgoyDQ._kJ1b9xp5IXNDKhbD23WdXrQXuE);
