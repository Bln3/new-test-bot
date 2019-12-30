const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('i am ready!');
});

client.on('guildMemberAdd', member => {
  
  console.log('User' + member.user.username + ' has joined the server!')
  
  const role = member.guild.roles.find('name', 'Member');
  member.addRole(role
  
});



});


client.login(process.env.BOT_TOKEN);
