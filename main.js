const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv');
dotenv.config();

client.on('ready', () => {
    console.log(`Logged in as ${client.user}!`);
});

client.on('message', msg => {
    console.log('message received');
    if (msg.author != client.user) {
        if (msg.content === 'ping') {
            msg.channel.send('pong');
        } else {
            console.log(msg.author);
        }
    }
        else {
            // Bot is talking to itself
            console.log('noticed a bot message!');
        }
});

client.login(process.env.TOKEN);
console.log(process.env.TOKEN);
