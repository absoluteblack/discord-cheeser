const Discord = require('discord.js');
const client = new Discord.client();

client.on('read', () => {
    console.log('Logged in as ${client.user.tag}!');
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.channel.send('pong');
    }
});

client.login('token');
