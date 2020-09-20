const Discord = require('discord.js');
import { token } from './config';

const client  = new Discord.Client();

const LISTENING_CHANNEL_NAME = 'bot-test';   // Channel bot will monitor
const TARGET_CHANNEL_NAME    = 'bot-test-2'; // Channel bot will move messages to

const LISTENING_CHANNEL = guild.channels.cache.find(ch => ch.name === LISTENING_CHANNEL_NAME);

console.log(LISTENING_CHANNEL);

// On bot login, set status and presence
client.on('ready', () => {
  console.log(`Logged in as ${ client.user.tag }!`);
  client.user.setPresence({
      game: {
        name: "It's a feature",
        type: 'WATCHING'
      },
      status: 'idle'
    });

  client.user.setActivity("with you ;)");
});

// Grab all messages from discord
client.on('message', message => {

  if (message.author.bot) return;

  if (message.channel.name === LISTENING_CHANNEL_NAME) {
    
  }
});


// Login to bot
client.login(token);
