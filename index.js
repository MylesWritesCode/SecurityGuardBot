const fs      = require('fs');
const Discord = require('discord.js');
const config  = require('./config.json');

const client       = new Discord.Client();
client.commands    = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${ file }`);
  client.commands.set(command.name, command);
}

const LISTENING_CHANNEL_NAME = 'apply-here';            // Channel bot will monitor
const TARGET_CHANNEL_NAME    = 'application-read-only'; // Channel bot will move messages to

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

  // Don't respond if the message author is a bot
  if (message.author.bot) return;

  // Do things if the message is in the target channel
  if (message.channel.name === LISTENING_CHANNEL_NAME) {
    let args = {};
    args.targetChannel = message.guild.channels.cache.find(ch => ch.name === TARGET_CHANNEL_NAME);

    // Check ./commands/message-copier for implementation.
    client.commands.get('message-copier').execute(message, args);

    message.delete();
  }
});


// Login to bot
client.login(process.env.TOKEN);
