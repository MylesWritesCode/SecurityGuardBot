/**
 * Copies messages from one channel to the other.
 */

const Discord = require('discord.js');

module.exports = {
  name: 'message-copier',
  description: 'copies a message into another channel',
  execute(message, args) {
    const applicationEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Guild Application')
      .setAuthor(message.member.user.tag, 'https://i.imgur.com/wSTFkRM.png')
      .setDescription('Some description here')
      .setThumbnail('https://i.imgur.com/wSTFkRM.png')
      .setTimestamp()
      .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

    args.targetChannel.send(applicationEmbed);
    args.targetChannel.send(message.toString());
  }
}