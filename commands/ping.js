/**
 * Example ping command
 */

module.exports = {
  name: 'ping',
  description: 'this is a ping',
  execute(message, args) {
    message.channel.send('Pong.');
  }
}